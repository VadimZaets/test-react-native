import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Appsflyer from 'react-native-appsflyer';


// import OneSignal from 'react-native-onesignal';

// OneSignal.setAppId('YOUR_ONESIGNAL_APP_ID');

// OneSignal.setNotificationOpenedHandler((openedEvent) => {
//   console.log(openedEvent);
// });

// OneSignal.setNotificationReceivedHandler((receivedEvent) => {
//   console.log(receivedEvent);
// });

// firebase знаходиться у файлі firebaseConfig

// Appsflyer.initSdk(
// 	{
// 	  devKey: 'YOUR_APPSFLYER_DEV_KEY', 
// 	  isDebug: true, 
// 	},
// 	(result) => {
// 	  console.log(result);
// 	},
// 	(error) => {
// 	  console.error(error);
// 	}
//  );


	

 

AppRegistry.registerComponent(appName, () => App);
