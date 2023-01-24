import * as VueRouter from 'vue-router';
import AddRecord from './pages/AddRecord.vue'
import ReadRecord from './pages/ReadRecord.vue'

const routes = [
    {
        path : '/',
        component: ReadRecord, 
    },
    {
        path : '/addrecord',
        component: AddRecord,
    }
]

export const router = VueRouter.createRouter({
    history : VueRouter.createWebHistory(),
    routes
})