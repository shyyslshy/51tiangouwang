import { combineReducers } from 'redux'
import shoppingReducer from './Shopping/shoppingReducer'
import shoppinggoodsvideoReducer from './Shopping/ShoppingvideoReducer'
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
    shoppinggoodsvideoReducer
})

export default reducer
