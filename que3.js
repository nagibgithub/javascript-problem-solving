// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। 
// যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। 
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

function paperRequirements(book1, book2, book3) {
    const book1page = 100;
    const book2page = 200;
    const book3page = 300;
    const totalPage = book1 * book1page + book2 * book2page + book3 * book3page;
    return totalPage;
}

const inputBook1Quantity = 2;
const inputBook2Quantity = 3;
const inputBook3Quantity = 4;
const result = paperRequirements(inputBook1Quantity, inputBook2Quantity, inputBook3Quantity);
console.log("Total Page required:", result, "Pages");