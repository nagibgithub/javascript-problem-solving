// function isJavaScriptFile(fileName) {
//     const fileLen = fileName.length;
//     let fileType = "";
//     for (let i = fileLen - 3; i < fileLen; i++) {
//         fileType = fileType + fileName[i];
//     }
//     if (typeof fileName != "string" || fileName.length == 0) {
//         return "Type valid file name"
//     } else if (fileType == ".js") {
//         return true;
//     } return false;
// }

function isJavaScriptFile(fileName) {
    const fileLen = fileName.length;
    let fileType = "";
    if (typeof fileName !== "string" || fileName.length == 0) {
        return "Type valid file name"
    }
    for (let i = fileLen - 3; i < fileLen; i++) {
        fileType = fileType + fileName[i];
    }
    if (fileType == ".js") {
        return true;
    } return false;
}

console.log(isJavaScriptFile(123));