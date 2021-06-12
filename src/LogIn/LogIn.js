import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './../firebase.config/firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';
import { userContext } from './../App';


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  document.title = 'Log in';

  const [newUser, setnewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: '',
    email: '',
    password: '',
    photo: ''

  })
  const [logInUser, setLogInUser] = useContext(userContext);

  const history = useHistory();

  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };


  const handleChange = (e) => {

    let isFieldValid = true;

    if (e.target.name === 'email') {

      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name === 'password') {
      const ispasswordvalid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = ispasswordvalid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {

    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLogInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          setUser(newUserInfo);

        });
    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLogInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  }



  const handleGoogleSigning = () => {

    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {

        const { email, displayName, photoURL } = result.user;
        const signInUser =
        {
          isSignIn: true,
          name: displayName,
          email: email,
          // password:'',
          photo: photoURL
        };
        setLogInUser(signInUser);
        history.replace(from);
      }).catch((error) => {
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        // The email of the user's account used.
        //var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;
        // ...
      });
  }

  const fb = new firebase.auth.FacebookAuthProvider();
  const handleFacebookSigning = () => {
    firebase
      .auth()
      .signInWithPopup(fb)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        //var credential = result.credential;

        //var user = result.user;

        const { email, displayName, photoURL } = result.user;
        const signInUser =
        {
          isSignIn: true,
          name: displayName,
          email: email,
          // password:'',
          photo: photoURL
        };
        setLogInUser(signInUser);
        history.replace(from);

      })
      .catch((error) => {
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        // The email of the user's account used.
        //var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;

        // ...
      });

  }


  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" onBlur={handleChange} name="name" id="" required placeholder="Your name" />} <br></br><br></br>
        <input type="text" onBlur={handleChange} name="email" id="" required placeholder="Your email" /> <br></br><br></br>
        <input type="password" onBlur={handleChange} name="password" id="" required placeholder="Your password" /><br></br><br></br>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
      </form>
      
      <p style={{ color: 'red' }}>{user.error}</p>

      <button className="toggleAction" onClick={() =>setnewUser(!newUser)}>{!newUser ? 'Don’t have an account? Create an account' : 'Already have an account? Login'}</button>
      {
        user.success && <p style={{ color: 'white' }}>user {newUser ? 'created' : 'log in '} successfully!</p>
      }
      <p className="deration">Or</p>
      <p className="signin" onClick={handleFacebookSigning}> Continue with Facebook</p>
      <p className="signin" onClick={handleGoogleSigning}>Continue with Google</p>
    </div>
  );
};

export default LogIn;