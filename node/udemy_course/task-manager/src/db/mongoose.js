const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// const me = new User({
//     name: '   Roman  ',
//     email: 'myEmail@gmail.com ',
//     password: 'myverystrongpwd',
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });



// const myTask = new Task({
//     // description: 'Buy tickets',
//     // completed: false,
// });

// myTask.save().then((myTask) => {
//     console.log(myTask);
// }).catch((err) => {
//     console.log(err);
// });
