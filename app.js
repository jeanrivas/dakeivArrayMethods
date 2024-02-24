//ARRAY METHODS

//FIND
const arrayNumbers = [7, 2, 3, 5];

// const findNumberOne = arrayNumbers.find((number) => number > 6);

// console.log(findNumberOne);
//NUMERO MAYOR A 6
console.log(arrayNumbers.find((number) => number > 6));

//SOME
// const someNumberEven = (number) => number % 2 === 0;
//EXISTE ALGUN NUMERO PAR
console.log(arrayNumbers.some((number) => number % 2 === 0));

//EVERY

// const everyNumberIsMinorThan10 = (number) => number < 10;
//TODOS LOS NUMEROS SON MENOR A 10
console.log(arrayNumbers.every((number) => number < 10));

//INCLUDES
//INCLUYE UN NUMERO 2
console.log(arrayNumbers.includes(2));

//MAP
//MULTIPLICAR EL ARRAY POR 2
console.log(arrayNumbers.map((number) => number * 2));

//FILTER
//EXCLUIR EL NUMERO 2
console.log(arrayNumbers.filter((number) => number > 2));
