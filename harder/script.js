var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Function to check if a name starts with 'j' or 'J'
function startsWithJ(name) {
    return name.charAt(0).toLowerCase() === 'j';
}

// Function to fix the external libraries (if necessary)
// You may need to define the fix here

// Loop over each name
names.forEach(function(name) {
    // Check if the name starts with 'j' or 'J'
    if (startsWithJ(name)) {
        // Print 'Goodbye' for names starting with 'j' or 'J'
        console.log("Goodbye " + name);
    } else {
        // Print 'Hello' for other names
        console.log("Hello " + name);
    }
});