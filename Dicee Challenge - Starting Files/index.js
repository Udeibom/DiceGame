let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png

let randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



let messageContainer = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
    messageContainer.innerHTML = "🚩Player 1 Wins";
}

else if(randomNumber2 > randomNumber1) {
    messageContainer.innerHTML = "Player 2 Wins🚩";
}

else {
    messageContainer.innerHTML = "Draw!";
}



