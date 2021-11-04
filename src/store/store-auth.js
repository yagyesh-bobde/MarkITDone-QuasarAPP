import { firebaseAuth } from "src/boot/firebase";
import {  onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {signOut} from 'firebase/auth';
import { LocalStorage,Loading } from "quasar";
import { showError } from "src/functions/function-show-error";
import 'src/store/store-tasks'

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
        Loading.show()
        createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
  .then((userCredential) => {
  })
  .catch((error) => {
    showError(error.message)
  });
    },
    
    loginUser({} ,payload) {
        Loading.show()
        signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
  .then((userCredential) => {
  })
  .catch((error) => {
    showError(error.message)
  });
    },
    
    logOutUser({commit}) {
        signOut(firebaseAuth)
    },
    
    handleAuthChange({ commit , dispatch }){
        onAuthStateChanged(firebaseAuth, (user) => {
            Loading.hide()
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              commit('setloggedIn', true)
              LocalStorage.set('loggedIn',true)
              this.$router.push('/').catch(error => {})
              dispatch('tasks/fbreadData', null , { root: true})
            } else {
              commit('setloggedIn' , false)
              LocalStorage.set('loggedIn',false)
              this.$router.replace('/auth').catch(error => {})
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

