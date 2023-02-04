// ৪. একটা ফাংশন লিখবে।
// এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
// সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে।
// এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
// এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

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
const inputFndArray = ["Nagib Mahfuz", "Adib Mahmud", "Farhana Yeasmin", "Mazibur Rahman", "Shamsun Nahar"];
const result = bestFriend(inputFndArray);
console.log(result);
