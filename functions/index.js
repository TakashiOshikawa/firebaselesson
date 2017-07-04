const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// original idでのユーザ追加
exports.addUser = functions.https.onRequest((req, res) => {
  // 追加するユーザの定義
  const user = {
    "authentication_id_1" : {
      "name": "test user",
      "introduction": "自己紹介です",
      "profile_image_path": "someimagepath"
    }
  };

  // .pushを使うと独自に付与されるidの下にauthentication_id_1が付くのでユーザ追加には不向き
  // メッセージなどには良いと思う
  admin.database().ref('/users').push(user).then(snapshot => {
    res.send(user);
  });
});

// firebase authで取得したuidでのユーザ追加/更新
// authentication_id_1を外部から渡された時に本人確認をどう行うか
// 追加時の結果はrealtimedatabase.pngで確認可能
exports.setUser = functions.https.onRequest((req, res) => {
  const user = {
    "authentication_id_1" : {
      "name": "test user",
      "introduction": "自己紹介です",
      "profile_image_path": "someimagepath"
    }
  };

  admin.database().ref('/users').set(user).then(() => {
    res.send(user);
  });
});


