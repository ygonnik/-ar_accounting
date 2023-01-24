import {createStore} from 'vuex';
import {carRecordModule} from '@/store/carRecordModule'

export default createStore({
    modules: {
        carRecord: carRecordModule
    }
})