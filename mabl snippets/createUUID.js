/**
 * Creates a random UUID (Universal Unique Identifier)
 */

function mablJavaScriptStep(mablInputs, callback) {

    let date = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (date + Math.random()*16)%16 | 0;
      date = Math.floor(date/16);
      return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    callback(uuid);
}
