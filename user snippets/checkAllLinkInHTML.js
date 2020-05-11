/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
 
// e.g. 
//   dev domain is 'dev.daipresents.com'
//   stg domain is 'stg.daipresents.com'
//   pro domain is 'daipresents.com' or 'daipresents.jp'
const MY_DOMAIN = 'daipresents\.(com|jp)';
const DEV_URL_REGEXP = '^dev\.' + MY_DOMAIN;
const STG_URL_REGEXP = '^stg\.' + MY_DOMAIN;
const PRO_URL_REGEXP = MY_DOMAIN;

// Please set true and dummy value for each setting while you are debugging
const MY_DEBUG = true;
const MY_DEBUG_REGEXP = PRO_URL_REGEXP;

function mablJavaScriptStep(mablInputs, callback) {

  let scriptElements = document.getElementsByTagName('script');
  let linkElements = document.getElementsByTagName('link');
  let aElements = document.getElementsByTagName('a');
  let elementsList = [scriptElements, linkElements, aElements];
  
  let isCorrect = true;

  for(let i = 0; i < elementsList.length; i++) {
    let elements = elementsList[i];
    for (let j = 0; j < elements.length; j++) {
      let domain = getOnlyDomain(elements[j]);
      
      if (!domain.match(MY_DOMAIN)) {
        // url is external site etc.
        logger("skip this domain: " + domain);
        continue;
      }

      if (!checkDomain(domain)){
        isCorrect = false;
        break;
      }
    }
    
    if (!isCorrect) {
      break;
    }
  }

  if (isCorrect) {
    logger('all url is correct.');
  } else {
    logger('Wrong url found.')
  }
  
  callback(isCorrect);
}


function checkDomain(domain) {
  let regExp = getRegExpForCurrentEnv();
  if (domain.match(regExp)) {
    logger('correct domain: ' + domain);
    return true;
  } else {
    logger('wrong domain: ' + domain);
    return false;
  }
}

/**
 * Return only domain part.
 * e.g. https://stg.daipresents.com/?param=abc => stg.daipresents.com
 * @param {*} element - element
 */
function getOnlyDomain(element) {
  let value;
  if (element.src) {
    value = element.src;
  } else if (element.href) {
    value = element.href;
  } else {
    logger('no href or src attribution.');
    return '';
  }

  return value.replace(/.+\/\//, '').replace(/\/.+$/, '');
}

/**
 * return regExp to check URL for each enviroment.
 */
function getRegExpForCurrentEnv() {
  if (MY_DEBUG) {
    return MY_DEBUG_REGEXP;
  }

  let url = location.href;
  if (url.match(DEV_URL_REGEXP)) {
    return DEV_URL_REGEXP;
  } else if (url.match(STG_URL_REGEXP)) {
    return STG_URL_REGEXP;
  } else {
    return PRO_URL_REGEXP;
  }
}

function logger(message) {
  if (MY_DEBUG) {
    console.log('[DEBUG] ' + message);
  }
}
