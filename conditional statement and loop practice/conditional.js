// 1. Write a JavaScript program that accept two integers and display the larger.

function largerNumber(num1, num2) {
  return Math.max(num1, num2);
}

// console.log(largerNumber(54, -110));

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function productSign(num1, num2, num3) {
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    return "The sign is +";
  }
  if (num1 < 0 && num2 < 0 && num3 < 0) {
    return "The sign is -";
  } else if (num1 > 0 && num2 < 0 && num3 < 0) {
    return "The sign is +";
  } else if (num1 < 0 && num2 > 0 && num3 < 0) {
    return "The sign is +";
  } else if (num1 < 0 && num2 < 0 && num3 > 0) {
    return "The sign is +";
  } else {
    return "The sign is -";
  }
}

// console.log(productSign(25, 28, -1));

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

function largestNumber(num1, num2, num3, num4, num5) {
  return Math.max(num1, num2, num3, num4, num5);
}

// console.log(largestNumber(-5, -2, -6, 0, -1));

// Alternative Solution

function largestNumber(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  } else if (num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  } else if (num3 > num4 && num3 > num5 && num3 > num1) {
    return num3;
  } else if (num4 > num5 && num4 > num1 && num4 > num2 && num4 > num3) {
    return num4;
  } else {
    return num5;
  }
}

// console.log(largestNumber(-5, -2, -6, 0, -1));

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

function evenOdd(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      // console.log(i + " is even");
    } else {
      // console.log(i + " is odd");
    }
  }
}

evenOdd(15);

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// let classGettingMark = {
//   David : 80,
//   Vinoth : 77,
//   Divya : 88,
//   Ishitha : 95,
//   Thomas : 68
// }

// let markAverage = 0;
// let size = 0;
// let avrGrade = 0;

// for (let key in classGettingMark) {
//   markAverage += classGettingMark[key];
//   size++;
// }

// avrGrade = markAverage / size;

// console.log('Average grade: ' + avrGrade)

var David = 80,
  Vinoth = 77,
  Divya = 88,
  Ishitha = 95,
  Thomas = 68;

var avrGrade = Math.abs(David + Vinoth + Divya + Ishitha + Thomas) / 5;

// console.log('Average grade:'+ avrGrade);

//  if (avrGrade <60) {console.log('Grade : F');}
//  else if (avrGrade > 70) {console.log('Grade : D');}
//  else if (avrGrade > 80) {console.log('Grade : C');}
//  else if (avrGrade > 90) {console.log('Grade : B');}
//  else if (avrGrade > 100) {console.log('Grade : A');}

//  7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function printFizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      // console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      // console.log("Fizz");
    } else if (i % 5 == 0) {
      // console.log("Buzz");
    } else {
      // console.log(i);
    }
  }
}

printFizzBuzz(100);

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits.

function findArmstrongNumber() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        const power = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
        const sum = (i * 100 + j * 10 + k);
        if (sum == power) {
          console.log(sum);
        }
      }
    }
  }
}

findArmstrongNumber();

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.


let star = '';
  for (var j = 0; j<i; j++) {
    star += '*';
    console.log(star);
  }
