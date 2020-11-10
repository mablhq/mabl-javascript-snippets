/**
 * Replaces all accented characters in text with their non-accented versions
 * @param {String} text - The string with the accented characters in it
 * @returns {String} - The string with the accents removed
 */
function replaceAccentedCharacters(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
