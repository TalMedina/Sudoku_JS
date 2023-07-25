function startG() {
    let user = document.getElementById('userN').value;// userdname value
    let pass = document.getElementById('Pass').value;//password value
    if (user == 'abcd' && pass == 1234) {//checks username & password
        document.getElementById('div1').style.display = 'none';//div 1 dissapears
        document.getElementById('div2').style.display = 'block';//div 2 apears
        document.getElementById('user').innerHTML = user;// inserts username to div 2 for dhe user to see
    } else {
        alert('Error-your password or username valid')//messege that appears if username of password incorrect 
    }
}

function diffculty(diffculty) {// saveLevel  // getting random board

    const board1 =
    [[3,1,6,5,7,8,4,9,2],
    [5,2,9,1,3,4,7,6,8],
    [4,8,7,6,2,9,5,3,1],
    [2,6,3,4,1,5,9,8,7],
    [9,7,4,8,6,3,1,2,5],
    [8,5,1,7,9,2,6,4,3],
    [1,3,8,9,4,7,2,5,6],
    [6,9,2,3,5,1,8,7,4],
    [7,4,5,2,8,6,3,1,9]]
    
    const board2 = 
    [[4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9]]
    
    const board3 =
    [[1,5,2,4,8,9,3,7,6],
    [7,3,9,2,5,6,8,4,1],
    [4,6,8,3,7,1,2,9,5],
    [3,8,7,1,2,4,6,5,9],
    [5,9,1,7,6,3,4,2,8],
    [2,4,6,8,9,5,7,1,3],
    [9,1,4,6,3,7,5,8,2],
    [6,2,5,9,4,8,1,3,7],
    [8,7,3,5,1,2,9,6,4]]
    
    
    let board = [] // empty board
    let random1_3 = Math.floor(Math.random() * 3)+1;//random num 1-3
    if (random1_3==1) { //if num 1 
        board = board1 //imserts board 1 into empty board
        boardNum=1 // creates num of the board for later testing
        
    }
    else if(random1_3==2){//if num 2
        board = board2//imserts board 2 into empty board
        boardNum=2// creates num of the board for later testing
    }
    else if (random1_3==3) {//if num 3
        board = board3//imserts board 3 into empty board
        boardNum=3// creates num of the board for later testing
    }


    if (diffculty == 'Easy') {//if easy
        saveLevel = "Easy";// saveLevel as easy
        someLevel(board);//activate created board on someLeve
    }
    if (diffculty == 'Medium') {//if medium
        saveLevel = "Medium";// saveLevel as medium
        someLevel(board);//activate created board on someLeve
    }
    if (diffculty == 'Hard') {//if hard
        saveLevel = "Hard";// saveLevel as hard
        someLevel(board);//activate created board on someLeve
    }
}
// past from here
function putNumber(Td) {// // the num that was chosen in the "numberChoose"
    let td = document.getElementById(Td).innerHTML.length;
    if (temp != 10) {
        if (temp.length != 0 && td == 0) {
            document.getElementById(Td).innerHTML = temp;
            document.getElementById(Td).style.backgroundColor = "gray";
        }
    }
}





    function someLevel(board) { //activates chosen board


        if (saveLevel=="Easy") { // how many numbers to remove from the board
            lvl = 50;
        }
        else if ( saveLevel == "Medium"){// how many numbers to remove from the board
            lvl = 65;
        }
        else if (saveLevel =="Hard") {// how many numbers to remove from the board
            lvl = 80
        }

    // function that randomly replacing numbers to 0
        for (let i = 0; i <= lvl; i++) {//runs as many times acording to users selection of lvl
            let randomX =Math.floor(Math.random() * 9);//randm x (i & j on the board)
            let randomY=Math.floor(Math.random() * 9);//random y (i & j on the board)

            if (board[randomX][randomY]=0) {  // checks if the function alerady turnd the num to 0 then go a step back
                i-- //step back
            }
            else{ // if not replace the num to 0
                board[randomX][randomY] = 0 //replacing num to 0
            }
    
        }
    
    
        let str = 0;// index
        document.getElementById('div2').style.display = "none";// div 2 display none on lvl selection
        document.getElementById('div3').style.display = "block";// // div 3 display block on lvl selection 
        // let ind = document.getElementsByClassName("td").length;// var that gets the length of the class
        let ind1 = document.getElementsByClassName("td")//var that gets the entire class
        for (let i = 0; i < board.length; i++) {// runs on the generated chosen lvl bord
            for (let j = 0; j < board[i].length; j++) {//runs on the values inside the i(arr)
                if (board[i][j] != 0) {//if there is a num on board and not 0
                    ind1[str].innerHTML = board[i][j];//inserts the num to the table in html (for the user to see)
                    ind1[str].style.backgroundColor = "gray";// when the num is in the board turn box gray
                } else {
                    ind1[str].style.backgroundColor = 'white';// if num not inserted and its "empty" box white
                }
                str++;
            }
        }
    }

