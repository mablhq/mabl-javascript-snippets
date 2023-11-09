/*
* Parameterized, make sure to adjust the property value to whatever property value is used on the element
*/
function mablJavaScriptStep(mablInputs, callback, property = 'color', selector = 'a[target=\'_blank\']') {

  // assign element to CSS selector
  let element = document.querySelector(selector);
  // pull property if element exists
  if (element) {
    let style = window.getComputedStyle(element);
    let elementColor = style.getPropertyValue(property);
    let hexEvaluated = rgbToHex(elementColor);
    callback(hexEvaluated);
  } else {
    callback("Element not found");
  }
}

function rgbToHex (rgb) {
  let a = rgb.split("(")[1].split(")")[0];
  a = a.split(",");
  let b = a.map(function(x){             //For each array element
    x = parseInt(x).toString(16);      //Convert to a base16 string
    return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
});
b = "0x"+b.join("");
return b;
}
