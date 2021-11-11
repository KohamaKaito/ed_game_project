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
let activePlayer = 0;


// ターンを切り替える関数
// 入力 1 or 2
// 出力 無し
function switchPlayer(){
    console.log('ターンを切り替えています・・・');
}


// 勝者を判定する関数
// 入力 board(2次元配列)
// 出力 0 or 1 or 2
function judge(){
    console.log('４つ並んでいるか確認中・・・');
    return 0;
}


// 列番号を指定してboardを書き換える関数
// 入力 列番号 0~6
// 出力 無し
function insertCoin(){
    console.log('boardを書き換えています');
}


// ボードを初期化する関数
function resetBoard(){
    console.log('boardを初期化してます');
}


// ゲーム画面からタイトル画面へ画面遷移する関数
function fromGameSceneToTitleScene(){
    console.log('タイトル画面へ遷移してます');
}
