"use strict";

/**
 * Injects a synthetic audio stream to mock microphone input for recording application tests.
 *
 * This snippet overrides navigator.mediaDevices.getUserMedia so that when the app
 * calls it (e.g. to start a recording session), it receives a real MediaStream backed
 * by a generated sine-wave audio track instead of a real microphone.
 *
 * Use this in a JavaScript step BEFORE clicking the record button, so the override
 * is in place when the app requests mic access.
 *
 * The generated audio is a 440 Hz sine wave (1 second, mono, 48 kHz) — long enough
 * to satisfy a 5-second recorder if the browser loops/sustains the oscillator.
 * The AudioContext oscillator runs continuously until the stream tracks are stopped.
 *
 * Limitations:
 * - Requires the page to use navigator.mediaDevices.getUserMedia (standard Web API).
 * - Does not work if the app uses the legacy navigator.getUserMedia API.
 * - AudioContext may be suspended until a user gesture; run this snippet after a
 *   user interaction step (e.g. clicking the mic select dropdown) to avoid that.
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables.
 * @param {function} callback - Must be called to complete the JavaScript step.
 */
function mablJavaScriptStep(mablInputs, callback) {
    try {
        // Create an AudioContext at the same sample rate the app expects (48 kHz).
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) {
            throw new Error('AudioContext is not supported in this browser.');
        }

        var audioContext = new AudioCtx({ sampleRate: 48000 });

        // Create a continuous 440 Hz sine-wave oscillator as the audio source.
        var oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

        // Route oscillator → gain (low volume so it doesn't clip) → stream destination.
        var gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);

        var streamDestination = audioContext.createMediaStreamDestination();
        oscillator.connect(gainNode);
        gainNode.connect(streamDestination);
        oscillator.start();

        var syntheticStream = streamDestination.stream;

        // Override getUserMedia to return the synthetic stream for audio-only requests.
        // Video-only or other requests are passed through to the real implementation.
        var realGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

        navigator.mediaDevices.getUserMedia = function (constraints) {
            if (constraints && constraints.audio && !constraints.video) {
                return Promise.resolve(syntheticStream);
            }
            return realGetUserMedia(constraints);
        };

        // Store references on window so a cleanup snippet can stop the oscillator later.
        window.__mablMockAudioContext = audioContext;
        window.__mablMockOscillator = oscillator;
        window.__mablMockRealGetUserMedia = realGetUserMedia;

        callback('Mock microphone stream injected. getUserMedia will return a synthetic 440 Hz audio track.');
    } catch (err) {
        throw new Error('injectMockMicrophoneAudio failed: ' + err.message);
    }
}
