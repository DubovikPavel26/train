function myPrompt(){


    const firstNumber = +prompt('Введите число', '');

    const error = function(){
        alert('Некорректный ввод!');
    };
    
    if(!Number.isInteger(firstNumber)){
        error();
        return;
    }


    const secondNumber = +prompt('Введите систему счисления для числа', '');

    if(!Number.isInteger(secondNumber) || (secondNumber < 2) || (secondNumber > 36)){
        error();
        return;
    }


    return alert(`Ответ: число ${firstNumber} в ${secondNumber}-ой системе счисления = ${firstNumber.toString(secondNumber)}`);
}
