import { LocalStorage } from "quasar"

const state ={
    settings: {
        show12hourformat: false,
        showTasksInOneList: false,
        
    }
}

const mutations = {
    setShow12hourformat(state, value) {
        state.settings.show12hourformat = value
    },
    setshowTasksInOneList(state, value) {
        state.settings.showTasksInOneList = value
    },
    setSettings(state , settings) {
        Object.assign(state.settings , settings)
    }
}

const actions = {
    setShow12hourformat({commit , dispatch} , value) {
        commit('setShow12hourformat' , value)
        dispatch('saveSettings')
    },
    setshowTasksInOneList({commit , dispatch} , value) {
        commit('setshowTasksInOneList' , value)
        dispatch('saveSettings')
    },
    saveSettings({ state }) {
        LocalStorage.set('settings' , state.settings)
    },
    getSettings({commit}) {
        let settings = LocalStorage.getItem('settings')
        if (settings) {
            commit('setSettings' , settings)
        }
    }
}


const getters = {
    settings : state => {
        return state.settings
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

