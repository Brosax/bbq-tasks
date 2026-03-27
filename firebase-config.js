// Firebase Configuration
// BBQ Tasks - Real-time Database

const firebaseConfig = {
  apiKey: "AIzaSyCPsgUf2ap5-UlMedG3dkywXajNUJO1hFY",
  authDomain: "bbq-tasks.firebaseapp.com",
  databaseURL: "https://bbq-tasks-default-rtdb.firebaseio.com",
  projectId: "bbq-tasks",
  storageBucket: "bbq-tasks.firebasestorage.app",
  messagingSenderId: "633376305167",
  appId: "1:633376305167:web:c421a1d7de22c352b5f37a",
  measurementId: "G-5D3X37DM1N"
};

// 初始化Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 导出数据库引用供其他文件使用
window.db = database;
window.firebase = firebase;