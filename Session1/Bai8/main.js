let coppy1 = { name: 'truong', age: '23' };
let coppy2 = {};
function coppy(coppy1, coppy2) {
    for (let key in coppy1) {
        coppy2[key] = coppy1[key];
    }
    console.log(coppy2.name);
    console.log(coppy2.age);
}

coppy(coppy1, coppy2);