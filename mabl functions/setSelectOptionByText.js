/**
 * Selects an option from a <select> element dropdown based on innerText
 * @param {Element} selectElement - The web element of the select object
 * @param {string} optionText - The text of the option to select
 * @return {string} - Description of what was selected
 */
function setSelectOptionByText(selectElement, optionText) {
  let options = Array.from(selectElement.querySelectorAll("option"));
  let optionElm = options.filter((option) => {
    return option.innerText == optionText;
  })[0];
  selectElement.value = optionElm.value;
  return (
    "Option Text: " + optionElm.innerText + ", Option Value: " + optionElm.value
  );
}
