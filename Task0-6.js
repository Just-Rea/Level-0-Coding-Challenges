function maxNo(no1, no2, no3){
    let max = 0;
    if (no1 > no2){
        if(no1 > no3){
            max = no1;
        }
        else{
            max = no3;
        }
    }
    else{
        if(no2 > no3){
            max = no2;
        } else {
            max = no3;
        }
    }
    return max;
}
maxNo(3);