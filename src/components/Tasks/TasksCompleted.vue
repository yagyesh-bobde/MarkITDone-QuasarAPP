<template>
  <transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
>  
    <div 
    :class="{'q-mt-lg': !this.settings.showTasksInOneList}">
    
    <list-header
    v-if='!this.settings.showTasksInOneList'
    bgColor='bg-green-5'
    >Completed</list-header>
    
    <q-list 
    separator
    bordered>

        <task 
        v-for = '(task , key) in tasksCompleted'
        :key="key"
        :task='task'
        :id = 'key'/>
    </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from 'components/Tasks/Task.vue'
import ListHeader from './Modals/Shared/ListHeader.vue'

export default {
    props: ['tasksCompleted'],
    components: {
        'task' : require('components/Tasks/Task.vue').default,
        Task,
        ListHeader
    },
    computed: {
      ...mapGetters('settings' , ['settings'])
    }
}
</script>

<style>

</style>