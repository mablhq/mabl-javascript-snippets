/**
* getAgGridCell - Created by Bill Montbleau, 2024
* 
* For a table created with AG Grid (see https://ag-grid.com/example), locate 
* the cell that's in the Nth row of a given column header name, and return the 
* text. Optionally, click on the link inside of it, too.
* 
* Parameters:
* - table_container - The XPath that contains the Ag Grid tabe (default: "html") 
* - row_index - The desired row number (default: 1)
* - col_name - The desired column name 
* - click_cell - Set to "True" or "Yes" (case insensitive) to look for a link 
*                inside the cell, and click on it.
*/
function mablJavaScriptStep(mablInputs, callback, click_cell = 'False', col_name = 'Instrument', row_index = '1', table_container = 'html') {

  // Find the colunn of the given name, and extract its aria-colindex value.
  // All subsequent rows in the column should have this parameter value, too.
  var header_xpath = `//div[@role="columnheader"][normalize-space()="${col_name}"]`;
  var col_header_node = document.evaluate(header_xpath, document, null, 
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null).singleNodeValue;
  var actual_col = col_header_node.getAttribute("aria-colindex");

  // Note that indexing of the "row-id" and "row-index" attributes each start 
  // at 0, not 1!
  row_index = Number(row_index) - 1;
  
  // Generate the XPath for the cell, then generate a node for that element.
  var cell_xpath = `${table_container}//div[@row-index="${row_index}"]/div[@aria-colindex="${actual_col}"]`;
  
  var cell_node = document.evaluate(cell_xpath, document, null, 
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null).singleNodeValue;

  // Finally, get its text.
  var cell_text = cell_node.innerText;


  // If click_cell is 'true' or 'yes', click on the link in the cell.
  if (['t','y'].includes(click_cell.toLowerCase()[0])) {
    var link_node = document.evaluate(cell_xpath + "//a", document, null, 
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null).singleNodeValue;
    if (link_node == null) {
      link_node = cell_node;
    }
    link_node.click();
  }

  // Return the text
  callback(cell_text);

}
