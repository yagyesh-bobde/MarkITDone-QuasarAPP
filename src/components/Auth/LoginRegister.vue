<template>
<form @submit.prevent="submitForm">
  <div class="row q-mb-md">
    <q-banner class="bg-grey-3">
        <template v-slot:avatar>
            <q-icon 
            name="account_circle" 
            color="primary" />
        </template>
        {{ tab | titleCase }} to access your Tasks from anywhere.
        </q-banner>
    </div>
    <div class="col q-mb-md">
    <q-input 
    bottom-slots 
    lazy-rules
    v-model="formData.email" 
    label="Email"
    :rules="[ val => isValidEmailAddress(val) || 'Enter a Valid email']" 
    hint="example@domain.com"
    ref='email'>
        <template v-slot:append>
          <q-icon 
          name="close" 
          @click="formData.email = ''" 
          class="cursor-pointer" />
        </template>
    </q-input>
    </div>
    <div class="col q-mb-md">
    <q-input
    bottom-slots 
    v-model="formData.password" 
    label="Password" 
    lazy-rules
    :rules="[ val => val.length >=6 || 'Password should at least be 6 characters long']"
    type="password"
    hint='at least 6 characters long'
    ref='password'>
        <template v-slot:append>
          <q-icon 
          name="close" 
          @click="formData.password = ''" 
          class="cursor-pointer" />
        </template>
    </q-input>
    </div>
    <div class="row">
     <q-space/>
        <q-btn 
        color="primary" 
        :label='tab'
        type='submit' />
    </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['tab'],
    data() {
        return{
            formData: {
                email:'',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth' , ['registerUser' , 'loginUser']),
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()
            if(!this.$refs.email.hasError && !this.$refs.password.hasError){
                if (this.tab == 'login'){
                    this.loginUser(this.formData)
                }
                else if (this.tab == 'register') {
                    this.registerUser(this.formData)
                }
            }
        },
        isValidEmailAddress(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>

</style>