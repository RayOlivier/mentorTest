//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt(str) {
    let arr = str.split("");
    let result = [];

    arr.forEach((e) => {
      result.unshift(e);
    });

    return result.join("");
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups(arr) {
    let result = [];
    arr.forEach((e) => {
      if (!result.includes(e)) {
        result.push(e);
      }
    });

    return result;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt(str) {
    let arr = str.split(" ");
    let result = [];

    arr.forEach((e) => {
      result.push(e.charAt(0).toUpperCase() + e.slice(1));
    });

    return result.join(" ");
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter(str) {
    let arr = str.split("");
    let count = 0;
    arr.forEach((e, i, arr) => {
      if (
        e === "a" ||
        e === "A" ||
        e === "e" ||
        e === "E" ||
        e === "i" ||
        e === "I" ||
        e === "o" ||
        e === "O" ||
        e === "u" ||
        e === "U"
      ) {
        count += 1;
      }
    });

    //note: I could have looked into regex for this, but that I'm not very familiar with it and it felt ingenuine to do so

    return count;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime(num) {
    if (num < 0) {
      return false; //negative numbers can't be prime (i had to google prime numbers, not gonna lie)
    } else if (num === 1) {
      return false;
    } else if (num === 2) {
      return true; //2 is a prime number but won't work with the for loop below (it wouldn't even run because 2!<2)
    } else {
      for (let i = 2; i < num; i++) {
        //starting i at 2 because all numbers are divisable by 1
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  // what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined //wouldn't this actually throw an error? since bar doesn't exist due to scope
};
