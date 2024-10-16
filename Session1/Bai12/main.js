const nums1 = [1, 3];
const nums2 = [2];
function medianNumber(num1, num2) {
    num1.push(...num2);
    num1.sort();
    const middleIndex = num1.length / 2;
    const medianNumberArray = num1.length % 2 === 0? num1.slice(middleIndex - 1, middleIndex + 1) : [num1[Math.floor(middleIndex)]]; 
    console.log(medianNumberArray);
}
medianNumber(nums1, nums2);