const str1 = 'Reamogetse';
const str2 = 'Exceptional';

function commonLetters(str1, str2){
    common = []
    for(let letter1 in str1){
     for(let letter2 in str2){
      if(letter2 === letter1){
       common.push(letter2);
      }
     }
    }
    return common;
   }

   commonLetters();