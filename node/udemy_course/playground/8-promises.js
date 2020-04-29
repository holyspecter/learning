const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('test'));
            resolve(a + b);
        }, 2000);
    })
};

add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 4);
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log('meh');
})
