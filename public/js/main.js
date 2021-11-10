// game_window の設定---------------------------------
let gameWindow = document.getElementById("game_window");
let gameWindowWidth;
let gameWindowHeight;
gameWindowWidth = window.innerWidth * 0.6;
gameWindowHeight = window.innerHeight * 0.8;
let app = new PIXI.Application({
    width: gameWindowWidth,
    height: gameWindowHeight,
    backgroundColor: 0xFFFFFF,
});
gameWindow.appendChild(app.view);



// ログイン画面----------------------------------------
const loginScene = new PIXI.Container();

let titleText = new PIXI.Text("CONNECT4");
titleText.style.fontSize = gameWindowWidth/20;
titleText.x = gameWindowWidth/2 - titleText.width/2;
titleText.y = gameWindowHeight/4;
loginScene.addChild(titleText);

let loginButton = new PIXI.Text("ログイン");
loginButton.interactive = true;
loginButton.buttonMode = true;
loginButton.style.fontSize = gameWindowWidth/30;
loginButton.x = gameWindowWidth/2 - loginButton.width/2;
loginButton.y = gameWindowHeight/1.6;
loginButton.on('pointertap', login);
loginScene.addChild(loginButton);

let gamePlayButton = new PIXI.Text("ゲームをプレイ（開発者用）");
gamePlayButton.interactive = true;
gamePlayButton.buttonMode = true;
gamePlayButton.style.fontSize = gameWindowWidth/30;
gamePlayButton.x = gameWindowWidth/2 - gamePlayButton.width/2;
gamePlayButton.y = gameWindowHeight/1.4;
gamePlayButton.on('pointertap', toGameScene);
loginScene.addChild(gamePlayButton);
app.stage.addChild(loginScene);

function toGameScene(){
    console.log('ゲーム画面へ遷移します！');
}



// タイトル画面----------------------------------------
const titleScene = new PIXI.Container();

let titleText2 = new PIXI.Text("CONNECT4");
titleText2.style.fontSize = gameWindowWidth/20;
titleText2.x = gameWindowWidth/2 - titleText.width/2;
titleText2.y = gameWindowHeight/4;
titleScene.addChild(titleText2);

let createRoomButton = new PIXI.Text("部屋を作る");
createRoomButton.interactive = true;
createRoomButton.buttonMode = true;
createRoomButton.style.fontSize = gameWindowWidth/30;
createRoomButton.x = gameWindowWidth/2 - loginButton.width/2;
createRoomButton.y = gameWindowHeight/1.5;
createRoomButton.on('pointertap', createRoom);
titleScene.addChild(createRoomButton);

function createRoom(){
    console.log('部屋を作っています！')
}

let searchRoomButton = new PIXI.Text("部屋を探す");
searchRoomButton.interactive = true;
searchRoomButton.buttonMode = true;
searchRoomButton.style.fontSize = gameWindowWidth/30;
searchRoomButton.x = gameWindowWidth/2 - loginButton.width/2;
searchRoomButton.y = gameWindowHeight/1.35;
searchRoomButton.on('pointertap', searchRoom);
titleScene.addChild(searchRoomButton);

function searchRoom(){
    console.log('部屋を探しています！')
}



// googleAuthインスタンス生成---------------------------
let googleAuth = new GoogleAuth();
function login() {
    googleAuth.login();
}
function logout(){
    googleAuth.logout();
}

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------