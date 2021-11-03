<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated >
      <q-toolbar>
        <q-toolbar-title
        class= "absolute-center text-strikethrough">
          DONE
        </q-toolbar-title>
      
      <q-btn 
      v-if='!this.loggedIn'
      flat
      to='/auth'
      class="absolute-right"
      icon-right="account_circle" 
      label="Log In" />
      <q-btn 
      v-else
      flat
      class="absolute-right"
      icon-right="account_circle" 
      label="Logout" />

      </q-toolbar>
    </q-header>
          
     <q-footer>
      <q-tabs>
        <q-route-tab 
          v-for='nav in navs'
          :key='nav.title'
          :to='nav.link'
          :icon="nav.icon" 
          :label="nav.title" />
       </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      :breakpoint="767"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        
        <q-item
        v-for='nav in navs'
        :to="nav.link"
        :key='nav.title'
        class='text-grey-4'
        exact
        clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
        <q-item-section>
          <q-item-label>{{ nav.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('auth' , ['loggedIn'])
  },
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
      navs : [
                  {
                    title: 'ToDo',
                    caption: 'quasar.dev',
                    icon: 'list',
                    link: '/'
                  },
                  {
                    title: 'Settings',
                    caption: 'github.com/quasarframework',
                    icon: 'settings',
                    link: '/settings'
                  },
              ]   
    }
  }
}
</script>

<style>
 @media screen and (min-width: 753px) {
  .q-footer {
    display: none;
  }
}
 .q-drawer .q-router--exact-active {
     color: white !important;
   }
 
</style>