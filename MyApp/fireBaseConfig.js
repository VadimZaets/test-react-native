import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyBGhNVWBjsNupwU7hGa1uBVBnBiwuDk3lw',
	projectId: 'test-react-native-dcdfe',
	storageBucket: 'test-react-native-dcdfe.appspot.com',
	databaseURL: "URL",
	storageBucket: "STORAGE",
	appId: '1:453063748660:android:bdadcee567b5207ba9ee61',
 };

 firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




 export { auth, db, storage };