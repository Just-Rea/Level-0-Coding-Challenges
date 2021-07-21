function getCount(str1, str2){
    let commonLetters = [];
    let count = 0;
    const object = str2.split("");
    for (const str of str1){
        let idx = object.findIndex(x => x === str);
        if (idx >= 0){
        commonLetters.push(object.find(x => x === str));
            count++;
            object.splice(idx, 1);
    }
    } 
    return commonLetters;
}
console.log(getCount("reamogetse", "introvert"));