var saveLevel = "";// saves lvl 
var boardNum = ''; //saves the num of the board for later testing


// copy from here
var temp= 10;
function tempNum(num1) {
    temp = num1;
}
//runs as a line caces the length and run on it
function again() {//function that clears the board and activate the same lvl again
    let boardLength = document.getElementsByClassName("td").length; //var that gets the length of the class
    let tdClass = document.getElementsByClassName("td");//var that gets the class
    for (let tdIndex = 0; tdIndex < boardLength; tdIndex++) {//runs on the board
        tdClass[tdIndex].innerHTML = '';//clears the table
    }
    if (saveLevel == 'Easy') {// resets level
        diffculty("Easy");
    }
    if (saveLevel == "Medium") {// resets level
        diffculty("Medium");
    }
    if (saveLevel == "Hard") {// resets level
        diffculty("Hard");
    }
}

// solvd board 1
const solved1 =
[[3,1,6,5,7,8,4,9,2],
[5,2,9,1,3,4,7,6,8],
[4,8,7,6,2,9,5,3,1],
[2,6,3,4,1,5,9,8,7],
[9,7,4,8,6,3,1,2,5],
[8,5,1,7,9,2,6,4,3],
[1,3,8,9,4,7,2,5,6],
[6,9,2,3,5,1,8,7,4],
[7,4,5,2,8,6,3,1,9]]

// solvd board 2
const solved2= 
[[4,3,5,2,6,9,7,8,1],
[6,8,2,5,7,1,4,9,3],
[1,9,7,8,3,4,5,6,2],
[8,2,6,1,9,5,3,4,7],
[3,7,4,6,8,2,9,1,5],
[9,5,1,7,4,3,6,2,8],
[5,1,9,3,2,6,8,7,4],
[2,4,8,9,5,7,1,3,6],
[7,6,3,4,1,8,2,5,9]]

// solvd board 3
const solved3 =
[[1,5,2,4,8,9,3,7,6],
[7,3,9,2,5,6,8,4,1],
[4,6,8,3,7,1,2,9,5],
[3,8,7,1,2,4,6,5,9],
[5,9,1,7,6,3,4,2,8],
[2,4,6,8,9,5,7,1,3],
[9,1,4,6,3,7,5,8,2],
[6,2,5,9,4,8,1,3,7],
[8,7,3,5,1,2,9,6,4]]

function checkSudoko() {//function that checks the user solution
    let Sudoko = []//empty board
    if (boardNum==1) {//checks if the board shone is board 1
        Sudoko =solved1//inserts board 1 into sudoku
    }
    else if (boardNum==2) {//checks if the board shone is board 2
        Sudoko=solved2//inserts board 2 into sudoku
    }
    else if (boardNum==3) {//checks if the board shone is board 3
        Sudoko=solved3//inserts board 3 into sudoku
    }
    let boardIndex1 = 0;//counts index until it gets to 81
    let numbers = 0;//how many td the user fild
    let board = document.getElementsByClassName("td");//board gets the board the user has fild
    for (let i = 0; i < Sudoko.length; i++) {//function runs on the arr in solvd sudoku 
        for (let j = 0; j < Sudoko[i].length; j++) {//runs on j inside i
            if (board[boardIndex1].innerHTML == Sudoko[i][j]) {//compairing the values betwin the coard td at a time (if correct num)
                numbers++//ad count for how many times the user have put a correct num
            }
            boardIndex1++;//+index for check

        }
    }
    if (numbers == 81) {//if amount of eqwal to solved board is 81
        document.getElementById('div3').style.display = 'none';//returns us to level chose
        document.getElementById('div2').style.display = 'block';
        alert("You Won");//tels the user he won
    }
    else {//returns us to level chose
        document.getElementById('div3').style.display = 'none';
        document.getElementById('div2').style.display = 'block';
        alert("You Losser");// rels the ser he lost
    }

}