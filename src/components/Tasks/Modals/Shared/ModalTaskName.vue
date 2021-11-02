<template>
    <div class="row q-mb-md">
        <q-input 
            outlined 
            class="col"
            @input="$emit('update:name' , $event)"
            :rules="[val => !!val || 'Field is required']"
            :value="name" 
            label="Task Name "
            ref='name'
            v-select-all
            autofocus >
        <template v-slot:append>
            <q-icon
            v-if='name'
            name="close" 
            @click.stop="$emit('update:name','')" 
            class="cursor-pointer" />
        </template>                
        </q-input>     
    </div>
</template>

<script>
import { selectAll } from 'src/directives/directives-select-all.js'

export default {
    props: ['name'],
    directives: {
        selectAll
    }
}
</script>

<style>

</style>