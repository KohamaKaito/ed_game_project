// ゲームモデル


// ボードを表す２次元配列
// 誰も置いてない場所 = 0
// player1 = 1, player2 = 2
let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]


// 誰のターンかを表す変数
// player1 = 1, player2 = 2
let activePlayer = 1;


// ターンを切り替える関数
// 入力 1 or 2
// 出力 無し
function switchPlayer(){
    if(activePlayer == 1){
        console.log('ターンを切り替えています・・・');
        activePlayer = 2;
    }
    else if(activePlayer == 2){
        console.log('ターンを切り替えています・・・');
        activePlayer = 1;
    }
}


// 勝者を判定する関数
// 入力 board(2次元配列)
// 出力 0 or 1 or 2
function judge(low, column, playerNumber){
    if(playerNumber == 1){
        
    }
    else if(playerNumber == 2){

    }
    else{
        return 0; 
    }
}


// 列番号を指定してboardを書き換える関数
// 入力 列番号 0~6
// 出力 無し

function insertCoin1(){
    if(board[5][0] == 0){
        if(activePlayer == 1){
            board[5][0] = 1;
            judge(5,0,1)
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][0] == 0){
        if(activePlayer == 1){
            board[4][0] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][0] == 0){
        if(activePlayer == 1){
            board[3][0] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][0] == 0){
        if(activePlayer == 1){
            board[2][0] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][0] == 0){
        if(activePlayer == 1){
            board[1][0] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][0] == 0){
        if(activePlayer == 1){
            board[0][0] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][0] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin2(){
    if(board[5][1] == 0){
        if(activePlayer == 1){
            board[5][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][1] == 0){
        if(activePlayer == 1){
            board[4][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][1] == 0){
        if(activePlayer == 1){
            board[3][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][1] == 0){
        if(activePlayer == 1){
            board[2][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][1] == 0){
        if(activePlayer == 1){
            board[1][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][1] == 0){
        if(activePlayer == 1){
            board[0][1] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][1] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin3(){
    if(board[5][2] == 0){
        if(activePlayer == 1){
            board[5][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][2] == 0){
        if(activePlayer == 1){
            board[4][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][2] == 0){
        if(activePlayer == 1){
            board[3][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][2] == 0){
        if(activePlayer == 1){
            board[2][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][2] == 0){
        if(activePlayer == 1){
            board[1][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][2] == 0){
        if(activePlayer == 1){
            board[0][2] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][2] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin4(){
    if(board[5][3] == 0){
        if(activePlayer == 1){
            board[5][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][3] == 0){
        if(activePlayer == 1){
            board[4][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][3] == 0){
        if(activePlayer == 1){
            board[3][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][3] == 0){
        if(activePlayer == 1){
            board[2][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][3] == 0){
        if(activePlayer == 1){
            board[1][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][3] == 0){
        if(activePlayer == 1){
            board[0][3] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][3] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin5(){
    if(board[5][4] == 0){
        if(activePlayer == 1){
            board[5][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][4] == 0){
        if(activePlayer == 1){
            board[4][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][4] == 0){
        if(activePlayer == 1){
            board[3][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][4] == 0){
        if(activePlayer == 1){
            board[2][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][4] == 0){
        if(activePlayer == 1){
            board[1][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][4] == 0){
        if(activePlayer == 1){
            board[0][4] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][4] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin6(){
    if(board[5][5] == 0){
        if(activePlayer == 1){
            board[5][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][5] == 0){
        if(activePlayer == 1){
            board[4][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][5] == 0){
        if(activePlayer == 1){
            board[3][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][5] == 0){
        if(activePlayer == 1){
            board[2][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][5] == 0){
        if(activePlayer == 1){
            board[1][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][5] == 0){
        if(activePlayer == 1){
            board[0][5] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][5] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


function insertCoin7(){
    if(board[5][6] == 0){
        if(activePlayer == 1){
            board[5][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[5][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[4][6] == 0){
        if(activePlayer == 1){
            board[4][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[4][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[3][6] == 0){
        if(activePlayer == 1){
            board[3][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[3][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[2][6] == 0){
        if(activePlayer == 1){
            board[2][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[2][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[1][6] == 0){
        if(activePlayer == 1){
            board[1][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[1][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else if(board[0][6] == 0){
        if(activePlayer == 1){
            board[0][6] = 1;
            console.log(board);
        }
        else if(activePlayer == 2){
            board[0][6] = 2;
            console.log(board);
        }
        switchPlayer();
    }
    else{
        console.log("少しは頭使え")
    }
}


// ボードを初期化する関数
function resetBoard(){
    console.log('boardを初期化してます');
}


// ゲーム画面からタイトル画面へ画面遷移する関数
function fromGameSceneToTitleScene(){
    console.log('タイトル画面へ遷移してます');
}


