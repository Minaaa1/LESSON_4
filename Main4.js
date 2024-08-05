

// ---------- КОНСПЕКТ ЗАНЯТИЯ 4 -------------


// let year = prompt('В каком году вышел Ходячий замок?')

// ТРИ ВАРИАНТА :
// if   -   if, else   -   if, else if, else


// ? : - < TEРНАРНЫЙ ОПЕРАТОР >

//         EXAMPLE 1:
// let week = day == 7 ? true : false
// console.log(week);

// [ FORMULA ] :
// [let результат = условие ? первый вариант : второй вариант]


//         EXAMPLE 2 :
// 1 VARIANT :
// if(10 > 2){
// console.log(1);
// }
// else{
// console.log(2);
// }
// 2 VARIANT :
// let result = 10>2 ? console.log(1) : console.log(2);


// ------- МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ --------

//       ---- Обычные :    +, -, /, * 
// console.log( 2 {оператор} 5 );



//       ----  ** возведение в степень
// EXAMPLE :
// console.log(5 ** 2); // 5^2



//       ---- %    остаток от деления
// EXAMPLE :
// console.log(9 % 4); // ближайшая цифра к 9 получается когда мы умножаем 4 на 2 = 8
                    // 9 - 8 = 1 = остаток (дискретная математика)



//       ---- <, >, =  операторы сравнения 

// 1) console.log(7 > 8); // выведет false

// 2) console.log(102321 <= 50000000000); [true] - двойное сравнение ! 
// console.log(888 <= 888); [true]

// результат: true, так как одно из двух сравнений верно (102321 меньше)

// 3) console.log(5 == '5'); - TRUE, хоть типы данных разные



//       ---- !=  оператор не равно 
// console.log(6 != 6); // output - FALSE 6=6



//       ---- ==     не строгое равно
//       ---- ===    строгое равно (проверяет даже по типу данных)  



//       ---- ||   оператор ИЛИ
// ПРАВИЛА: 
// True || True = TRUE
// False || True = TRUE
// TRUE || FALSE = TRUE
// FALSE || FALSE = FALSE


// EXAMPLE :
// if(2 > 5 || 5 > 6){
// console.log(2);
// }
//else{
// console.log(1);
// }

// В результате: 2 





//        ---- &&   Оператор И
// ПРАВИЛА: 
// True && True = TRUE
// False && True = False
// TRUE && FALSE = False
// FALSE && FALSE = FALSE


// EXAMPLE :
/*if(2 > 5 && 12> 6){
    console.log(2);
    }
    else{
    console.log(1);
    }
*/
// В результате: 1 



//   # 1 Написать программу, которая будет выводить в консоль сообщение ДА, если сумма переменной а + б будет больше 15,
// и выводить сообщение НЕТ, если сумма этих чисел будет меньше или равно 15

let a = prompt( 'first number ... ');
let b = prompt( 'second number ... ');
let result = a + b > 15 ? console.log('YES') : console.log('NO');


//   #2 Написать программу, которая должна выполнить проверку значений 2 переменных и, 
// если они равны, то выводить сообщение в консоль о том, что они равны или получать результат true, в противном случае false, 
// при этом в обе переменные можно вписать разные типы данных, это нужно учесть и задействовать оператор строгого равенства при сравнении

alert("NEXT TASK");


let h = prompt( 'h = ... ');
let i = prompt( 'i = ... ');
let result_2 = (h === i) ? console.log(true) : console.log(false);