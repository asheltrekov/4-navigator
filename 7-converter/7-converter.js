function convert(sum, currency1, currency2) {
    if (currency1 === 'RUB' && currency2 === 'USD') {
        let res = sum / 76.75;
        return +res.toFixed(2);
    } else if (currency1 === 'RUB' && currency2 === "EUR")  {
            let res = sum / 90.28;
            return +res.toFixed(2);
        } else if (currency1 === 'RUB' && currency2 === "GBP") {
            let res = sum / 103.26;
            return +res.toFixed(2); 
        } else {
            return null;
        }
}
console.log(convert(50000, "RUB", "USD"));