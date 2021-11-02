<template>
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
   <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      No Tasks To Do
      <template v-slot:action>
        <q-btn
        @click="$emit('showAddTask')" 
        color="primary" 
        label="Add Task" />
      </template>
    </q-banner>
</transition>
</template>

<script>
export default {

}
</script>

<style>

</style>