// -----------------------------------------
// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
// -----------------------------------------
function sumFrom1ToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
// const inputN = 100;
// const result = sumFrom1ToN(inputN);
// console.log(result);




// -----------------------------------------
// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
// -----------------------------------------
for (let i = 1; i <= 10; i++) {
    // console.log(3, "*", i, "=", i*3);
}

// -----------------------------------------------------------------------
// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে।
// তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে
// তাদের কাউন্ট নির্ণয় করবে।
// ইনপুটঃ [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]
// আউটপুটঃ 3
// -----------------------------------------------------------------------
function countNumberMorethanFive(numArr) {
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        let element = numArr[i];
        if (element > 5) {
            count++;
        }
    }
    return count
}
const inputArr = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const outputArr = countNumberMorethanFive(inputArr);
// console.log(outputArr);





// -------------------------------------------------------------------------
// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। 
// তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 
// -------------------------------------------------------------------------

function nameReverse(fnd1, fnd2) {
    const fnd1Len = fnd1.length;
    const fnd2len = fnd2.length;
    if (fnd1Len > fnd2len) {
        return fnd1.split("").reverse().join("");
    } else {
        return fnd2.split("").reverse().join("");
    }   
}
// const fndName1 = "Nagib Mahfuz Fuad";
// const fndName2 = "Farhana Yeasmin Asha";
// const result = nameReverse(fndName1, fndName2);
// console.log(result);

function nameReverse(fnd1, fnd2) {
    let reverseName = "";
    if (fnd1.length > fnd2.length) {
      for (let i = fnd1.length-1; i >= 0; i--) {
        const element = fnd1[i];
        reverseName = reverseName + element;
      }
    } else {
      for (let i = fnd2.length-1; i >= 0; i--) {
        const element = fnd2[i];
        reverseName = reverseName + element;
      }
    }
    return reverseName;
}
// const fndName1 = "Nagib Mahfuz Fuad";
// const fndName2 = "Farhana Yeasmin Asha";
// const result = nameReverse(fndName1, fndName2);
// console.log(result);