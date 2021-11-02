import ModalHeader from 'components/Tasks/Modals/Shared/ModalHeader.vue'
import ModalTaskName from 'components/Tasks/Modals/Shared/ModalTaskName.vue'
import ModalDueDate from 'components/Tasks/Modals/Shared/ModalDueDate.vue'
import ModalDueTime from 'components/Tasks/Modals/Shared/ModalDueTime.vue'
import ModalButton from 'components/Tasks/Modals/Shared/ModalButton.vue'

export default {
    methods: {
        submitForm() {
            this.$refs.ModalTaskName.$refs.name.validate()
            if (!this.$refs.ModalTaskName.$refs.name.hasError){
                this.submitTask()
            } 
        },
        clearDueDate() {
            this.taskToAdd.dueDate=''
            this.taskToAdd.dueTime=''
        }    
    },
    components: {
        'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        ModalTaskName,
        ModalDueDate,
        ModalDueTime,
        ModalButton
    }
}
