<template>
    <q-select 
        outlined 
        rounded
        class='col'
        v-model="SortBy" 
        :options="options"
        emit-value
        map-options
        label="Sort by">
    </q-select>

</template>

<script>
import { mapState , mapActions} from 'vuex'

export default {
  data () {
    return {
      options: [
        {
            label: 'Name',
            value: 'name'
        },{
            label: 'Date',
            value: 'dueDate'
        },{
            label: 'Time',
            value: 'dueTime'
        }
      ]
    }
  },
  computed: {
      ...mapState('tasks' , ['sort']),
      SortBy: {
          get() {
              return this.sort
          },
          set(value){
              this.setSort(value)
          }
      }
  },
  methods: {
      ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>
 .q-select {
     flex: 0 0 112px;
 }
</style>