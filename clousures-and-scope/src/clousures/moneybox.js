function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Money in the box: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const num = parseInt("7*6", 10);
console.log(num);