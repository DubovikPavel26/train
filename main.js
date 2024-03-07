function myPrompt(){

    const firstNumber = +prompt('Введите число', '');

        secondNumber = +prompt('Введите систему счисления для числа', '');


    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && (secondNumber >= 2) && (secondNumber <= 36)) { 
        alert(`Ответ: число ${firstNumber} в ${secondNumber}-ой системе счисления = ${firstNumber.toString(secondNumber)}`);
    } else {
        alert('Некорректный ввод!');
    }
}

myPrompt();