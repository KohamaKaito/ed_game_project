// タイトル画面

// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ

// title_model.js で定義
// createRoom・・・部屋を作る関数
// searchRoom・・・部屋を探す関数


const titleScene = new PIXI.Container();


// タイトルの文字を配置
let titleText2 = new PIXI.Text("CONNECT4");
titleText2.style.fontSize = gameWindowWidth/20;
titleText2.x = gameWindowWidth/2 - titleText2.width/2;
titleText2.y = gameWindowHeight/4;
titleScene.addChild(titleText2);


// 部屋を作るボタンの配置
let createRoomButton = new PIXI.Text("部屋を作る");
createRoomButton.interactive = true;
createRoomButton.buttonMode = true;
createRoomButton.style.fontSize = gameWindowWidth/30;
createRoomButton.x = gameWindowWidth/2 - createRoomButton.width/2;
createRoomButton.y = gameWindowHeight/1.5;
createRoomButton.on('pointertap', createRoom);
titleScene.addChild(createRoomButton);


// 部屋を探すボタンの配置
let searchRoomButton = new PIXI.Text("部屋を探す");
searchRoomButton.interactive = true;
searchRoomButton.buttonMode = true;
searchRoomButton.style.fontSize = gameWindowWidth/30;
searchRoomButton.x = gameWindowWidth/2 - searchRoomButton.width/2;
searchRoomButton.y = gameWindowHeight/1.35;
searchRoomButton.on('pointertap', searchRoom);
titleScene.addChild(searchRoomButton);
