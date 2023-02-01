
// Z 1

let password = prompt('Введите пароль');

if (password === 'печеньки') {
    alert('Пароль введен верно');

} else {
    alert('Пароль введен неверно');
}

// Z 2  --

let c = Number(prompt('Введите число'));


if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//z2

let c = 20;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 0;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 10;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// z 3
let d = 4;
let e = 105;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

d = 4;
e = 5;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//z4  

let la = 2;
let bl = 3;
alert(la + bl);


//z5
let monthnumber = String(prompt('Введите номер месяца'))

switch (monthnumber) {
    case '1':   case '2':
        console.log('зима')
        break;
 
       
    case '3': case '4': case '5':
        console.log('весна')
        break;
    case '6':
        console.log('лето')
        break;
    case '7':
        console.log('лето')
        break;
    case '8':
        console.log('лето')
        break;
    case '9':
        console.log('осень')
        break;
    case '10':
        console.log('осень')
        break;
    case '11':
        console.log('зима')
        break;
    case '12':
        console.log('зима')
        break;

    default:
        console.log('введен некорректный месяц')
        break;
}





// z 7
let xs = prompt('Пожалуйста, введите любое число');

if (!isNaN(xs)) { // проверка "isNaN - если не число" - почему не компилируется без "!" / "!isNaN - Если число"
    if (xs % 2 == 0) {
    console.log('число четное');
} else {
    console.log('число нечетное');
}

} 






// z 8

let clientOS = 1;

if (clientOS) { 
    console.log('Клиент пользуется андроидом');
} else if (clientOS === 0) {
    console.log('Клиент пользуется IOS');
}


let clientOS = false;
if (clientOS) {
    console.log('Android');
} else if (clientOS === true) {
    console.log('IOS')
}

