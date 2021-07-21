function changeNum(num){
    let minutes = num % 60;
    let hours = Math.floor(num / 60);
    return `${hours}:${minutes}`;
}
console.log(changeNum(200));
