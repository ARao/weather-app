import Home from './container/home';
import History from './container/history';
import Detail from './container/detail'

export default  {
    home : {
        path: "/",
        component : Home
    },
    history : {
        path: "/history",
        component : History
    },
    detail : {
        path: "/detail/:id",
        component : Detail
    }
}