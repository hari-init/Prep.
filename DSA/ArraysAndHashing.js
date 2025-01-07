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
//FAILED
// input 1 Array
// loop through all elements and push to hash
// one has

// const twoSum = (arr, t) => {
//     const hash = {}
//     const result = []

//     for (let i = 0; i < arr.length; i++) {
//             let re = Math.abs(arr[i] - t)
//             hash[i] = re;
//     }

//     for (let key in hash) {
//         if(arr.includes(hash[key])) {
//             result.push(arr.indexOf(hash[key]))
//         }
//     }

//     console.log(result)
// }

// twoSum([4,5,6], 10)

// Day 2
// 3. Two sum
// 2 inputs , array and target value
// hasing use the formula and store in the hash if it has in the hash
// that index is the pair
// for loop and if

const twoSum = (arr, t) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[t - arr[i]] > -1) {
      return [hash[t - arr[i]], i];
    } else {
      hash[arr[i]] = i;
    }
  }
};

// twoSum([3,4,5,6], 10)

// 4.Group anagram

// const ga = (stringArr) => {
//     const hash = {};

//     for(let string of stringArr) {
//         const count = Array(26).fill(0)
//         for(let char of string) {
//             count[char.charCodeAt() - 'a'.charCodeAt()]++
//         }

//         if(!hash[count]) {
//             hash[count] = []
//         }

//         hash[count].push(string)
//         console.log(hash)
//     }
// }

// ga(["act","pots","tops","cat","stop","hat"])

// 5.k th frequency

// const kFreq = (arr, k) => {
//     const hash = {}
//     const result = []

//     for(let i = 0; i < arr.length; i++) {
//         if(!hash[arr[i]]) {
//             hash[arr[i]] = 1;
//         } else {
//             hash[arr[i]]++
//         }
//     }

//     for(let el in hash) {
//       if(hash[el] >= k) {
//           result.push(parseInt(el))
//       }
//     }

//     return result
// }

// kFreq([1,2,2,4,4,4], 2)

// const kFreq = (nums, k) => {
//     const hash = {};
//     const result = [];

//     const freqMap = Array.from({length: nums.length + 1}, () => [])

//     for (let i = 0; i < nums.length; i++) {
//         hash[nums[i]] = (hash[nums[i]] || 0) + 1
//     }

//     for (let j in hash) {
//         freqMap[hash[j]].push(parseInt(j))
//     }

//     for (let h = freqMap.length - 1; h > 0 ; h--) {
//         for (let freq of freqMap[h]) {
//             result.push(freq)

//             if(result.length === k) {
//                 return result
//             }
//         }
//     }

//     console.log(freqMap)
// }

// kFreq([1,2,2,4,4,4], 3)

//encode decode

// const encode = (arr) => {
//     let encodedString = ''

//     for (let i = 0; i < arr.length; i++) {
//         encodedString += `${arr[i].length}#${arr[i]}`
//     }

//     return encodedString
// }

// const decode = (string) => {
//     const result = [];
//     let i = 0;
//     while(i < string.length) {
//     let hashIndex = string.indexOf('#', i)
//     hashIndex ++
//     const length = parseInt(string.substring(i , hashIndex))
//     const word = string.substring(hashIndex, length + hashIndex)
//     result.push(word)
//     i = length + hashIndex
//     }
//     return result
// }

// decode(encode(["neet","code","love","you"]))

// products of Array except self

// const pa = (arr) => {
//     const result = [];
//     let multiplies = 1;
//     // loop all and then take one and check if index and skip it
//     // this gives n^2 complex and not good for negative index

//     for(let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(i !== j) {
//                 multiplies *= arr[j]
//             }
//         }
//         result.push(multiplies)
//         multiplies = 1
//     }

//     return result
// }

// pa([-1,0,1,2,3])

// const pa = (arr) => {
//     //o(n)
//     //prefix and suffix

//     const result = Array.from({length: arr.length}, () => 1)

//     let prefix = 1;
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = prefix;
//         prefix *= arr[i]
//     }

//     let suffix = 1;
//     for (let j = arr.length - 1; j >= 0; j--) {
//         result[j] *= suffix;
//         suffix *= arr[j]
//     }

//     return result

// }

// pa([1,2,4,6])

const lc = (arr) => {
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i] + 1;
    if (arr.includes(count)) {
      // makes O(n^2)
      len++;
    }
  }

  return len;
};
lc([2, 20, 4, 10, 3, 4, 5]);
