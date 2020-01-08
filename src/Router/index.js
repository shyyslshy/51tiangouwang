import { HashRouter, Route, Redirect,Switch } from 'react-router-dom'
import React from 'react'
import App from '@/App'
import Store from '@/Views/Store/Store'
import Goodgoods from '@/Views/Goodgoods/Goodgoods'
import Shopping from '@/Views/Shopping/Shopping'
import Overseas from '@/Views/Overseas/Overseas'
import Center from '@/Views/Center/Center'
import Timelimited from '../Views/Shopping/Timelimited/Timelimited'
import productListDetail from '../Views/Shopping/productListDetail/productListDetail'
// 用了@符号
// import Error from '@/Components/Error/Error'
const router = <HashRouter>
    <App>
        <Switch>
            {/* render的写法是能写二级嵌套路由 */}
            <Route path="/store" render = {() => <Store/>}></Route>
            <Route path="/goodgoods" component={Goodgoods}></Route>
            <Route path="/shopping" component={Shopping} exact></Route>
            <Route path="/overseas" component={Overseas}></Route>
            <Route path="/center" component={Center}></Route>

            {/* 动态路由,被Route包裹的组件才有history,match等属性 */}
            <Route path="/shopping/:shoppingTimeLimited" component = {Timelimited}></Route>
            <Route path="/product/:productListDetail" component = {productListDetail}></Route>

            <Redirect from="/" to="/shopping" exact/>
            {/* <Redirect from="/" to="/error" component={Error}/> */}
        </Switch> 
    </App>
</HashRouter>
export default router