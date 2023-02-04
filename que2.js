// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(centimeter) {
    const meter = centimeter * .01;
    return meter;
}
const inputCentimeter = 12;
const result = centimeterToMeter(inputCentimeter);
console.log(inputCentimeter, "Centimeter =", result, "Meter");