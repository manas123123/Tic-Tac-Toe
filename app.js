let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]];

boxes.forEach((box)=> {
    box.addEventListener("click" , () => {
        console.log("asd");
        if(turn0){
            box.innerText= "O";
            turn0=false;
        }
        else{
            box.innerText= "X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(box of boxes)
        box.disabled=true;
}

const checkWinner = () => {
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText=="O" && boxes[pattern[1]].innerText=="O" && boxes[pattern[2]].innerText=="O")
           { console.log("O wins");
             disableBoxes();
           }
            if(boxes[pattern[0]].innerText=="X" && boxes[pattern[1]].innerText=="X" && boxes[pattern[2]].innerText=="X")
                { console.log("X wins");
                    disableBoxes();
                  }
    }
}

const resetGame  = () => {
    turn0=true;
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }

}

resetbtn.addEventListener("click", ()=>{
    resetGame();
});
