/**Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

function doubleArray(arr) {
    let doubleArr = arr.map(num => num * 2);
    console.log(doubleArr);
}
doubleArray([17, 36, 46, 523]);  // 34, 72, 92, 1046
