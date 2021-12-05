const countProps = function (obj) {
    // твой код
    let total = 0;
    const object = Object.keys(obj);
    for (const a of object) {
        if (obj[a]) {
            total += 1;
        }
    }

    return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
