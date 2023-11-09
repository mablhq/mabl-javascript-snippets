/**
 * Checks userAgent for Mobile or Android keywords to determine if on mobile mode.
 */
function mablJavaScriptStep(mablInputs, callback) {
    /**
     * Checking for the mobile user agent and touch events catches most mobile
     * scenarios. This method does not cover:
     *     Nexus 10, Nexus 7, Blackberry PlayBook, Laptop with touch,
     *     Laptop with HiDPI screen, Laptop with MDPI screen, Kindle Fire HDX
     */
    let mobileCheck1 = (window.navigator.userAgent.indexOf('Mobile') !== -1 ||
    window.navigator.userAgent.indexOf('Android') !== -1);
    mobileCheck1 = mobileCheck1 || ('TouchEvent' in window && 'ontouchstart' in window);

     /**
      * If you know the cutoff points for your application to enter different
      * mobile states, this solution is more robust. Checking the viewport width
      * can allow you to determine if your application is in a mobile state. In
      * addition, you can compare to multiple values if your application has
      * multiple mobile states (ex. different states for tablets vs phones).
      */
    let mobileCutoffWidth = 1000;
    let mobileCheck2 = window.innerWidth < mobileCutoffWidth;
    // callback(mobileCheck2);
    callback (mobileCheck1);
  }