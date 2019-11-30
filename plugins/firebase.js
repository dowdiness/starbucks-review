import firebase from 'firebase'

// Your web app's Firebase configuration
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBnEo2Xsb_0hlZanuJLag3MkY6_61kIh9s',
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  })
}

export default firebase
