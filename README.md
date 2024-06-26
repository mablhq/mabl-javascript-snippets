# mabl Javascript Snippets

This repository functions as the site where users can view and take JavaScript examples that can be used in their own mabl browser and mobile testing.

## mabl snippets

The examples included in the mabl snippets are examples of different ways one can utilize javascript to create custom steps that would be useful to anyone using mabl to automate their Browser and/or Native Mobile testing. The example snippets here are updated periodically when we find examples that are potentially useful for our users.

## helpful functions

These are examples of functions that can be used within your snippets to solve certain problems.

### Example Usage:

Here is an example of using the browser testing function `removeAccentsFromString` create a parameterized snippet that can take a string and remove its accents.

The example below can remove the accents from "Français" to get "Francais"

```javascript
function mablJavaScriptStep(mablInputs, callback, accentedText = undefined) {
  callback(removeAccentsFromString(accentedText));
}

// Example mabl function usage:
function removeAccentsFromString(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
```

Note: The added function can be placed below the `mablJavaScriptStep` function so you can focus on keeping your snippet steps logic in that main function.
