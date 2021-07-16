//Formula: Heron's

function areaOfTriangle(x, y ,z){
    let sides = (x + y + z) / 2;
    let area = Math.sqrt(sides * (sides - x) * (sides - y) * (sides - z));
    console.log(area);
}

areaOfTriangle(6, 8, 12);