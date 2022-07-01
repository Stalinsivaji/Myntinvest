import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAfYv3FAFzZy9J0yd9R6M-WJPGx5BSUCUA",
    authDomain: "otp-app-demo-ddea4.firebaseapp.com",
    projectId: "otp-app-demo-ddea4",
    storageBucket: "otp-app-demo-ddea4.appspot.com",
    messagingSenderId: "1015997048509",
    appId: "1:1015997048509:web:b21ead7abb5edf0f3239d4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;