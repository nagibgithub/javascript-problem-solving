// ৫. এইটা একটু ট্রিকি হতে পারে। 
// একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
// তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। 
// এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
// অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। 
// আর যদি নেগেটিভ সংখ্যা হয়। 
// তাহলে লুপটা স্টপ করে দিবে। 
// এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে সেগুলা রিটার্ন করে দিবে। 


let positiveNumArr = [];
function positiveNumbers(numArray) {
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
const inputnumArray = [20,44,16,18,12,4,22,30,8,33,19,42,-39,7,16,32,30,38,4,20,36,19];
const result = positiveNumbers(inputnumArray);
console.log("Only Positive Numbers =", result);