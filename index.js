//  1st problem:

// I'm writing this function by using some mathematical operations to get a final output. As well as I follow the given instructions by the instructor.

function mindGame(inputNumber) {
  let numMultiplication = inputNumber * 3;
  let numAddition = numMultiplication + 10;
  let numDivision = numAddition / 2;
  let numSubtraction = numDivision - 5;
  let finalResult = numSubtraction;
  return finalResult;
}
let finalOutcome = mindGame(9);
console.log(finalOutcome);

// 2nd Problem:

// the main focus of writing the function is to define the character numbers of a particular string is either even or odd. I follow the instructions of the instructor.

function evenOdd(stringValue) {
  stringChar = stringValue.length;
  let remainder = stringChar % 2;
  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}
let isEven = evenOdd("tahnuma");
console.log(isEven);

// 3rd Problem:

// the main purpose of writing the function is to show less than or greater than of a input number using mathematical operations. By following the instructions.

function isLGSeven(input) {
  let differValue = input - 7;
  if (differValue < 7) {
    return differValue;
  } else {
    return input * 2;
  }
}
let result = isLGSeven(15);
console.log(result);

// 4th Problem:

// I wrote this function for finding bad data from an array.

function findingBadData(array) {
  let badData = [];
  for (i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < -1) {
      badData.push(element);
    }
  }
  return badData.length;
}
let goodAndBadData = [-12, 9, -17, -6, -10, 23, -54, 67];
let outputResult = findingBadData(goodAndBadData);
console.log(outputResult);

// 5th Problem:

// purpose of the function is that to show if there are three friends have some gems and to convert their gems into diamond what will be the case.

function gemsToDiamond(gem1, gem2, gem3) {
  let powerOfGem1 = gem1 * 21;
  let powerOfGem2 = gem2 * 32;
  let powerOfGem3 = gem3 * 43;
  let totalDiamond = powerOfGem1 + powerOfGem2 + powerOfGem3;
  let difference = totalDiamond - 2000;
  if (totalDiamond >= 1000 * 2) {
    return difference;
  } else {
    return totalDiamond;
  }
}
let finalResult = gemsToDiamond(20, 200, 50);
console.log(finalResult);
