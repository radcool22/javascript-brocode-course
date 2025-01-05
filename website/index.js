
function learning_functions(){
    function add(x, y){
        let result = x + y;
        return result;
    }
    function subtract(x,y){
        return x-y
    }
    function multiply(x,y){
        return x*y
    }
    function divide(x,y){
        return x/y
    }
    console.log(divide(2,3));
    console.log(multiply(2,3))

    function happyBirthday(username, age){
        console.log("Happy birthday to you!")
        console.log("Happy birthday to you!")
        console.log(`Happy birthday dear ${username}!`)
        console.log("Happy birthday to you!")
    }

    happyBirthday("Gaurav", 25);
    happyBirthday("Ariana", 30);
    happyBirthday("Shruti", 37)
}

function number_guessing_game(){
    const minNum = 1;
    const maxNum = 100;
    const answer = Math.floor(Math.random() * (maxNum-minNum + 1))

    let attempts = 0;
    let guess;
    let running = true;

    while(running){

        guess = window.prompt(`Guess a number between 1 and 100.`)
        guess = Number(guess);

        if(isNaN(guess)){
            window.alert("Please enter a valid number");
        }
        else if(0 > guess || guess > 100){
            window.alert("Please enter a valid number");
        }
        else{
            attempts+=1
            if(guess < answer){
                window.alert("Too Low. Try again.")
            }
            else if(guess > answer){
                window.alert("Too High. Try again.")
            }
            else{
                window.alert(`Congratulations! It took you ${attempts} attempts.`)
                running = false;
            }
        }
    }
}

function for_loops(){
    for(let i = 1; i<=20; i++){
        
        if(i==13){
            continue
        }
        else{
        console.log(i);
        }
    }

    for(let i = 10; i > 0; i--){
        console.log(i)
    }
}

function while_loops(){
    let loggedIn = false;
    let username;
    let password;

    while(!loggedIn){
        username = window.prompt("Enter your username");
        password = window.prompt("Enter your password");

        if(username === "myUsername" && password === "myPassword"){
            loggedIn = true
            console.log("You are logged in")
        }
        else{
            console.log("Invalid credentials")
        }
    }

    let name = "";

    while(name === "" || name === null){
        username = window.prompt("Enter your username:")
}
}

function strict_equality(){
    console.log(`Hello ${name}`)

    console.log(`Hello ${username}`)

    const PI = 3.14

    if(PI === "3.14"){
        console.log("That is pi!")
    }
    else{
        console.log("That is not pi!")
    }
}

function logical_operators(){
    const temp = 1;

    if(temp<=0 || temp>30){
        console.log("The weather is bad!");
    }
    else{
        console.log("The weather is good!")
    }

    const isSunny = true;

    if(!isSunny){
        console.log("It is cloudy!")
    }
    else{
        console.log("It is sunny!")
    }
}

function string_methods(){
    let username = window.prompt("Enter your username: ");

    username = username.trim();
    let letter = username.charAt(0);
    letter = letter.toUpperCase();

    let extraChars = username.slice(1);
    extraChars = extraChars.toLowerCase();
    username = letter + extraChars;

    username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
    console.log(username)

    const fullName = "Kabir Gupta"

    let firstName = fullName.slice(0, 6);
    let lastName = fullName.slice(6, 12);

    let firstChar = fullName.slice(0, 1)
    let lastChar = fullName.slice(-1)

    console.log(firstName)
    console.log(lastName)
    console.log(firstChar)
    console.log(lastChar)

    let phoneNumber = "123-456-7890";

    phoneNumber = phoneNumber.replaceAll("-", "/");
    console.log(phoneNumber);
    console.log(phoneNumber.padStart(98, "0"));

    let name = "Radcool22";

    console.log(username.charAt(0));
    console.log(username.indexOf("o"))
    console.log(username.lastIndexOf("o"))
    console.log(username.length)
    console.log(username.trim())
    console.log(username.toUpperCase())
    console.log(username.toLowerCase())
    console.log(username.repeat(3))
    console.log(username.includes(" "))

    let result = username.startsWith(" ")
    console.log(result)

    if(result){
        console.log("Your username can't begin with an empty character")
    }
    else{
        console.log(`Your username: ${username} is valid`)
    }
}

