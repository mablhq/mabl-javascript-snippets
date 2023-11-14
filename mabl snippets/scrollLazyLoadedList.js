/**
 * @NOTE - This is a snippet will not work in Internet Explorer.
 */

function mablJavaScriptStep(mablInputs, callback) {
    // ## Values that one could parameterize ##
    let scrollViewSelector = "SELECTOR";
    let elementSelector = "SELECTOR";
    let elementText = "TEXT_OF_OPTION";

    // Find the scroll view
    let table = document.querySelector(scrollViewSelector);

    // Get the height of the number of cells that are loaded at a time
    let loadedCellsHeight = table.offsetHeight;

    // Create a variable to keep track of the number of times the "scrollDown" function is called
    let loopCount = 0;

    // Call the "scrollDown" function once every half second
    let scrollInterval = setInterval(scrollDown, 500);

    // Function to be called to scroll down
    function scrollDown() {
        // Increase the value of variable "loopCount" by 1
        ++loopCount;

        // Scroll down the table the height of the loaded cells * the number of times we have looped
        table.scroll(0, loopCount * loadedCellsHeight);

        // Get all the loaded site names
        let allElements = Array.from(document.querySelectorAll(elementSelector));

        // Find all the site names that contain the text in variable "elementText"
        let matchingElements = allElements.filter((cell) =>
            cell.innerText.includes(elementText)
        );

        // If the site name we were looking for was there, then there should be 1 value in the array (0 values otherwise)
        let elementTextFound = matchingElements.length !== 0;

        // Determine if we have scrolled to the bottom of the scroll view
        let scrolledToBottom =
            table.scrollTop + table.offsetHeight === table.scrollHeight;

        // Stop scrolling if the row was found and return
        if (elementTextFound) {
            callback("Element Found");
            clearInterval(scrollInterval);
        }
        // Stop scrolling if we have reached the bottom of the results and return
        if (scrolledToBottom) {
            callback("Element Not Found. Bottom of scroll view reached.");
            clearInterval(scrollInterval);
        }
    }
}
