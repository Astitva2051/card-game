

let elems = document.getElementsByClassName("result-container");

for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = 'none';
}


let pscore1 = 0;
let pscore2 = 0;

let count1 = 0;
let count2 = 0;
let openedcard = {};
let p1card;
let p2card;


const cardsContainer = document.querySelectorAll("#player1-card1 , #player1-card2, #player1-card3, #player2-card1, #player2-card2, #player2-card3");

for (var i = 0; i < cardsContainer.length; i += 1) {


    cardsContainer[i].addEventListener("click", function () {


        let card = this.getAttribute("data-card").split("-");

        if (!openedcard[card]) {
            this.innerHTML = `<img src='./images/${card[1]}/${card[0]}.png' class='card-image'>`

            let score = 0;
            if (card[1] == "SPADE") {
                score += 3;
                if (card[0] == "TW0") score += 0;
                else if (card[0] == "THREE") score += 1;
                else if (card[0] == "FOUR") score += 2;
                else if (card[0] == "FIVE") score += 3;
                else if (card[0] == "SIX") score += 4;
                else if (card[0] == "SEVEN") score += 5;
                else if (card[0] == "EIGHT") score += 6;
                else if (card[0] == "NINE") score += 7;
                else if (card[0] == "TEN") score += 8;
                else if (card[0] == "JACK") score += 9;
                else if (card[0] == "QUEEN") score += 10;
                else if (card[0] == "KING") score += 11;
                else if (card[0] == "ACE") score += 12;
            } else if (card[1] == "CLUB") {
                score += 0;
                if (card[0] == "TW0") score += 0;
                else if (card[0] == "THREE") score += 1;
                else if (card[0] == "FOUR") score += 2;
                else if (card[0] == "FIVE") score += 3;
                else if (card[0] == "SIX") score += 4;
                else if (card[0] == "SEVEN") score += 5;
                else if (card[0] == "EIGHT") score += 6;
                else if (card[0] == "NINE") score += 7;
                else if (card[0] == "TEN") score += 8;
                else if (card[0] == "JACK") score += 9;
                else if (card[0] == "QUEEN") score += 10;
                else if (card[0] == "KING") score += 11;
                else if (card[0] == "ACE") score += 12;
            } else if (card[1] == "HEART") {
                score += 2;
                if (card[0] == "TW0") score += 0;
                else if (card[0] == "THREE") score += 1;
                else if (card[0] == "FOUR") score += 2;
                else if (card[0] == "FIVE") score += 3;
                else if (card[0] == "SIX") score += 4;
                else if (card[0] == "SEVEN") score += 5;
                else if (card[0] == "EIGHT") score += 6;
                else if (card[0] == "NINE") score += 7;
                else if (card[0] == "TEN") score += 8;
                else if (card[0] == "JACK") score += 9;
                else if (card[0] == "QUEEN") score += 10;
                else if (card[0] == "KING") score += 11;
                else if (card[0] == "ACE") score += 12;
            } else if (card[1] == "DIAMOND") {
                score += 1;
                if (card[0] == "TW0") score += 0;
                else if (card[0] == "THREE") score += 1;
                else if (card[0] == "FOUR") score += 2;
                else if (card[0] == "FIVE") score += 3;
                else if (card[0] == "SIX") score += 4;
                else if (card[0] == "SEVEN") score += 5;
                else if (card[0] == "EIGHT") score += 6;
                else if (card[0] == "NINE") score += 7;
                else if (card[0] == "TEN") score += 8;
                else if (card[0] == "JACK") score += 9;
                else if (card[0] == "QUEEN") score += 10;
                else if (card[0] == "KING") score += 11;
                else if (card[0] == "ACE") score += 12;
            }

            if (this.getAttribute("id").split("-")[0] == "player1") {
                pscore1 = Math.max(pscore1, score);
                if (pscore1 == score) p1card = card;
                count1++;
            } else {
                pscore2 = Math.max(pscore2, score);
                if (pscore2 == score) p2card = card;
                count2++;
            }
            openedcard[card] = true;
        }
    });
}



let decidewinner = 0;

document.getElementById("player1-button").addEventListener("click", function () {
    if (count1 == 3) {

        let resultElement = document.getElementById("player1-result");
        resultElement.style.display = "flex";
        resultElement.style.alignItems = "first baseline";
        resultElement.style.justifyContent = "space-between";


        document.getElementById("player1-score").innerHTML = pscore1;

        document.getElementById("player1-highest").innerHTML = `<img src='./images/${p1card[1]}/${p1card[0]}.png' class='card-image'>`;
        decidewinner++;

    }
});

document.getElementById("player2-button").addEventListener("click", function () {
    if (count2 == 3) {

        let resultElement = document.getElementById("player2-result");
        resultElement.style.display = "flex";
        resultElement.style.alignItems = "first baseline";
        resultElement.style.justifyContent = "space-between";

        document.getElementById("player2-score").innerHTML = pscore2;

        document.getElementById("player2-highest").innerHTML = `<img src='./images/${p2card[1]}/${p2card[0]}.png' class='card-image'>`;

        decidewinner++;
    }
});


document.getElementsByClassName("winner")[0].addEventListener("click", function () {

    if (decidewinner >= 2) {
        let name, score, card;

        if (pscore1 >= pscore2) {
            name = "Suresh";
            score = pscore1;
            card = p1card;
        } else {
            name = "Ramesh";
            score = pscore2;
            card = p2card;
        }

        document.getElementsByClassName("winner-container")[0].innerHTML = `<h2>Winner is : ${name}</h2> 
  <h2>Score : ${score} </h2>

    <div>
        <div style="display: inline-block; ">

            <div class="highest-card" style="margin: 10px;">
                <img src='./images/${card[1]}/${card[0]}.png' class='card-image'>
            </div>
        </div>
    </div>`;

        window.scrollTo(0, document.body.scrollHeight);
    }
});



