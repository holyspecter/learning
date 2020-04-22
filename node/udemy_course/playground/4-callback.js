// function add(arg1, arg2, callback) {
//     setTimeout(() => {
//         callback(arg1 + arg2);
//     }, 2000);
// }

// add(1, 4, sum => {
//     console.log(sum);
// });

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error');
        callback(undefined, [1, 4, 5])
    }, 2000)
};

doWorkCallback((err, result) => {
    if (err) return console.log(err);

    console.log(result);
});
