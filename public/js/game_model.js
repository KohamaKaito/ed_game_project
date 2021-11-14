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
function switchPlayer(){
    if(activePlayer == 1){
        // console.log('ターンを切り替えています・・・');
        activePlayer = 2;
    }
    else if(activePlayer == 2){
        // console.log('ターンを切り替えています・・・');
        activePlayer = 1;
    }
}


// 勝者を判定する関数
function judge(row, column, playerNumber){

}


// 列を指定してboardを書き換える関数
function insertCoin1(){
    for(let i=5; i>=0; i--){
        if(board[i][0] == 0){
            board[i][0] = activePlayer;
            drawCoin(i,0,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin2(){
    for(let i=5; i>=0; i--){
        if(board[i][1] == 0){
            board[i][1] = activePlayer;
            drawCoin(i,1,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin3(){
    for(let i=5; i>=0; i--){
        if(board[i][2] == 0){
            board[i][2] = activePlayer;
            drawCoin(i,2,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin4(){
    for(let i=5; i>=0; i--){
        if(board[i][3] == 0){
            board[i][3] = activePlayer;
            drawCoin(i,3,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin5(){
    for(let i=5; i>=0; i--){
        if(board[i][4] == 0){
            board[i][4] = activePlayer;
            drawCoin(i,4,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin6(){
    for(let i=5; i>=0; i--){
        if(board[i][5] == 0){
            board[i][5] = activePlayer;
            drawCoin(i,5,activePlayer);
            switchPlayer();
            break;
        }
    }
}
function insertCoin7(){
    for(let i=5; i>=0; i--){
        if(board[i][6] == 0){
            board[i][6] = activePlayer;
            drawCoin(i,6,activePlayer);
            switchPlayer();
            break;
        }
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


