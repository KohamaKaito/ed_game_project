// ログイン画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ

// login_model.js で定義
// login()・・・googleAuthでログインする関数
// fromLoginSceneToGameScene()・・・画面遷移する関数


const loginScene = new PIXI.Container();


// タイトルロゴの配置
let titleLogo = new PIXI.Sprite(new PIXI.Texture.from("images/titleLogo.png"));
titleLogo.width = gameWindowWidth/2;
titleLogo.height = titleLogo.width/2;
titleLogo.x = (gameWindowWidth-titleLogo.width)/2;
titleLogo.y = gameWindowHeight/8;
loginScene.addChild(titleLogo);


// ログインボタンを配置
let loginButton = new PIXI.Text("ログイン");
loginButton.interactive = true;
loginButton.buttonMode = true;
loginButton.style.fontSize = gameWindowWidth/30;
loginButton.x = gameWindowWidth/2 - loginButton.width/2;
loginButton.y = gameWindowHeight/1.6;
loginButton.on('pointertap', login);
loginScene.addChild(loginButton);


// ゲームプレイボタンを配置
let gamePlayButton = new PIXI.Text("ゲームをプレイ（開発者用）");
gamePlayButton.interactive = true;
gamePlayButton.buttonMode = true;
gamePlayButton.style.fontSize = gameWindowWidth/30;
gamePlayButton.x = gameWindowWidth/2 - gamePlayButton.width/2;
gamePlayButton.y = gameWindowHeight/1.4;
gamePlayButton.on('pointertap', fromLoginSceneToGameScene);
loginScene.addChild(gamePlayButton);
app.stage.addChild(loginScene);
