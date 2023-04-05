/* 1. Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
2. преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту 
3. вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8, где вместо 21 и 69.8 
должны быть подставлены соответствующие значения, которые были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Примечания: Пользователь всегда вводит корректное число.
Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь". */
const degreesCelsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${degreesCelsius}, Фаренгейт: ${parseFloat((9/5 * degreesCelsius + 32).toFixed(1))}.`);

