// Циклы

// 1

for (let a = 1; a <= 20; a++) {
    console.log(a);
}

// 2

for (let b = 20; b >= 1; b--) {
    console.log(b);
}

// 3

for (let c = 1; c <= 50; c++) {
    if (c % 2 === 0) {
        console.log(c);
    }
}

// 4

let sum = 0;

for (let d = 1; d <= 100; d++) {
    sum += d;
}

console.log(sum);

// 5

for (let e = 1; e <= 10; e++) {
    console.log(e * e);
}

// 6

for (let f = 1; f <= 11; f++) {
    console.log(f * 5);
}

// 7

let sum1 = 0;

for (let g = 1; g <= 50; g++) {
    if (g % 2 === 0) {
        sum1 += g;
    }
}

console.log(sum1);

// 8

for (let h = 0; h <= 100; h += 5) {
    console.log(h);
}

// 9

let sum2 = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0) {
        sum2++;
    }
} 

console.log(sum2);

// Обьекты

// 1

const user = {
    name: "Alex",
    age: 21,
    city: "Tokyo"
};

console.log("Имя:", user.name);
console.log("Возраст:", user.age);
console.log("Город:", user.city);

// 2

user.age = 30;

console.log("Возраст;", user.age);

// 3

user.phone = "000000000";

console.log("Телефон:", user.phone);

// 4 

delete user.city;

// 5 

console.log("email" in user);

// 6

for (let key in user) {
    console.log(key);
}

// 7

console.log(Object.values(user));