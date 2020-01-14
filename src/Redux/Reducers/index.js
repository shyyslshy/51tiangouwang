import { combineReducers } from 'redux'
import shoppingReducer from './Shopping/shoppingReducer'
import GoodgoodsDataReducer from './Goodgoods/goodsGoodReducer'
import recommendReducer from './Goodgoods/goodsGoodReducer'
import storeReducer from './Store/StoreReducer'
import overSeasReducer from './Overseas/overseasReducer'
import DetailReducer from './Detail/DetailReducer'

const reducer = combineReducers({
    // shopping页面的总体经纪人
    shoppingReducer,
    GoodgoodsDataReducer,
    recommendReducer,
    storeReducer,
    overSeasReducer,
    DetailReducer
})

export default reducer
