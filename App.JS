    //       The          Whole        Logic        Of        The        Game         !

    let userScore = 0;
    let compScore = 0;

    let EnterName  = prompt("Enter your name !");
    let name1 = document.querySelector("#name");
    name1.innerText = EnterName;  


    let GenCompChoice = () => {
        let Coptions = ["rock","paper","scissors"];
        let ran = Math.floor(Math.random()*3);
        return Coptions[ran];
    }

    let Options = document.querySelectorAll(".choises");

    Options.forEach(Option => {

      Option.addEventListener("click",()=>{

        function rehstartGame() {
                userScore = 0; 
                compScore = 0;
                userScoreP.innerText = 0; 
                compScoreP.innerText = 0;
                location.reload();
        }

            let CompCho = GenCompChoice();
            let userChoice = Option.getAttribute("id");
            let message = document.body.querySelector("#message");

            // Now we should select the score Praragraph tags to update the score Card !

            let userScoreP = document.querySelector("#user-score");
            let compScoreP = document.querySelector("#computer-score");

            function showResult(text,className) {
                message.innerText = text;
                message.classList.remove("win", "lose", "draw");
                message.classList.add(`${className}`);
            }

            if (userChoice===CompCho) {
                message.innerText = "Draw Game"
                message.classList.add("draw")    
            }    
            else if (userChoice === "rock" &&  CompCho == "paper" ) {
                showResult(`You Lose`,"lose")
                ++compScore;
            }
            else if (userChoice === "rock" &&  CompCho == "scissors" ) {
                showResult("You Win","win");
                ++userScore;
            }
            else if (userChoice === "paper" &&  CompCho == "rock" ) {
                showResult("You Win","win");
                ++userScore;
            }
            else if (userChoice === "paper" &&  CompCho == "scissors" ) {
                showResult("You Lose","lose");
                ++compScore;
            }
            else if (userChoice === "scissors" &&  CompCho == "paper" ) {
                showResult("You Win","win");
                ++userScore;
            }
            else if (userChoice === "scissors" &&  CompCho == "rock" ) {
                showResult("You Lose","lose");
                ++compScore;
            }
            userScoreP.innerText = userScore;
            compScoreP.innerText = compScore;

            // Now this sections is for giving the result what the user and the Computer

            let userResult = document.querySelector("#userSel");
            let compResult = document.querySelector("#compSel");

            userResult.innerText = userChoice.toUpperCase();
            compResult.innerText = CompCho.toUpperCase();            

        if (compScore === 3){
            setTimeout(()=>{
                alert("You Lose !")
                restartGame();
            },100)
                    }
        else if(userScore === 3) {
            setTimeout(()=>{
                alert("You Win !")  
                restartGame();
            },100)
        }
        })
    })