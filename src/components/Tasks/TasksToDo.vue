<template>
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut absolute-top"
>
    <div>
    <list-header
    v-if = '!this.settings.showTasksInOneList'
    bgColor="bg-red-11"
    >ToDo</list-header> 
     <q-list 
        separator
        bordered>

        <task 
        v-for = '(task , key) in tasksToDo'
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
    props: ['tasksToDo'],
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