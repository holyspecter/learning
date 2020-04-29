require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ea087e63a9afebf02cd3c69').then((res) => {
//     console.log(res);
//     return Task.countDocuments({completed: false});
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// });


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});

    return count;
}

deleteTaskAndCount('5e9dad147cb20a921d799e64').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});
