
# getting started guide

### Install firebase-tools

`npm install -g firebase-tools`

### Firebase login

`firebase login`

### Create cloud function project.

`firebase init function`

### Edit index.js

```index.js:js
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
      response.send("Hello from Firebase!");
});
```

### Deploy

`firebase deploy --only functions`

### Access

https://\<yourregionandprojectid\>.cloudfunctions.net/\<functionname\>

