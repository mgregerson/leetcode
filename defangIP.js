/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
    // First, we need to split the string into an array.
    return address.split(".").join("[.]");
}
console.log(defangIPaddr("1.1.1.1"));
