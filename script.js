/* =========================================
   GIRLFRIEND LOVE WEBSITE
========================================= */


/* =========================================
   PAGE CONTROL
========================================= */

let currentPage = 1;

function showPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const targetPage =
        document.getElementById("page" + pageNumber);

    if (targetPage) {

        targetPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        currentPage = pageNumber;
    }
}


function nextPage() {

    showPage(currentPage + 1);

}


/* =========================================
   PAGE 2
   FAVOURITE DATE
========================================= */

function checkFavouriteDate() {

    const input =
        document.getElementById("favouriteDate");

    const error =
        document.getElementById("dateError");

    const enteredDate =
        input.value.trim();

    const correctDate =
        "31-08-2025";


    if (enteredDate === correctDate) {

        error.textContent =
            "Correct date! 🥹❤️";

        error.style.color = "#2c9c65";

        setTimeout(() => {

            showPage(3);

        }, 700);

    }

    else {

        error.textContent =
            "Wrong date 😏 Try again, my dear gurl ❤️";

        error.style.color = "#d42f5d";

        input.value = "";

    }

}


/* =========================================
   PAGE 3
   QUIZ
========================================= */

function checkQuiz() {

    const correctAnswers = {

        q1: "a",
        q2: "c",
        q3: "c",
        q4: "d",
        q5: "a"

    };


    let score = 0;

    let answered = 0;


    for (let question in correctAnswers) {

        const selected =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (selected) {

            answered++;

            if (
                selected.value ===
                correctAnswers[question]
            ) {

                score++;

            }

        }

    }


    const result =
        document.getElementById("quizResult");


    if (answered < 5) {

        result.textContent =
            "Answer all 5 questions first 😏❤️";

        result.style.color = "#d42f5d";

        return;
    }


    if (score >= 3) {

        result.textContent =
            `You got ${score}/5 correct! 🥰❤️ You may continue!`;

        result.style.color = "#2c9c65";


        setTimeout(() => {

            showPage(4);

        }, 1200);

    }

    else {

        result.textContent =
            `Only ${score}/5 correct 😏 Try again!`;

        result.style.color = "#d42f5d";

    }

}


/* =========================================
   PAGE 4
   FIRST MEETUP DATE
========================================= */

function checkMeetupDate() {

    const input =
        document.getElementById("meetupDate");

    const error =
        document.getElementById("meetupError");

    const enteredDate =
        input.value.trim();

    const correctDate =
        "05-09-2025";


    if (enteredDate === correctDate) {

        error.textContent =
            "That's our special day! ❤️🥹";

        error.style.color = "#2c9c65";


        setTimeout(() => {

            showPage(5);

        }, 800);

    }

    else {

        error.textContent =
            "Wrong date 😭 Think again, baby ❤️";

        error.style.color = "#d42f5d";

        input.value = "";

    }

}


/* =========================================
   PAGE 5
   PASSWORD
========================================= */

function checkPassword() {

    const input =
        document.getElementById("mobilePassword");

    const error =
        document.getElementById("passwordError");

    const password =
        input.value.trim();


    const correctPassword =
        "2417";


    if (password === correctPassword) {

        error.textContent =
            "Password correct! ❤️";

        error.style.color = "#2c9c65";


        setTimeout(() => {

            showPage(6);

        }, 700);

    }

    else {

        error.textContent =
            "Wrong password 😏 Try again!";

        error.style.color = "#d42f5d";

        input.value = "";

    }

}


/* =========================================
   PAGE 7
   MUSIC
========================================= */

function goToCountdown() {

    const song =
        document.getElementById("loveSong");

    /*
       Stop the song before moving forward.
    */

    if (song) {

        song.pause();

        song.currentTime = 0;

    }


    showPage(8);

    startCountdown();

}


/* =========================================
   COUNTDOWN
========================================= */

let countdownStarted = false;


function startCountdown() {

    if (countdownStarted) {
        return;
    }

    countdownStarted = true;


    const countdown =
        document.getElementById("countdown");


    let number = 10;


    countdown.textContent = number;


    const timer =
        setInterval(() => {

            number--;

            countdown.textContent =
                number;


            if (number <= 0) {

                clearInterval(timer);


                setTimeout(() => {

                    showPage(9);

                    createFinalHearts();

                }, 800);

            }

        }, 1000);

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const container =
        document.querySelector(".hearts");


    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(
    createFloatingHeart,
    700
);


/* =========================================
   EXTRA HEARTS FOR FINAL PAGE
========================================= */

function createFinalHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 150);

    }

}


/* =========================================
   ENTER KEY SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            currentPage === 2
        ) {

            checkFavouriteDate();

        }

        else if (
            event.key === "Enter" &&
            currentPage === 4
        ) {

            checkMeetupDate();

        }

        else if (
            event.key === "Enter" &&
            currentPage === 5
        ) {

            checkPassword();

        }

    }
);