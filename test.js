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


// 10 Test Cases

let result1 = checkFile("indexx.html");
let result2 = checkFile("script.js");
let result3 = checkFile("student.json");
let result4 = checkFile("style.css");
let result5 = checkFile("about.html");
let result6 = checkFile("contact.html");
let result7 = checkFile("README.md");
let result8 = checkFile("login.html");
let result9 = checkFile("register.html");
let result10 = checkFile("data.json");


// Check Test Results

if (
    !result1 ||
    !result2 ||
    !result3 ||
    !result4 ||
    !result5 ||
    !result6 ||
    !result7 ||
    !result8 ||
    !result9 ||
    !result10
) {
    console.error("TEST FAILED");
    process.exit(1);
} else {
    console.log("ALL 10 TEST CASES PASSED");
    process.exit(0);
}


