import { firebaseAuth } from "src/boot/firebase";
import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const state ={
    loggedIn: false
}

const mutations = {
    setloggedIn(state , value) {
        state.loggedIn = value 
    }
}

const actions = {
    registerUser({} , payload) {
        createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    },
    loginUser({} ,payload) {
        signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
  .then((userCredential) => {
    // Signed in 

    // ...
  })
  .catch((error) => {
    console.log(error.message)
  });
    },
    handleAuthChange({commit}){
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              console.log(user.uid)
              commit('setloggedIn', true)
              // ...
            } else {
              commit('setloggedIn' , false)
            }
          });
    }
}


const getters = {

}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

