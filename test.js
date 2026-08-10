
const fs = require("fs");

function checkFile(fileName) {

    if (fs.existsSync(fileName)) {
        console.log(fileName + " : File Exists");
        return true;
    } else {
        console.error(fileName + " : File Not Found");
        return false;
    }
}

const files = [
    "indexx.html",
    "style.css",
    "script.js",
    "test.js"
];

let allPassed = true;

files.forEach(function(file) {

    if (!checkFile(file)) {
        allPassed = false;
    }

});

if (!allPassed) {
    console.error("TEST FAILED");
    process.exit(1);
} else {
    console.log("ALL TESTS PASSED");
    process.exit(0);
}
