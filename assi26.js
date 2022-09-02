let string="12345"

try {
    console.log(`Reversed string is: ${string.split("").reverse().join("")}`)
} catch (e) {
    console.log(`Error ${e}`);
} finally {
    console.log(`Type of my_string is ${typeof string}`);
}