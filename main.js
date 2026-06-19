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

for (let f = 1; f <= 10; f++) {
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

for (let i = 1; i <= 100; i++) {
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

for (let key in user) {
    console.log(user[key]);
}

// 8

console.log(Object.keys(user).length);


// Массивы

// 1

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 2

let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum3 += numbers[i];
}

console.log(sum3);


// 3

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);


// 4

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);


// 5

console.log(numbers.length);


// 6

let evenSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}

console.log(evenSum);


// 7

let negativeCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount++;
    }
}

console.log(negativeCount);


// 8

let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product);


// 9

let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}

console.log(maxIndex);


// 10

let minIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}

console.log(minIndex);


// 11

let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found = true;
    }
}

console.log(found);


// 12

let sevenCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        sevenCount++;
    }
}

console.log(sevenCount);


// 13

let lastPositive;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}

console.log(lastPositive);


// 14

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

let average = total / numbers.length;

console.log(average);