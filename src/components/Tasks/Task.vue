<template>
    <q-item 
      @click="updateTask({id: id , updates: {completed: !task.completed}})"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      v-touch-hold:1000.mouse="showEditModal"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
          :class="{'text-strikethrough': task.completed }"
          v-html="$options.filters.searchHighlight(task.name , search)">
            {{ task.name }}
            </q-item-label>
        </q-item-section>
        
        <q-item-section 
        v-if='task.dueDate'
        side>
          <div class="row">   
            <div class="column justify-center">
            <q-icon 
            size="18px"
            class="q-mr-xs"
            name='event'/>
            </div>

            <div 
            class="column">
            <q-item-label 
            class="row justify-end"
            caption>
            {{ task.dueDate | niceDate }}
            </q-item-label>
            <q-item-label
            class="row justify-end">
              <small>{{ taskdueTime }}</small>
            </q-item-label>
            </div>
          </div>
        </q-item-section>

    <q-item-section side>
      <div class="row">
      <q-btn 
        @click.stop ="showEditModal"
        round 
        flat
        dense
        color="" 
        icon="edit" />
      <q-btn 
        @click.stop ="promptToDelete(id)"
        round 
        flat
        dense
        color="red" 
        icon="delete" />
      </div>
    </q-item-section>
      <q-dialog v-model="showEditTask">
        <edit-task 
        :task='task'
        :id='id'
        @close = "showEditTask= false"/>
      </q-dialog>
      </q-item>
</template>

<script>
import {date} from  'quasar'
 import { mapActions, mapState } from 'vuex'
 import EditTask from 'components/Tasks/Modals/EditTask.vue'

export default {
    data() {
      return {
        showEditTask: false
      }
    },
    props: ['task' ,'id'] ,
    methods: {
      ...mapActions('tasks' , ['updateTask' , 'deleteTask']) ,
      promptToDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Would you like to Delete the Task ?',
          ok : {
            push:true
          },
          cancel: {
            color: "negative"
          }
      }).onOk(() => {
        this.deleteTask(id)
      })
      },
      showEditModal() {
        this.showEditTask=true
      }
    },
    computed: {
      ...mapState('tasks' , ['search']),
      ...mapState('settings' , ['settings']),
      taskdueTime() {
        if (this.settings.show12hourformat) {
          return date.formatDate(this.task.dueDate + ' '+this.task.dueTime , 'h:mm A')
        }
        return this.task.dueTime
      }
    },
    components: {
      EditTask
    },
    filters: {
        searchHighlight(value , search) {
        if (search) {
          let searchRegEx = new RegExp(search , 'ig')
          return value.replace(searchRegEx , (match)=>{ 
            return "<span class='bg-yellow-4'>"+match+"</span>"
            })
        }
        return value
      },
        niceDate(value) {
            return date.formatDate(value, 'MMM DD');
          }
    }
}
</script>

<style >

</style>