function switches(){
    let testScore = 71;
    let letterGrade;

    switch(true){
        case testScore >= 90:
            letterGrade = "A";
            break
        case testScore >= 80:
            letterGrade = "B";
            break
        case testScore >= 70:
            letterGrade = "C";
            break
        case testScore >= 60:
            letterGrade = "D";
            break
        default:
            letterGrade = "F";
    }

    console.log(letterGrade);

    let day = "pizza";

    switch(day){
        case 1: 
            console.log("Its monday");
            break;
        case 2: 
            console.log("Its tuesday");
            break;   
        case 3: 
            console.log("Its wednesday");
            break;
        case 4: 
            console.log("Its thursday");
            break;
        case 5: 
            console.log("Its friday");
            break;
        case 6: 
            console.log("Its saturday");
            break;
        case 7: 
            console.log("Its sunday");
            break;
        default:
            console.log(`${day} is not a day`)
    }
}

function ternary_operators(){
    let purchaseAmount = 100;
    let discount = purchaseAmount>=100 ? "You get a 10% discount" : "You get no discount"
    console.log(discount)

    let isStudent = true;
    let anothermessage = isStudent ? "You are a student" : "You are not a student"
    console.log(ano1thermessage)

    let time = 10;
    let greeting = time < 12 ? "Good morning!" : "Good afternoon!"
    console.log(greeting)

    let age=14;
    let message = age >= 18 ? "You are an adult" : "You are a minor";
    console.log(message)
}

function checked_properties(){
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const submitBtn = document.getElementById("submitBtn");
    const subResult = document.getElementById("subResult");
    const paymentResult = document.getElementById("paymentResult");

    submitBtn.onclick = function(){
        if(myCheckBox.checked){
            subResult.textContent = `You are subscribed!`;
        }
        else{
            subResult.textContent = `You are not subscribed!`;
        }

        if(visaBtn.checked){
            paymentResult.textContent = `You are paying with Visa`
        }
        else if(mastercardBtn.checked){
            paymentResult.textContent = `You are paying with Mastercard`
        }
        else if(paypalBtn.checked){
            paymentResult.textContent = `You are paying with PayPal`
        }
        else{
            paymentResult.textContent = `You must select a payment type`
        }
    }
}

function if_statements(){
    let theage = 14;

    if(theage >= 120){
        console.log("Invalid age")
    }
    else if(theage >= 18){
        console.log("You can drink")
    }
    else if(theage < 0){
        console.log("Invalid age")
    }
    else{
        console.log("Wait a few more years")
    }

    let yourage = 14;
    let hasLicense = false;

    if(yourage >= 18){
        console.log("You can drive")
        if(hasLicense){
            console.log("Enjoy driving")
        }
        else{
            console.log("Get a license")
        }
    }
    else{
        console.log("You must be 16+ to have a license")
        if(hasLicense){
            console.log("Stop being illegal")
        }
        else{
            console.log(`Wait for ${(18-Number(yourage))} more years`)
        }
    }


    let isStudent = true;
    if(isStudent){
        console.log("Good luck for your exams!")
    }
    else{
        console.log("Get a girlfriend")
    }

    let time = 13;

    if(time < 12){
        console.log("Good morning!");
    }
    else{
        console.log("Good Afternoon")
    }

    let age = 15;

    if(age>=18){
        console.log("You are old enough to enter this site.")
    }
    else{
        console.log("You must be 18+ to enter this site.")
    }
}

function random_number_generator(){
    const myButton = document.getElementById("myButton");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");
    const min = 1;
    const max = 6;

    let randomNum1;
    let randomNum2;
    let randomNum3;

    myButton.onclick = function(){
        randomNum1 = Math.floor(Math.random() * max) + min
        randomNum2 = Math.floor(Math.random() * max) + min
        randomNum3 = Math.floor(Math.random() * max) + min
        label1.textContent = randomNum1
        label2.textContent = randomNum2
        label3.textContent = randomNum3
    }
}

