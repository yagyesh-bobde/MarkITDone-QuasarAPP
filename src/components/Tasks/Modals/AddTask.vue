<template>
    <q-card>
        <modal-header>Add Task</modal-header>
    <form @submit.prevent="submitForm">
         <q-card-section class="q-pt-none">
            
            <modal-task-name 
            :name.sync='taskToAdd .name'
            ref='ModalTaskName'/>

            <modal-due-date 
            @clear= 'clearDueDate'
            :dueDate.sync="taskToAdd.dueDate"/>

             <modal-due-time 
             :dueTime.sync="taskToAdd.dueTime"
             v-if='taskToAdd.dueDate'/>   
            </q-card-section>

            <modal-button />
        </form>
    </q-card>
</template>

<script>
import {mapActions} from 'vuex'
import MixinAddEditTask from 'src/Mixins/mixin-add-edit-task'

export default {
    mixins: [MixinAddEditTask],
    data() {
        return{
            taskToAdd: {
                 name:'' ,
                dueDate: '',
                dueTime: '',
                completed: false
            }
        }
    },
    methods: {
        ...mapActions('tasks' , ['addTask']),
        submitForm() {
            this.$refs.ModalTaskName.$refs.name.validate()
            if (!this.$refs.ModalTaskName.$refs.name.hasError){
                this.submitTask()
            } 
        },
        submitTask() {
            this.addTask(this.taskToAdd)
            this.$emit('close')
        },
        clearDueDate() {
            this.taskToAdd.dueDate=''
            this.taskToAdd.dueTime=''
        }    
    },
    components: {
        'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader.vue').default,

    }
}
</script>

