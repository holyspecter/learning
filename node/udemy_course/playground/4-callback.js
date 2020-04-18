function add(arg1, arg2, callback) {
    setTimeout(() => {
        callback(arg1 + arg2);
    }, 2000);
}

add(1, 4, sum => {
    console.log(sum);
});
