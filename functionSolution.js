// ==============================================================================
// --------------------------  Question No 01 -----------------------------------
// ==============================================================================
// -----------------------------------------------------------------------------
// ১. সিম্পল একটা ফাংশন লিখতে হবে। 
// যেটার নাম হবে feetToInch 
// এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch। 
// অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// -----------------------------------------------------------------------------
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
// const inputFeet = 5;
// const result = feetToInch(inputFeet);
// console.log(inputFeet, "Feet =", result, "Inch");
// ==============================================================================
// --------------------------  Question No 02 -----------------------------------
// ==============================================================================
// -----------------------------------------------------------------------------
// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে
// সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
// -----------------------------------------------------------------------------
function centimeterToMeter(centimeter) {
    const meter = centimeter * .01;
    return meter;
}
// const inputCentimeter = 12;
// const result = centimeterToMeter(inputCentimeter);
// console.log(inputCentimeter, "Centimeter =", result, "Meter");
// ==============================================================================
// --------------------------  Question No 03 -----------------------------------
// ==============================================================================
// -----------------------------------------------------------------------------
// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। 
// যেই ফাংশনের নাম হবে paperRequirements
// এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। 
// ===> প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও।
// ===> সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও।
// ===> থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও।
// অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 
// ===> প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// ===> সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// ===> তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। 
// সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। 
// আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
// -----------------------------------------------------------------------------
function paperRequirements(book1, book2, book3) {
    const book1page = 100;
    const book2page = 200;
    const book3page = 300;
    const totalPage = book1 * book1page + book2 * book2page + book3 * book3page;
    return totalPage;
}
// const inputBook1Quantity = 2;
// const inputBook2Quantity = 3;
// const inputBook3Quantity = 4;
// const result = paperRequirements(inputBook1Quantity, inputBook2Quantity, inputBook3Quantity);
// console.log("Total Page required:", result, "Pages");
// ==============================================================================
// --------------------------  Question No 04 -----------------------------------
// ==============================================================================
// -----------------------------------------------------------------------------
// ৪. একটা ফাংশন লিখবে।
// এই ফাংশনের নাম হবে bestFriend
// তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
// সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে।
// তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
// এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
// -----------------------------------------------------------------------------
function bestFriend(fndArray) {
    let fndNameLen = 0;
    let bestFriendName = "";
    for (let i = 0; i < fndArray.length; i++) {
        const fndName = fndArray[i];
        if (fndName.length > fndNameLen) {
            fndNameLen = fndName.length;
            bestFriendName = fndName;
        }
    }
    return bestFriendName;
}
// const inputFndArray = ["Nagib Mahfuz", "Adib Mahmud", "Farhana Yeasmin", "Mazibur Rahman", "Shamsun Nahar"];
// const result = bestFriend(inputFndArray);
// console.log(result);
// ==============================================================================
// --------------------------  Question No 05 -----------------------------------
// ==============================================================================
// -----------------------------------------------------------------------------
// ৫. এইটা একটু ট্রিকি হতে পারে। 
// একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
// তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। 
// এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
// অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। 
// আর যদি নেগেটিভ সংখ্যা হয়। 
// তাহলে লুপটা স্টপ করে দিবে। 
// এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে সেগুলা রিটার্ন করে দিবে। 
// -----------------------------------------------------------------------------
function positiveNumbers(numArray) {
    let positiveNumArr = [];
    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];
        if (num > 0) {
            positiveNumArr.push(num);
        } else {
            break;
        }
    }
    return positiveNumArr;
}
// const inputnumArray = [20,44,16,18,12,4,22,30,8,33,19,42,-39,7,16,32,30,38,4,20,36,19];
// const result = positiveNumbers(inputnumArray);
// console.log("Only Positive Numbers =", result);
// ==============================================================================