<template>
    <q-card>
        <modal-header>Edit Task</modal-header>
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
    props: ['task' , 'id'],
    data() {
        return{
            taskToAdd: {
            }
        }
    },
    methods: {
        ...mapActions('tasks' , ['updateTask']),
        submitTask() {
            this.updateTask({
                id: this.id , 
                updates: this.taskToAdd
            })
            this.$emit('close')
            
        }   
    },
    components: {
        'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader.vue').default,

    },
    mounted() {
        this.taskToAdd= Object.assign({} , this.task)
    }
}
</script>

