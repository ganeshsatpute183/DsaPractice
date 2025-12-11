function maxProfit(a) {
    let minBuy = Infinity;
    let maxPro = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (minBuy > a[i]) {
            minBuy = a[i];
           // console.log(minBuy);
        }
        if (maxPro < (a[i] - minBuy)) {
            maxPro = (a[i] - minBuy);
           // console.log(maxPro);
        }
    }
    return maxPro < 0 ? 0 : maxPro
    
}

let arr = [1,3,7,2,8,10]
let res = maxProfit(arr);
 console.log(res);