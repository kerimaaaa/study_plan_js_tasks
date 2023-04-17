// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     })
//   };
 //What will the console display and why?
//Причина в том, что цикл for завершается только до тех пор, пока 
//заданное условие не нарушается. Для приведенного выше цикла 
//for он завершится, когда i = 10. Следовательно, 
//i равно 10, когда цикл for завершится.

//   #2
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : 
// Today is: Friday. 
// Current time is: 4PM:50:22

// let datee = function (){
// let currentDate =  new Date().getDay();
//  let weekdays  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// return weekdays[currentDate]
// }
// console.log(`Today is ${datee()}`)
// let d = new Date();
// let n = d.toLocaleTimeString()

// console.log(`Current time is: ${n}`);

// #3
// Write a JavaScript function that reverse a number. 
// Example x = 32243;	
// Expected Output : 34223

// function numReverse(num){
// num += '';
// return num.split('').reverse().join('');

// }
// console.log(+(numReverse(32243)))
// #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
// function factorialize(num) {
//         if (num < 0) 
//               return -1;
//         else if (num == 0) 
//             return 1;
//         else {
//             return (num * factorialize(num - 1));
//         }
//       } 

// #5
//  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

// let num1 = +prompt('Enter a number');
// let num2 = +prompt('Enter the second number');

// if (num1 > num2){
//    console.log(num1);
// } else{
//     console.log(num2);
// }

// #6
// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// let myColor = ["Red", "Green", "White", "Black"];

//  console.log(myColor.join());
//console.log(myColor.join('+'));

// #7
// Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// 
// Output :
// "October" 
// "November" 
// function month_name(date){

// let monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
// return monthsList[date.getMonth()]
// }
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));


// #8
// Write a JavaScript program to test the first character of a string is uppercase or not

// function upperCase(string){
//    const letterRegex =/^[A_Z]/;
//    if(!letterRegex.test(string)){
//    console.log('lowercase');
//    } else {
//       console.log('uppercase')
//    }
   
// }
// upperCase('Adad');

// #9
// Write a JavaScript program to draw a smile
	
const smile = document.querySelector(".smile");
let eye1 = document.createElement('div');
let eye2 = document.createElement('div');
smile.append(eye1);
smile.append(eye2);
eye1.className = 'rightEye';
eye2.className = 'leftEye';
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}
const rightEye = document.querySelector('.rightEye');
const leftEye = document.querySelector('.leftEye');

css(smile, {
    position: 'relative'
})
css(rightEye, {
    position: 'absolute',
    'background-color': 'black',
    width: '25px',
    height: '25px',
    'box-sizing': 'border-box',
    'margin-top':'100px',
    'margin-left':'80px',
    'border-radius': '50%'
});
css(leftEye, {
    position: 'absolute',
    'background-color': 'black',
    width: '25px',
    height: '25px',
    'box-sizing': 'border-box',
    'margin-top':'100px',
    'margin-left':'200px',
    'border-radius': '50%'
});
function mySmile() { 
let  smile = document.querySelector(".smile");

    let laugh = smile.getContext("2d");    
    //105 means x it will go the left side and 75 means y it will go upward of //downward    
    laugh.moveTo(105, 75);    
    laugh.beginPath();    
    laugh.strokeStyle = "red";    
    laugh.arc(75, 75, 30, 0, Math.PI, false);    
    //to draw a half rounded circle with a line stroke we can invoke the stroke function    
    laugh.stroke();    
 }  
   
    mySmile();    
 



// Part 2
// #1
// На странице есть верстка:	
// Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.
// Вывод в консоли:
// В недрах тундры, выдры в гетрах 
// Тырят в вёдра ядра кедров! 
// Выдрав с выдры в тундре гетры 
// Вытру выдрой ядра кедров 
// Вытру гетрой выдре морду  
// Ядра в вёдра, выдру в тундру! 

// const string1 = document.querySelector('#string-1');
// const string2 = document.querySelector('#string-2');
// const string3 = document.querySelector('#string-3');
// const string4 = document.querySelector('#string-4');
// const string5 = document.querySelector('#string-5');
// const string6 = document.querySelector('#string-6');

// console.log(string3);
// setTimeout(()=> {
//     console.log(string5)
// },2000);
// setTimeout(()=> {
//     console.log(string2)
// },4000);
// setTimeout(()=> {
//     console.log(string6)
// },6000);
// setTimeout(()=> {
//     console.log(string4)
// },8000);
// setTimeout(()=> {
//     console.log(string5)
// },10000);





// #2
// На странице есть верстка
// С помощью JS необходимо первым трем  элементам задать 
//красный цвет текста, а остальным трем - зеленый.
// const elements = document.querySelectorAll(".element");
// const elements1 = document.querySelectorAll('.element1')



// for (let i =0; i <elements.length; i++){
//     if([i]<3){
//         elements[i].style.color ='red';
//     } else{
//         elements[i].style.color ='green';
//     }
// }




// #3

// На странице есть контейнер <ol id="todo-list"></ol>,
// необходимо с помощью цикла добавить в него пять задач 
//(элементов <li>) с классом task и текстом, взятым из 
//массива задач из пяти элементов: 

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

// const list = document.querySelector('#todo-list');
// for(let oneTask of tasks) {
//     let item = document.createElement('LI');
//     item.className ="task";
//     list.append(item);
//     item.innerText = oneTask;
// }


// Ожидаемый результат в инспекторе после выполнения скрипта:
/* <ol id="todo-list">
        <li class="task">Buy lemonade</li>
        <li class="task">Make toasts</li>
        <li class="task">Repair car</li>
        <li class="task">Play games</li>
        <li class="task">Pet a cat</li>
    </ol>  */



// #4
// На странице есть следующая разметка:



// Вам необходимо с помощью JavaScript вставить после каждого тега <p> 
//тег <hr>, для визуального отделения абзацев друг от друга.
	
// Указания:
// Подразумевается, что вышеуказанная разметка находится 
//внутри тега <body>.
// Нельзя модифицировать указанную разметку.
// За использование цикла дополнительные баллы.

// const texts = document.querySelectorAll('p');
// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }
// for(let text of texts ){
//     let hr = document.createElement('hr')
//     insertAfter(hr, text.nextSibling);
// }

// #5
// Дана такая разметка:



// Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" 
//и заменить товар "Chocolate bar" на "Canned Fish", количеством 
//4 штуки.

// Указания:
//  Для удаления использовать .remove()
// Для замены использовать .replaceChild()
// Подразумевается, что вышеуказанная разметка находится 
//внутри тега <body>.
// const cartItems = document.querySelector('#cart-items')
// const milk = document.querySelector('.item');
// const qty = document.querySelectorAll('.qty')
// let newDiv = document.createElement('div');
// let newSpan = document.createElement("span");
// milk.nextElementSibling.remove();
// newDiv.innerText ='Canned fish';
// newSpan.innerText=' x 4';
// let lChild = cartItems.lastElementChild;
// cartItems.replaceChild(newDiv,lChild)
// let spann = newDiv.append(newSpan);


// #6
// Напишите программу для создания списка, которые 
//будет вводить пользователь.
// Для каждого пункта:
// Запрашивайте содержимое пункта у 
//пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь 
//нажимает "Отмена" или вводит пустую строку.
// let ul = document.querySelector('ul');
// let text;
// do{
//    text  = prompt('Enter your text');
//     const li = document.createElement('li');
//  ul.appendChild(li);
//  li.innerText = text;
// } while (text !== '' );


   
   

