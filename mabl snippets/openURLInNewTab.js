/*
* Parameterized, pass in the URL you want opened in the Site variable
*/
function mablJavaScriptStep(mablInputs, callback, Site = 'https://sandbox.mabl.com/') {
    let NewURL = window.open(Site, '_blank');
    callback(true);
}