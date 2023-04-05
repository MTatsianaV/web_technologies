// Задача 1.
/* Получить от пользователей два числа и вывести в диалоговое окно сумму значений
которые ввёл пользователь.
Вывод должен выглядеть так: Результат сложения чисел 5 и 2 равен 7. */

//Решение
/* const firstNum = Number.parseFloat(prompt("Введите первое число: "));
const secondNum = Number.parseFloat(prompt("Введите второе число: "));
alert(`Результат сложения чисел ${firstNum} и ${secondNum}  равен ${firstNum + secondNum}`); 

function summAB {
    return firstNum + secondNum
} */

// Задача 2.
/* Вывести на экран в диалоговом окне текст с сообщением "Вам хорошо живется?"
и кнопками "ОК", "Отмена", для чего необходимо использовать confirm.
При нажатии на кнопку "ОК" вывести в диалоговом окне текст с сообщением "Тогда мы идем к Вам!"
При нажатии на кнопку "Отмена" вывести в диалоговом окне текст с сообщением "Ну вы держитесь там!" */

//Решение
/* const question = confirm("Вам хорошо живется?");
if (question){                              //question ? alert("Тогда мы идем к Вам!") : alert("Ну вы держитесь там!");
    alert("Тогда мы идем к Вам!");
} else {
    alert("Ну вы держитесь там!");
}
 */

// Задача 3.
/* Перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
<script>
    let product = "Бананы";
    if (product == "Мандарины"){
        alert('Мандарины стоят 100 руб. за кг.');        
    } else if (product == "Бананы"){
        alert('Бананы и груши стоят 70 руб. за кг.');
    } else if (product == "Груши"){
        alert('Бананы и груши стоят 70 руб. за кг.');
    } else{
        alert('Нет такого продукта!');
    }
</script> */

//Решение
/* let product = prompt("Вам какой фрукт?").toLowerCase();
switch (product) {
    case "мандарины":
    alert('Мандарины стоят 100 руб. за кг.');
    break;
    case "бананы":
    case "груши":
    alert('Бананы и груши стоят 70 руб. за кг.');
    break;
    default:
    alert('Нет такого продукта!');
}
 */


// Задача 4.
/* Функция getMaxEvenElement(arr) принимает массив с целыми числами.
Необходимо реализовать функцию так, чтобы она возвращала значение большего элемента массива,
который записан в четном индексе, включая ноль.
function getMaxEvenElement(arr){

    }
    console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])) //5
    console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])) //31 */

//Решение

function getMaxEvenElement(arr) {
    let maxIndex = arr[0];
    for (let index = 2; index < arr.length; index += 2) {
        if (arr[index] > maxIndex) {
            maxIndex = arr[index];
        }
    }
    return maxIndex;
}
const arrayNumbers1 = prompt("Введите массив через запятую: ").split(",").map(function(value){return Number.parseFloat(value)});
const arrayNumbers2 = prompt("Введите массив через запятую: ").split(",").map((value) => Number.parseFloat(value));
const arrayNumbers3 = prompt("Введите массив через запятую: ").split(",").map(Number.parseFloat);
console.log(getMaxEvenElement(arrayNumbers1));
console.log(getMaxEvenElement(arrayNumbers2));
alert(getMaxEvenElement(arrayNumbers3));


console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); //5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); //31
