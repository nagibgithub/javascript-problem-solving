// ===================================================================================
// Problem:1   radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । 
// এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। 
// তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। 
// রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// Sample Data: Input	Output
// 10       ==> 572.96
// 25       ==> 1432.39
// 199      ==> 11401.86
// -----------------------------------------------------------------------------------
function radianToDegree(radian) {
    if (typeof(radian) != "number") {
        return "Please Type number value";
    }
    const degree = (radian * 57.2958).toFixed(2);
    return degree;
}
// ===================================================================================

// ===================================================================================
// Problem:2   isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile ।
// এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) 
// যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)।
// যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে
// আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
// -------------------
// Sample Data    
// Input          ==> Output
// 'app.js'       ==> true
// 'js.png'       ==> false
// 'image.js.png' ==> false
// 'image.jpg.js' ==> true
// -----------------------------------------------------------------------------------
function isJavaScriptFile(fileName) {
    const fileLen = fileName.length;
    let fileType = "";
    for (let i = fileLen - 3; i < fileLen; i++) {
        fileType = fileType + fileName[i];
    }
    if (fileName !== "string" || fileName.length == 0) {
        return "Type valid file name"
    }
    if (fileType == ".js") {
        return true;
    } return false;
}
// -----------------------------------------------------------------------------------
function isJavaScriptFile(fileName) {
    if (typeof fileName != "string" || fileName.length == 0) {
        return "Type valid file name";
    }
  if (fileName.endsWith(".js")){
      return true;
    }
    return false;
}
// ===================================================================================

// ===================================================================================
// Problem 3:  oilPrice
// ফাংশন নেম দিতে হবে oilPrice। 
// এই ফাংশন তিনটা প্যারামিটার নিবে। 
// ●	প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// ●	প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// ●	প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল, পেট্রোল, অকটেনের অর্ডার দেয়, 
// তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
// ----------------------------------------------------------------------------------
function oilPrice(diselQun, petrolQun, octenQun) {
    const diselUnitPrice = 114;
    const petrolUnitPrice = 130;
    const octenUnitPrice = 135;
    const diselTotalPrice = diselUnitPrice * diselQun;
    const petrolTotalPrice = petrolUnitPrice * petrolQun;
    const octenTotalPrice = octenUnitPrice * octenQun;
    
    const sumTotalPrice = diselTotalPrice + petrolTotalPrice + octenTotalPrice;
    
    return sumTotalPrice;
}
// ==================================================================================

// ==================================================================================
// Problem 4:  publicBusFare
// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে।
// বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে।
// ধরো আমাদের বাস ও মাইক্রো আছে।
// ●	প্রতিটি বাসের ক্যাপাসিটি ৫০ জন 
// ●	প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন 
// ●	পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।
// ●	মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।
// এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare
// যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে) নিবে।
// মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে।

// --------
// উদাহরণ১ঃ
// --------
// যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি।
// বাকি মানুষ পাবলিক বাসে যাবে।
// এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// --------
// উদাহরণ২ঃ
// --------
// যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি
// বাকি মানুষ পাবলিক বাসে যাবে।
// এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
// Sample Data
// ----------------------------------------------------------------------------------
function publicBusFare(numberOfPerson) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const localBusTicketPrice = 250;
    const numOutOfBus = numberOfPerson % busCapacity;
    if (numOutOfBus >= microBusCapacity) {
        const restOfLocalBusPerson = numOutOfBus % microBusCapacity;
        return (restOfLocalBusPerson * localBusTicketPrice);
    } {
        return (numOutOfBus * localBusTicketPrice);
    }
}
// ==================================================================================

// ==================================================================================
// Problem 5:  isBestFriend
// তোমাকে একটি ফাংশন ( isBestFriend ) লিখতে হবে
// যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে।
// তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা।
// যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে, না হলে false রিটার্ন করবে।
// ----------------------------------------------------------------------------------
function isBestFriend(obj1, obj2) {
    if (obj1.name == obj2.friend && obj1.friend == obj2.name) {
      return true;
    }
    return false;
}
// ==================================================================================