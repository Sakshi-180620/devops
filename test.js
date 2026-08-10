let result = checkFile("script.js");

if (!result) {
    console.error("TEST CASE 2 FAILED");
    process.exit(1);
} else {
    console.log("TEST CASE 2 PASSED");
    process.exit(0);
}



