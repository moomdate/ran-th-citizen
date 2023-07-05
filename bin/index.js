#! /usr/bin/env node
const genCitizenId = () => {
    var id12 = "";
    for (var i = 0; i < 12; i++) {
        id12 += parseInt(Math.random() * 10);
    }
    return id12 + findDigit(id12);
}
const findDigit = (id) => {
    let base = 100000000000;
    let basenow;
    let sum = 0;
    for (var i = 13; i > 1; i--) {
        basenow = Math.floor(id / base);
        id = id - basenow * base;
        sum += basenow * i;
        base = base / 10;
    }
    return  (11 - (sum % 11)) % 10;
}

console.log(genCitizenId());