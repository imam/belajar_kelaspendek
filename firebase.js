// Initialize Firebase
firebase.initializeApp(require('./firebaseConfig'));

const db = firebase.firestore();

module.exports = {
	db
}
