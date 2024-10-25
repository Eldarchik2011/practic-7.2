const number = +prompt('Введите число между 0 и 3');
switch (number) {
    case 0:
        console.log('you entered 0');
        break;
        case 1:
            console.log('you entered 1');
            break;
            case 2:
            case 3:
                console.log('you entered 2, or even 3');
                break;
        
    default:
        console.log('you entered an incorrect number')
        break;
}


let num = 12
if (num > 10) {
    console.log(num + 100);
} else {
    console.log(num - 30);
}

let num2 = 6;
if (num2 % 2 == 0) {
    console.log(num2 / 2);

} else {
    console.log(num2 * 3);
}

let num3 = 52;
if (num3>50) {
    console.log(num3*num3);
} else if (num3>10 && num3 <30) {
    console.log(0);

} else {
    console.log('unavailable');
}

let num4 = 9;
let num5 = 10;


if (num4 >= num5) {
console.log(num4);
} else if (num4 <= num5) {
    console.log(num5);
}

let num6 = 123;
let num7 = 10;
if ((num6 - num7) > 100) {
    console.log('Yep');
} else if((num6 - num7) < 100) {
    console.log('Nah');
}



let num8 = 123;
let num9 = 10;
if ((num8 - num9) > 20) {
    console.log('Yep');
} else if( (num8 - num9) < 20) {
    console.log('Nah');
}


let month = 3;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('winter');
        break;
        case 3:
            case 4:
            case 5:
                console.log('spring');
                break;
                case 6:
                    case 7:
                    case 8:
                        console.log('summer');
                        break;
                        case 9:
                    case 10:
                    case 11:
                        console.log('fall');
                        break;
    default:console.log('enter a correct number stupid bastard!')
        break;
}


