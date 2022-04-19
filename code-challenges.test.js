// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe('not.arrayContaining', () => {
//     const expected = ["purple"];
//     it('matches if the array does not contain the expected element', ()=> {
//         expect (["yellow", "blue", "pink", "green"]).toEqual(
//             expect.not.arrayContaining(expected),
//         )
//     })
// })

// describe('not.arrayContaining', () => {
//     const expected = ["chartreuse"];
//     it('matches if the array does not contain the expected element', ()=> {
//         expect (["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(
//             expect.not.arrayContaining(expected),
//         )
//     })
// })


// PASS  ./code-challenges.test.js
// not.arrayContaining
//   ✓ matches if the array does not contain the expected element (1 ms)
//   ✓ matches if the array does not contain the expected element


// b) Create the function that makes the test pass.

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"

const colors3 = colors2.shift
function shuffle(colors3) {
colors3.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);

//create a function called colors3 which will be the array minus the first element
//to remove first element, I will use the .shift method.
//once the first element is removed, I will create a shuffle function
//using .sort and math.random, i will be able to shuffle the array

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe('arrayContaining', () => {
  const expected = [-8, 90];
  it('matches if it returns an array of the minimum and maximum numbers in that order', () => {
    expect([-8, 90]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect([56, 23]).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('arrayContaining', () => {
  const expected = [5, 109];
  it('matches if it returns an array of the minimum and maximum numbers in that order', () => {
    expect([5, 109]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect([56, 23]).not.toEqual(expect.arrayContaining(expected));
  });
});

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass. Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//create a fnction called minmax
//using math.max and math.min I will pull the minumum and maximum elements from the array

const min = Math.min(...nums1)
const max = Math.max(...nums1)
const minMaxrray = [min, max]

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('arrayContaining', () => {
  const expected = [3, 7, 10, 5, 4, 8, 2, 1];
  it('matches if it akes in two arrays as arguments and returns one array with no duplicate values', () => {
    expect([3, 7, 10, 5, 4, 8, 2, 1]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if array contains duplicate values', () => {
    expect([3, 7, 10, 5, 4, 3, 3, 7, 8, 2, 3, 1, 5, 4]).not.toEqual(expect.arrayContaining(expected));
  });
});

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
//use destructuring to create a new Set - will utilize spread operator
const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
const testArray3 = testArray1.concat(testArray2)
testArray3 = [new Set([...testArray1,...testArray2])]
