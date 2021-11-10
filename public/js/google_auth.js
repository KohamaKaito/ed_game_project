class GoogleAuth{

    constructor() {
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.db = firebase.firestore();
        this.drawLoginStatus();
    }


    login() {
        firebase.auth().signInWithPopup(this.provider)
            .then(result => {
                // ログインに成功したときの処理
                console.log('ログインしました。');
                app.stage.removeChild(loginScene);
                app.stage.addChild(titleScene);
                this.addUser();
            }).catch(error => {
            const signinError = `
        サインインエラー
        エラーメッセージ： ${error.message}
        エラーコード: ${error.code}
        `
            console.log(signinError);
        });
    }


    logout() {
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


    addUser(){
        (async () => {
            try {
                // (Cloud Firestoreのインスタンスを初期化してdbにセット)
                // console.log(firebase.auth().currentUser.email);
                const userRef = this.db.collection('users').doc(firebase.auth().currentUser.email);
                await userRef.set({
                    name: '新規ユーザー',
                    rate: '1000',
                })
            } catch (err) {
                console.log(`Error: ${JSON.stringify(err)}`)
            }
        })()
    }


    drawLoginStatus(){
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
}