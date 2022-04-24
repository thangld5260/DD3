import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCm17eiXEaSRnAsMXGYmwlELcXPETLdZh4',
  authDomain: 'quanlysach-f234d.firebaseapp.com',
  projectId: 'quanlysach-f234d',
  databaseURL: 'https://quanlysach-f234d-default-rtdb.firebaseio.com/',
  storageBucket: 'quanlysach-f234d.appspot.com',
  messagingSenderId: '66938153609',
  appId: '1:66938153609:web:d49dcb7af5192611643458',
  measurementId: 'G-JHC2GFR0ZG',
};

//  var firebaseConfig = {
//     apiKey: "AIzaSyB2gGJJ3V49jhckaMASQqTdbo9Te3TpDps",
//     authDomain: "quanlythuvien-2517d.firebaseapp.com",
//     projectId: "quanlythuvien-2517d",
//     storageBucket: "quanlythuvien-2517d.appspot.com",
//      databaseURL: "https://quanlysach-f234d-default-rtdb.firebaseio.com/",
//     messagingSenderId: "124945598602",
//     appId: "1:124945598602:web:979de43a9a8afd396dc573",
//     measurementId: "G-8VVBCGXWEP"
//   };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
