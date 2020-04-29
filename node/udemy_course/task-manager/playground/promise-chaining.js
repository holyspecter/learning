require('../src/db/mongoose');
const User = require('../src/models/user');

// 5e9dbea1628c4494e20144e8
// User.findByIdAndUpdate('5e9dbea1628c4494e20144e8', {age: 19}).then((user) => {
//     console.log('Meh', user);
//     return User.countDocuments({ age: 19});
// }).then((result) => {
//     console.log('Nah', result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: 28});
    const count = await User.countDocuments({age});

    return count;
};

updateAgeAndCount('5e9dbea1628c4494e20144e8', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e)
});
