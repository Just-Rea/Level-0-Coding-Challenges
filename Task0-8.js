function changeNum(num){
    let minutes = num % 60;
    let hours = (num / 60);
    return '${hours}:${minutes}';
}

changeNum(200);