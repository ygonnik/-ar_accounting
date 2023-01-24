export const carRecordModule = {
    state: () => ({
        records: [
            {id: 1, model: 'Supra', number: 'м399рм72rus', color:'Черный', comment:'Не бита.'},
            {id: 2, model: 'Miata', number: 'к311тк72rus', color:'Черный', comment:'Не бита.'},
            {id: 3, model: 'S2000', number: 'с399ос72rus', color:'Черный', comment:'Не бита.'}
        ]
    }),
    mutations: {
        setRecords(state, payload) {
            state.records = payload
        },
        pushRecord(state, payload) {
            state.records.push(payload)
        }
    },
    getters: {
        getRecords(state) {
            return state.records
        }
    },
    actions: {
        fetchRecords(context) {
            this.axios.get('').then(response => context.commit('setRecords', response))
        }
    }
}