<template>
  <q-page>
    <q-list bordered padding>

      <q-separator spaced />
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>
            Show 12 Hour Time Format
            </q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle 
          color="blue" 
          v-model="show12hourformat" 
          val="battery" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>
            Show Tasks In One List
            </q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle 
          color="blue" 
          v-model="showTasksInOneList" 
          val="battery" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding>

      <q-separator spaced />
      <q-item-label header>More</q-item-label>

      <q-item 
      to='/settings/help'
      tag="label" 
      v-ripple>
        <q-item-section>
          <q-item-label>
            Help
            </q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon 
          name='chevron_right'/>
        </q-item-section>
      </q-item>

      <q-item 
      @click= 'visitOurWebsite'
      tag="label" 
      v-ripple>
        <q-item-section>
          <q-item-label>
            Visit Our Website
            </q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon 
          name='chevron_right'/>
        </q-item-section>
      </q-item>

      <q-item 
      @click= 'emailUs'
      tag="label" 
      v-ripple>
        <q-item-section>
          <q-item-label>
            Email Us
            </q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon 
          name='chevron_right'/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return{

    }
  },
  computed: {
    ...mapGetters('settings' , ['settings']),
    show12hourformat: {
      get() {
        return this.settings.show12hourformat
      },
      set(value) {
        this.setShow12hourformat(value)
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList
      },
      set(value) {
        this.setshowTasksInOneList(value)
      }
    }
  },
  methods: {
    ...mapActions('settings' , ['setShow12hourformat' , 'setshowTasksInOneList']),
    visitOurWebsite() {
      openURL('https://www.google.com')
    },
    emailUs() {
      window.location.href = 'mailto:hello@awesometodo.com?subject=Awesome To Do feedback '
    }
  }
}
</script>

<style >

</style>