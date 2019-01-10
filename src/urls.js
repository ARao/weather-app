import Home from './components/home';
import History from './components/history';
import Detail from './components/detail'

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