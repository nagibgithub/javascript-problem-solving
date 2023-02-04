// ১. সিম্পল একটা ফাংশন লিখতে হবে। 
// যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । 
// অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const inputFeet = 5;
const result = feetToInch(inputFeet);
console.log(inputFeet, "Feet =", result, "Inch");