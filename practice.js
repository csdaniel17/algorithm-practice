// find the sum of all the multiples of 3 or 5 below 1000.
function sum3and5Multiples() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sum3and5Multiples());


// function that returns an array with all the numbers from 1 to 255
function getArray() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(getArray());


// function that would get the sum of all the even numbers from 1 to 1000
function sumEven() {
  var sum = 0;
  for (var i = 2; i <= 1000; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumEven());


// function that returns the sum of all odd numbers from 1 to 5000
function sumOdd() {
  var sum = 0;
  for (var i = 1; i <= 5000; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumOdd());


// function that takes an array as an argument and iterates through each member of the array and returns the sum of all the values
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));
console.log(sumArray([4, 5, 6]));


// function that returns the maximum number in the array
function findMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([5, 3, -15, 200, 4, -1]));


// function that returns the average of the values in the array
function findAvg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
}
console.log(findAvg([2, 4, 6]));


// function that returns an array of all the odd numbers between 1 to 50
function oddNums() {
  var oddArr = [];
  for (var i = 1; i <= 50; i += 2) {
    oddArr.push(i);
  }
  return oddArr;
}
console.log(oddNums());


// create an algorithm that squares each value in the array
/* version 1 - replaces itself */
function squareArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
console.log(squareArray([2, 4, 6]));
/* version 2 - pushes to new array */
function squareArray2(arr) {
  var squareNums = [];
  for (var i = 0; i < arr.length; i++) {
    squareNums.push(arr[i] * arr[i]);
  }
  return squareNums;
}
console.log(squareArray2([2, 4, 6]));


// create an algorithm that replaces any negative number with the value of 0
/* version 1 - replaces itself */
function noNeg(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i];
    }
  }
  return arr;
}
console.log(noNeg([1, 2, -3, 4, -5]));
/* version 2 - pushes to new array */
function noNeg2(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(noNeg2([1, 2, -3, 4, -5]));
/* version 3 - map */
function noNeg3(arr) {
  var newArr = arr.map(function(n) {
    if (n < 0) {
      return 0;
    } else {
      return n;
    }
  });
  return newArr;
}
console.log(noNeg3([1, 2, -3, 4, -5]));


// create an algorithm that returns an array with the [max, min, avg] values
function maxMinAvg(arr) {
  var maxMinAvgArr = [];
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  maxMinAvgArr.push(max);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  maxMinAvgArr.push(min);
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  maxMinAvgArr.push(avg);
  return maxMinAvgArr;
}
console.log(maxMinAvg([1, 2, 3]));


// function that takes an array as an argument and return an array with the first and last values swapped
function swap(arr) {
  var newArr = [];
  var first = arr[0];
  var last = arr[arr.length - 1];
  newArr.push(last);
  for (var i = 1; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(first);
  return newArr;
}
console.log(swap([4, 2, 3]));


// function that takes an array of numbers and replaces any number that's negative to a string called 'DigitalCrafts'
function strArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'DigitalCrafts';
    } else {
      arr[i] = arr[i];
    }
  }
  return arr;
}
console.log(strArr([1, -2, 3, -5]));


// find the sum of the even valued Fibonacci sequence numbers
function fibonacciSeq() {
  var a = 1;
  var b = 2;
  var c;
  var sum = 0;
  while (a < 4000000) {
    if (a % 2 === 0) {
      sum += a;
    }
    c = a + b;
    a = b;
    b = c;
  }
  return sum;
}

console.log(fibonacciSeq());


// find largest prime factor
function largestPrimeFactor(num) {
  var i = 2;
  while (i <= num) {
    if (num % i === 0) {
      num /= i;
    } else {
      i++;
    }

  }
  return i;
}
console.log(largestPrimeFactor(600851475143));

// palindrome
function palindrome(str) {
  var strToCheck = str.replace(/[^\w\s]/gi, '').toLowerCase();
  var checkPalindrome = strToCheck.split('').reverse().join('');
  if (checkPalindrome === strToCheck) {
    console.log(str + ' is a palindrome');
  } else {
    console.log(str + ' is NOT a palindrome');
  }
}
palindrome('Dad!');

// palindrome - recursive
function palindrome2(str) {
  var strToCheck = str.replace(/[^\w\s]/gi, '').toLowerCase();
  if (strToCheck.length <= 1) {
    return true;
  } else if (strToCheck.charAt(0) !== strToCheck.charAt(strToCheck.length - 1)) {
    return false;
  }
  return palindrome2(strToCheck.substr(1, strToCheck - 2));
}
console.log(palindrome2('hello')); //returns false
console.log(palindrome2('anna')); //returns true
console.log(palindrome2('Anna!')); //returns true
