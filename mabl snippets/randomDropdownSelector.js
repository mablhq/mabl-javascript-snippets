function mablJavaScriptStep(mablInputs, callback) {

  const myfunction = ()=> {
    let select = document.getElementById('day'); //Replce 'day' with your CSS selector
    let items = select.getElementsByTagName('option'); //Confirm your element tagnames and adjust as necessary
    let index = Math.floor(Math.random() * items.length);

    select.selectedIndex = index;
    return false;
  }
  callback(myfunction());
}
