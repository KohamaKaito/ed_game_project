// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();


// ボードを配置
let boardImage = new PIXI.Sprite(new PIXI.Texture.from("images/board.png"));
if(gameWindowWidth*0.6 > gameWindowHeight){
    // 横長の画面の場合
    boardImage.width = gameWindowHeight;
    boardImage.height = gameWindowHeight;
    boardImage.x = (gameWindowWidth*0.6 - boardImage.width)*0.6;
}
if(gameWindowWidth*0.6 <= gameWindowHeight){
    // 縦長の画面の場合
    boardImage.width = gameWindowHeight*0.6;
    boardImage.height = gameWindowHeight*0.6;
    boardImage.y = gameWindowHeight - boardImage.height;
    boardImage.x = (gameWindowWidth - boardImage.width)/2;
}
gameScene.addChild(boardImage);


// 赤いコインを配置
let coin1Image = new PIXI.Sprite(new PIXI.Texture.from("images/coin1.png"));
coin1Image.width = boardImage.width/7;
coin1Image.height = boardImage.width/7;
coin1Image.x = boardImage.x;
coin1Image.y = boardImage.y;
gameScene.addChild(coin1Image);


// 黄色いコインを配置
let coin2Image = new PIXI.Sprite(new PIXI.Texture.from("images/coin2.png"));
coin2Image.width = boardImage.width/7;
coin2Image.height = boardImage.width/7;
coin2Image.x = boardImage.x + coin2Image.width;
coin2Image.y = boardImage.y;
gameScene.addChild(coin2Image);
