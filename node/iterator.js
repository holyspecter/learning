const data = {
    items: [
        {
            user: "John",
            comment: "Hi!",
        },
        {
            user: "Bob",
            comment: "Meh!",
        },
        {
            user: "Luke",
            comment: "Muhaha!",
        }
    ],
    [Symbol.iterator]() {
        let nextIndex = 0;
        const preparedItems = this.items.map(val => `${val.user} said: "${val.comment}"`)

        return {
            next() {
                return nextIndex < preparedItems.length
                    ? {value: preparedItems[nextIndex++], done: false}
                    : {done: true};
            }
        }
    }
}

for (let item of data) {
    console.log(item);
}