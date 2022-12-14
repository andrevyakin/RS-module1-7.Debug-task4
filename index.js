let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    //numbers[i] = numbers[i] ** 3;
    //Ошибка.
    //При таком написании мы изменяем элементы изначального массива
    //Чтобы не изменять изначальный массив возведение в степень нужно сделать так:
    sum += numbers[i] ** 3;
}
console.log(sum); // 1158411

//Для дебага. Прверить, что исходный массив не изменился.
console.log(numbers);

// Через цикл for of
sum = 0;
for (let num of numbers){
    //Здесь можно так писать, потому что for of не изменяет изначальный массив
    num = num ** 3;
    sum += num;
}
console.log(sum); // 1158411
