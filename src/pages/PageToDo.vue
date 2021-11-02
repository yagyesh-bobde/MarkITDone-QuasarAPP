<template>
  <q-page >
    <div class="q-pa-md absolute full-width full-height column">
  <div class="row q-mb-lg">
    <search class="q-mr-md"></search>
      <sort></sort>
  </div>

  <p v-if='search && !Object.keys(tasksToDo).length && !Object.keys(tasksCompleted).length'>No search results.</p>


    <q-scroll-area class="q-scroll-area-tasks">
    
    <no-tasks 
    v-if='!Object.keys(tasksToDo).length 
    && !search && !this.settings.showTasksInOneList'
    @showAddTask='showAddTask=true'></no-tasks>
    
    <tasks-to-do 
    v-if='Object.keys(tasksToDo).length'
    :tasksToDo="tasksToDo"/>
    
    <tasks-completed 
    class="q-mb-xs"
    v-if='Object.keys(tasksCompleted).length'
    :tasksCompleted='tasksCompleted'/>
    </q-scroll-area>

    <div 
    class="absolute-bottom 
    text-center q-mb-lg
    no-pointer-events">
    <q-btn
      round
      class="all-pointer-events"
      @click="showAddTask=true"
      color="primary"
      size="24px"
      icon="add"
    />
    </div>
      </div>
       
    <q-dialog v-model="showAddTask">
      <add-task @close = "showAddTask=false"/>
    </q-dialog>

  </q-page>
</template>

<script>
import AddTask from 'components/Tasks/Modals/AddTask.vue'
import { mapGetters,mapState } from "vuex"
import TasksToDo from 'src/components/Tasks/TasksToDo.vue'
import TasksCompleted from 'src/components/Tasks/TasksCompleted.vue'
import NoTasks from 'src/components/Tasks/NoTasks.vue'
import Search from 'src/components/Tasks/tools/Search.vue'
import Sort from 'src/components/Tasks/tools/Sort.vue'

export default {
  data() {
    return{
      showAddTask:false
    }
  },
  computed: {
    ...mapGetters('tasks' , ['tasksToDo' , 'tasksCompleted']),
    ...mapState('tasks' , ['search']),
    ...mapGetters('settings' , ['settings'])
  },

  components: {
    AddTask,
    'tasks-to-do': require('components/Tasks/TasksToDo.vue').default,
    TasksToDo,
    TasksCompleted,
    NoTasks,
    Search,
    Sort
  }
}
</script>

<style >
 .q-scroll-area-tasks {
   display: flex;
   flex-grow: 1;
 }
</style>