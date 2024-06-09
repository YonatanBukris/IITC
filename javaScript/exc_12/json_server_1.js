const fs = require('fs');

const generateUsers = (numUsers) => {
    const users = [];
    for (let i = 1; i <= numUsers; i++) {
        users.push({
            id: i,
            firstName: `FirstName${i}`,
            lastName: `LastName${i}`,
        });
    }
    return users;
};

const generateBooks = (numBooks) => {
    const books = [];
    for (let i = 1; i <= numBooks; i++) {
        books.push({
            id: i,
            name: `BookName${i}`,
            author: `Author${i}`,
            numPages: Math.floor(Math.random() * 1000) + 100,
        });
    }
    return books;
};

const users = generateUsers(500);
const books = generateBooks(500);

const data = {
    users,
    books,
};

fs.writeFileSync('sjon_server_1.json', JSON.stringify(data, null, 2));