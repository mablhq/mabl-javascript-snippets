"use strict";

/**
 * This javascript snippet sets a value on an input for applications using react.  mabl can generally support setting the input
 * value directly by interacting with the page but this function provides a template for setting it via a javascript step, if needed
 * This function may also work for other frameworks but it was design/created with react in mind as react suppresses ChangeEvents normally.
 *  
 * This snippet is adapted from the approach taken in the react testing library approach.  See https://github.com/facebook/react/issues/10135#issuecomment-401496776
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
function mablJavaScriptStep(mablInputs, callback) {
  // Gets the page element by ID  
  var textbox = document.querySelector('<query here>'); //check that the element is not null or undefined  

  if (!textbox) {
    throw Error('Element cannot be found');
  }

  function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set
    const prototype = Object.getPrototypeOf(element)
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set
    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value)
    } else {
      valueSetter.call(element, value)
    }
  }
  setNativeValue(textarea, '<value to input>')
    
  var changeEvent = document.createEvent ('Event');
  changeEvent.initEvent('change', true, false);
  textbox.dispatchEvent(changeEvent);  

  callback('Value has been inserted into textbox');
}
