import Axios from 'axios'
function getStoreDataList() {
    return Axios.get('shopping/market/initNew.node?cityId=2552&storeId=1065&_=1578477879413').then(res => {
        console.log(res.data.data, "store的数据")
        return {
            type: 'GET_StoreDataList',
            payload: res.data.data
        }
    })
}

export default getStoreDataList