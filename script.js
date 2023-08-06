//1.Print odd numbers in an array
// anonymous : 
// let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//         console.log(array[i])
//     }
// }
// //IIFE :
// (function (array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0) {
//             console.log(array[i])
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// //Arrow function
// let oddNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// oddNumbers = (array) => {
//     for(var i = 0 ; i< array.length ; i++){
//          if(array[i]%2!=0){
//             console.log(array[i])
//          } 
//     }
//          }

//2.Convert all the strings to title caps in a string array
// let str = ('guvi geek network private limited')
// let res = str.toUpperCase()
// console.log(res)

// let titleCase = (str) => {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   }  


//3.Sum of all numbers in an array
//Anonymous  :
// function number (array){
//     var sum = 0;
//     for(var i = 0 ; i< array.length ; i++){
//        sum = sum + array[i];
//      }
//      console.log(sum)
//   }
//IIFE :
// (function(array){
//     var sum = 0;
//          for(var i = 0 ; i< array.length ; i++){
//             sum = sum + array[i];
//           }
//           console.log(sum)
//     })([1,2,3,4,5])

// //4.Return all the prime numbers in an array
// let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
//     numArray = numArray.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
//     console.log(numArray);

// //IIFE :
// (  
//     function(numArray){
//        numArray = numArray.filter((number) => {
//          for (var i = 2; i <= Math.sqrt(number); i++) {
//            if (number % i === 0) return false;
//          }
//          return true;
//        });
//        console.log(numArray);
//    })([1,2,3,4])


// (  function (arr, n)
// {
//     // Traversing each element of the array
//     // and check if it is palindrome or not
//     for (let i = 0; i < n; i++)
//     {
//         let ans = isPalindrome(arr[i]);
//         if (ans == false)
//             return false;
//     }
//     return true;
// })([1,2,3] , 3)

function reverse(array , li , ri){
    while(li < ri){
         let temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }
//Annonymou :
   function time (array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
//IIFE :
(function a (array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)