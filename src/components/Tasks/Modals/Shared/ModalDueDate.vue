<template>
  <div class="row q-mb-md">
        <q-input  
        outlined 
        label="DueDate"
        :value="dueDate" 
        @input="$emit('update:dueDate' , $event)">
        <template v-slot:append>
         <q-icon
            v-if='dueDate'
            name="close" 
            @click="$emit('clear')" 
            class="cursor-pointer" />
        <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy 
            ref="qDateProxy" 
            transition-show="scale" 
            transition-hide="scale">
                <q-date 
                @input="$emit('update:dueDate' , $event)"
                :value="dueDate">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['dueDate']
}
</script>

<style>

</style>