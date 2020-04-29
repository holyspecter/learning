const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject(new Error('test'));
            }
            
            resolve(a + b);
        }, 2000);
    })
};

const doWork = async () => {
    const sum = await add(9, 10);
    const sum2 = await add(sum, 38);
    const sum3 = await add(sum2, 3);

    return sum3;
}

doWork().then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
});