function math_objects(){
    console.log(Math.E);

    let x = 3;
    let y = 2;
    let z = 1;

    z = Math.round(x);
    z = Math.floor(x);
    z = Math.ceil(x);
    z = Math.trunc(x);
    z = Math.pow(x, y);
    z = Math.sqrt(x);
    z = Math.log(x);
    z = Math.sin(x);
    z = Math.cos(x);
    z = Math.tan(x);
    z = Math.abs(x);
    z = Math.sign(x);
    let max = Math.max(x,y,z);
    let min = Math.min(x,y,z);
    console.log(z)
}

function counter_program(){
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel")

    let count = 0;

    increaseBtn.onclick = function(){
        count+=1;
        countLabel.textContent = count
    }

    resetBtn.onclick = function(){
        count = 0
        countLabel.textContent = count
    }

    decreaseBtn.onclick = function(){
        count-=1;
        countLabel.textContent = count
    }
}

function constants(){
    const PI = 3.1415926535897;
    let radius;
    let circumference;

    document.getElementById("myButton").onclick = function(){
        radius = document.getElementById("myText").value;
        radius = Number(radius);
        circumference = 2 * PI * radius;
        document.getElementById("myH3").textContent = `The circumference of the circle is ${circumference} centimeters`;
    }

    let x = "0";
    let y = "0";
    let z = "0";

    x = Number(x);
    y = String(y);
    z = Boolean(z);

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);
}

function accept_user_input(){
    let age = window.prompt("What is your age: ")

    age = Number(age);
    age+=1

    console.log(age, typeof age)

    let username;
    username = window.prompt(`What is your username: `);

    console.log(username)

    document.getElementById("myButton").onclick = function(){
        username = document.getElementById("myText").value;
        document.getElementById("myH1").textContent = `Hello ${username}`
        console.log(username);
    }
}

function javascript_basics(){
    let students = 30;

    students += 1;
    students -= 1;
    students *= 10;

    let extraStudents = students % 2;
    let result = 1+2-3*4**5
    console.log(result);

    let age = 14;
    let isStudent = true;

    document.getElementById("p1").textContent = `Your name is ${fullName}`;
    document.getElementById("p2").textContent = `You are ${age} years old`;
    document.getElementById("p3").textContent = `Enrolled in school: ${isStudent}`

    console.log(`Hello`);
    console.log(`I like pizza!`)

    window.alert(`This is an alert`)
    window.alert(`I like pizza`)

    let price = 10.99;
    let sat = 1600;
    let firstName = "Kabir";
    let email = "kabirgupta@gmail.com"

    console.log(price)
    console.log(sat)
    console.log(typeof firstName)
    console.log(`You owe me $${10.99}`)
    console.log(`Your SAT score is ${sat}`)
    console.log(`Your name is ${firstName}`)
    console.log(`Your email is ${email}`)

    let online = true;

    console.log(typeof online)
    console.log(`Bro is online: ${online}`)

    // This is a comment
    /* This is also a comment */
}

/* 
I have called all of the functions created below ↓
*/

// javascript_basics(): Basic syntax of JS
// accept_user_input(): How to accept user input in JS
// constants(): How to use constants in JS
// counter_program(): A simple program that uses a counter to increase/decrease a number 
// math_objects(): Math objects built into JS
// random_number_generator(): Generates a random number
// if_statements(): Demonstrates how to use if statements
// checked_properties(): Evaluates if an object as been checked
// ternary_operators(): Usage of operators for smaller conditional statements
// switches(): How to use switch statements
// string_methods(): How to manipulate strings
// logical_operators(): How to use logical operators for boolean logic
// strict_equality(): How to use strict comparisons for equality checks
// while_loops(): Implements repetitive tasks
// for_loops(): Repeats tasks a certain number of times
// number_guessing_game(): An interactive game to guess a number
// learning_functions(): How to use functions to organize code