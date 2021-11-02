<template>
    <q-input 
    outlined
    @keyup.esc="searchfield=''"
    v-model="searchfield"
    label="Search" 
    class='col'
    v-select-all
    autofocus>
    <template v-slot:append>
        <q-icon 
        v-if="searchfield !== ''" 
        name="close" 
        @click="searchfield = ''" 
        class="cursor-pointer" />
        <q-icon name="search" />
    </template>
    </q-input>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { selectAll } from 'src/directives/directives-select-all'

export default {

    computed: {
        ...mapState('tasks' , ['search']),
        searchfield : {
            get() {
                return this.search
            },
            set(value) {
                this.setSearch(value)
            }
        }
      },
    methods: {
        ...mapActions('tasks' , ['setSearch'])
    },
    directives: {
        selectAll
    }
}
</script>

<style>

</style>