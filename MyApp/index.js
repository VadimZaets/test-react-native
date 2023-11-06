import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Appsflyer from 'react-native-appsflyer';


import { useEffect } from 'react';
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
