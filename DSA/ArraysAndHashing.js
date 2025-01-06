// Blind 75 list from NeetCode 75
// Day 1 - 4/1/2025

// Problems
// Topic: Arrays and Hashings

// 1. Contains Duplicate

// loop all to check
// if yes return true or false

const cd = (arr) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
      return true;
    } else {
      hash[arr[i]] = 1;
    }
  }

  return false;
};

// cd([1,2,3,4,5])
// --------------------------

// 2. Valid Anagram
// 2 inputs / loop all through take one as main
// 2 hash first hash compare with second hash values

const va = (sString, tString) => {
  const sHash = {};
  const tHash = {};

  for (let s = 0; s < sString.length; s++) {
    if (sHash[sString[s]]) {
      sHash[sString[s]] += 1;
    } else {
      sHash[sString[s]] = 1;
    }
  }

  for (let t = 0; t < tString.length; t++) {
    if (tHash[tString[t]]) {
      tHash[tString[t]] += 1;
    } else {
      tHash[tString[t]] = 1;
    }
  }

  for (let key in sHash) {
    if (sHash[key] !== tHash[key]) {
      return false;
    }
  }

  return true;
};

// va('racecar', 'carrace')

// 3.Two Sum
// input 1 Array
// loop through all elements and push to hash
// one has

const twoSum = (arr, t) => {
  const hash = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let re = Math.abs(arr[i] - t);
    hash[i] = re;
  }

  for (let key in hash) {
    if (arr.includes(hash[key])) {
      result.push(arr.indexOf(hash[key]));
    }
  }

  console.log(result);
};

twoSum([4, 5, 6], 10);
