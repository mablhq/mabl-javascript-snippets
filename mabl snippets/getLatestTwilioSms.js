/**
 * This snippet fetches the last SMS message from Twilio and returns the body.
 * You will need to place your Twilio API credentials in a mabl Credential, and add it to the Plan before running the snippet.
 * Add a phone number in 'toNumberFilter' below, to filter to only a specific inbound phone number.
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 https://messages.google.com/web/conversations/new *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
function mablJavaScriptStep(mablInputs, callback) {

  // Add Twilio API creds as username: Account SID, password: auth token, add to the plan
  var twilioAccountSid = mablInputs.variables.web.defaults.credentials.username;
  var twilioAccountAuthToken = mablInputs.variables.web.defaults.credentials.password;
  var toNumberFilter = undefined; // e.g. "+16177415396"; // add a phone number here, to filter the number

  var url = 'https://api.twilio.com/2010-04-01/Accounts/' + twilioAccountSid + '/Messages.json';

  function responseListener(event) {
    var results = JSON.parse(this.responseText);
    if (results.messages && results.messages.length > 0) {
      var lastMessage = results.messages.filter(function (message) {
        if (toNumberFilter) {
          return message.to === toNumberFilter;
        }
        return true; // no number filtering
      })[0];

      if (lastMessage) {
        return callback(lastMessage.body);
      }
      throw new Error('No messages matched number: ' + toNumberFilter);
    } else {
      throw new Error('No messages found');
    }
  }

  function failureHandler(event) {
    console.error('error');
    throw new Error('Request error: ' + event.message);
  }

  function abortHandler(event) {
    console.error('aborted');
    throw new Error('Request aborted: ' + event.message);
  }

  var request = new XMLHttpRequest();
  var authHeader = 'Basic ' + btoa(twilioAccountSid + ':' + twilioAccountAuthToken);
  request.addEventListener('load', responseListener);
  request.addEventListener('error', failureHandler);
  request.addEventListener('abort', abortHandler);
  request.open('GET', url);
  request.setRequestHeader('Authorization', authHeader);
  request.send();
}
