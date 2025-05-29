function redPackets(total, num) {
    const res = [];
    let restAmount = total;
    let restNum = num;
    for (let i = 0; i < num - 1; i++) {
        // 每个红包的最小金额为 0.01
        let max = (restAmount / restNum) * 2;
        let amount = Math.random() * max;
        amount = Math.floor(amount * 100) / 100; // 保留两位小数
        if (amount < 0.01) amount = 0.01;
        restAmount -= amount;
        restAmount = Math.floor(restAmount * 100) / 100;
        restNum--;
        res.push(amount);
    }
    // 最后一个红包为剩余金额，保留两位小数
    res.push(Math.floor(restAmount * 100) / 100);
    return res;
}

for (let i = 0; i < 10; i++) {
    console.log([...redPackets(100, 10)]);
}