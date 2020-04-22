const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([13, 4, 90]);
        reject('This is my error!');
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success', result);
}).catch((err) => {
    console.log('Error', err);
})
