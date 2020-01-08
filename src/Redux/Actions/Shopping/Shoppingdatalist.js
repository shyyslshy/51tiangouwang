import Axios from 'axios'
function getShoppingDataList () {
    return Axios.get('/shopping/home/init.node?storeId=209&cityId=2552&_=1578209941933').then(res => {
        console.log(res.data.data,'取数据')
        return {
            type: "getShoppingDataList",
            payload: res.data.data
        }
    })
}

export { getShoppingDataList }