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
coin1Image.x = gameWindowWidth - 100;
coin1Image.y = boardImage.y;
gameScene.addChild(coin1Image);


// 黄色いコインを配置
let coin2Image = new PIXI.Sprite(new PIXI.Texture.from("images/coin2.png"));
coin2Image.width = boardImage.width/7;
coin2Image.height = boardImage.width/7;
coin2Image.x = gameWindowWidth - 100;//boardImage.x + coin2Image.width;
coin2Image.y = gameWindowHeight - 100//boardImage.y;
gameScene.addChild(coin2Image);


//セレクトボタン1の配置
let selectButtonImage1 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage1.interactive = true;
selectButtonImage1.buttonMode = true;
selectButtonImage1.width = boardImage.width/7;
selectButtonImage1.height = boardImage.width/7;
selectButtonImage1.x = boardImage.x;
selectButtonImage1.y = boardImage.y;
selectButtonImage1.on('pointertap', insertCoin1);
gameScene.addChild(selectButtonImage1);


//セレクトボタン2の配置
let selectButtonImage2 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage2.interactive = true;
selectButtonImage2.buttonMode = true;
selectButtonImage2.width = boardImage.width/7;
selectButtonImage2.height = boardImage.width/7;
selectButtonImage2.x = boardImage.x + selectButtonImage2.width;
selectButtonImage2.y = boardImage.y;
selectButtonImage2.on('pointertap', insertCoin2);
gameScene.addChild(selectButtonImage2);


//セレクトボタン3の配置
let selectButtonImage3 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage3.interactive = true;
selectButtonImage3.buttonMode = true;
selectButtonImage3.width = boardImage.width/7;
selectButtonImage3.height = boardImage.width/7;
selectButtonImage3.x = boardImage.x + selectButtonImage3.width * 2;
selectButtonImage3.y = boardImage.y;
selectButtonImage3.on('pointertap', insertCoin3);
gameScene.addChild(selectButtonImage3);


//セレクトボタン4の配置
let selectButtonImage4 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage4.interactive = true;
selectButtonImage4.buttonMode = true;
selectButtonImage4.width = boardImage.width/7;
selectButtonImage4.height = boardImage.width/7;
selectButtonImage4.x = boardImage.x + selectButtonImage4.width * 3;
selectButtonImage4.y = boardImage.y;
selectButtonImage4.on('pointertap', insertCoin4);
gameScene.addChild(selectButtonImage4);


//セレクトボタン5の配置
let selectButtonImage5 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage5.interactive = true;
selectButtonImage5.buttonMode = true;
selectButtonImage5.width = boardImage.width/7;
selectButtonImage5.height = boardImage.width/7;
selectButtonImage5.x = boardImage.x + selectButtonImage5.width * 4;
selectButtonImage5.y = boardImage.y;
selectButtonImage5.on('pointertap', insertCoin5);
gameScene.addChild(selectButtonImage5);


//セレクトボタン6の配置
let selectButtonImage6 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage6.interactive = true;
selectButtonImage6.buttonMode = true;
selectButtonImage6.width = boardImage.width/7;
selectButtonImage6.height = boardImage.width/7;
selectButtonImage6.x = boardImage.x + selectButtonImage5.width * 5;
selectButtonImage6.y = boardImage.y;
selectButtonImage6.on('pointertap', insertCoin6);
gameScene.addChild(selectButtonImage6);


//セレクトボタン7の配置
let selectButtonImage7 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage7.interactive = true;
selectButtonImage7.buttonMode = true;
selectButtonImage7.width = boardImage.width/7;
selectButtonImage7.height = boardImage.width/7;
selectButtonImage7.x = boardImage.x + selectButtonImage7.width * 6;
selectButtonImage7.y = boardImage.y;
selectButtonImage7.on('pointertap', insertCoin7);
gameScene.addChild(selectButtonImage7);