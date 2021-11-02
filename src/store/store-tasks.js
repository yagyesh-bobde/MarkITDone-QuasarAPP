import Vue from 'vue'
import { uid } from 'quasar'

const state ={

    tasks: {
        'ID1': {
        name:'Go Fetch' ,
        completed: false,
            dueDate: '2020/10/15',
            dueTime: '16:00'
        },
        'ID2': {
        name: 'Go buy bananas',
        completed: false, 
            dueDate: '2020/11/11',
            dueTime: '14:30'
        },
        'ID3': {
            name:'Go to the grocerry store' ,
            completed: false,
            dueDate: '2020/10/11',
            dueTime: '15:20'
        }
        // 'ID4': {
        //     name:'Go Fetch' ,
        //     completed: false,
        //     dueDate: '2020/10/15',
        //     dueTime: '16:00'
        // },
        // 'ID5': {
        //     name: 'Go buy bananas',
        //     completed: false, 
        //     dueDate: '2020/11/11',
        //     dueTime: '14:30'
        // },
        // 'ID6': {
        //     name:'Go to the grocerry store' ,
        //     completed: false,
        //     dueDate: '2020/10/11',
        //     dueTime: '15:20'
        // },
        // 'ID7': {
        //     name:'Go Fetch' ,
        //     completed: false,
        //     dueDate: '2020/10/15',
        //     dueTime: '16:00'
        // },
        // 'ID8': {
        //     name: 'Go buy bananas',
        //     completed: false, 
        //     dueDate: '2020/11/11',
        //     dueTime: '14:30'
        // },
        // 'ID9': {
        //     name:'Go to the grocerry store' ,
        //     completed: false,
        //     dueDate: '2020/10/11',
        //     dueTime: '15:20'
        // },
        // 'ID10': {
        //     name:'Go Fetch' ,
        //     completed: false,
        //     dueDate: '2020/10/15',
        //     dueTime: '16:00'
        // },
        // 'ID11': {
        //     name: 'Go buy bananas',
        //     completed: false, 
        //     dueDate: '2020/11/11',
        //     dueTime: '14:30'
        // },
        // 'ID12': {
        //     name:'Go to the grocerry store' ,
        //     completed: false,
        //     dueDate: '2020/10/11',
        //     dueTime: '15:20'
        // },
        // 'ID13': {
        //     name:'Go Fetch' ,
        //     completed: false,
        //     dueDate: '2020/10/15',
        //     dueTime: '16:00'
        // },
        // 'ID14': {
        //     name: 'Go buy bananas',
        //     completed: false, 
        //     dueDate: '2020/11/11',
        //     dueTime: '14:30'
        // },
        // 'ID15': {
        //     name:'Go to the grocerry store' ,
        //     completed: false,
        //     dueDate: '2020/10/11',
        //     dueTime: '15:20'
        // }
    },
    search: "",
    sort: 'name'
}

const mutations = {
    updateTask(state , payload) {
         Object.assign(state.tasks[payload.id] , payload.updates)
    },
    deleteTask(state , id) {
        Vue.delete(state.tasks , id)
    },
    addTask(state , payload) {
        Vue.set(state.tasks , payload.id , payload.task)
    },
    setSearch(state , value) {
        state.search = value
    },
    setSort(state , value) {
        state.sort = value
    }
}

const actions = {
    updateTask({ commit } , payload) {
        commit('updateTask' , payload)
    },
    deleteTask({commit} , id) {
        commit('deleteTask' , id)
    },
    addTask({commit} , task) {
        let taskid = uid()
        let payload = {
            id : taskid , 
            task: task
        }
        commit('addTask' , payload )
    },
    setSearch({commit} , value) {
        commit('setSearch' , value)
    },
    setSort({commit} , value) {
        commit('setSort' , value)
    }
}


const getters = {
    tasksSorted:(state) => {
        let tasksSorted = {},
            keysOrdered = Object.keys(state.tasks)

        keysOrdered.sort((a,b) => {
            let taskA = state.tasks[a][state.sort].toLowerCase(),
                taskB = state.tasks[b][state.sort].toLowerCase()
            if(taskA>taskB) return 1
            else if (taskA<taskB) return -1
            else return 0
        })

        keysOrdered.forEach(function(key){
            let task = state.tasks[key]
            tasksSorted[key] = task
        })
        return tasksSorted
    },
    tasksFiltered:(state , getters) => {
        let tasksFiltered = {},
            tasksSorted = getters.tasksSorted
        if (state.search) {
            Object.keys(tasksSorted).forEach(function(key) {
                let task = tasksSorted[key],
                    taskNamelowercase=task.name.toLowerCase(),
                    searchLowercase = state.search.toLowerCase()

                if (taskNamelowercase.includes(searchLowercase)){
                    tasksFiltered[key]=task
                }
            })
            return tasksFiltered
        }
        else{ 
        return tasksSorted
        }
    },
    tasksToDo: (state,getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks= {}
        Object.keys(tasksFiltered).forEach(function(key){
            let task = tasksFiltered[key]
            if (!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state,getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks= {}
        Object.keys(tasksFiltered).forEach(function(key){
            let task = tasksFiltered[key]
            if (task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

