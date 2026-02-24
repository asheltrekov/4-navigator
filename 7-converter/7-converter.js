function convert(sum, currency1, currency2) {
    if (currency1 === 'руб' && currency2 === '$') {
        let res = sum / 76,75;
        return res;
    } else if (currency1 === 'руб' && currency2 === "eur")  {
            let res = sum / 90,28;
            return res;
        } else {
        return null;
        }
}
console.log(convert(50000, "руб", "$"));