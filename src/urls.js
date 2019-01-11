import Home from './container/home';
import History from './container/history';
import Detail from './container/detail'
import Error from './container/error'

export default {
    home: {
        path: "/home",
        component: Home
    },
    history: {
        path: "/history",
        component: History
    },
    detail: {
        path: "/detail/:id",
        component: Detail
    },
    error: {
        path: "/error",
        component: Error
    }
}
