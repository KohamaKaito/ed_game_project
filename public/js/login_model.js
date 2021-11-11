// ログインモデル


// googleAuthインスタンス生成
let provider = new firebase.auth.GoogleAuthProvider();
let db = firebase.firestore();
drawLoginStatus();


// ログイン画面からゲーム画面へ画面遷移する関数
function fromLoginSceneToGameScene(){
    app.stage.removeChild(loginScene);
    app.stage.addChild(gameScene);
}


// ログイン画面からゲーム画面へ画面遷移する関数
function fromLoginSceneToTitleScene(){
    app.stage.removeChild(loginScene);
    app.stage.addChild(titleScene);
}


// ゲームウィンドウ下にログイン状況を表示する関数
function drawLoginStatus(){
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            const signOutMessage = `
        <p>${user.displayName} さんでログイン中<\/p>
        <button class="btn btn-primary" type="submit"  onClick="logout()">サインアウト<\/button>
        `;
            document.getElementById('auth').innerHTML =  signOutMessage;
            console.log('ログインしています');

        } else {
            const signInMessage = `
          <button class="btn btn-primary" type="submit"  onClick="login()">サインイン<\/button>
          `;
            document.getElementById('auth').innerHTML = signInMessage;
        }
    });
}


// googleAuthでログインする関数
function login(){
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            // ログインに成功したときの処理
            console.log('ログインしました');
            fromLoginSceneToTitleScene();
            addUser();
        }).catch(error => {
        const signinError = `
        サインインエラー
        エラーメッセージ： ${error.message}
        エラーコード: ${error.code}
        `
        console.log(signinError);
    });
}


// ログアウトする関数
function logout(){
    firebase.auth().onAuthStateChanged(user => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('ログアウトしました');
                location.reload();
            })
            .catch((error) => {
                console.log(`ログアウト時にエラーが発生しました (${error})`);
            });
    });
}


// データベースにユーザーを追加する関数
function addUser(){
    (async () => {
        try {
            // (Cloud Firestoreのインスタンスを初期化してdbにセット)
            const userRef = db.collection('users').doc(firebase.auth().currentUser.email);
            await userRef.set({
                name: '新規ユーザー',
                rate: '1000',
            })
        } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`)
        }
    })()
}
