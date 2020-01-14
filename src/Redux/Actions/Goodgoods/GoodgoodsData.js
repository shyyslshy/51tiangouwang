import Axios from 'axios'

function GoodgoodsData() {
    return Axios.get('/discovery/circle/init.node?_=1578470235340').then(res =>{
        // console.log('GoodgoodsData数据',res.data.data)
        return {
            type: 'GoodgoodsData',
            payload: res.data.data
        }
    })
}

export { GoodgoodsData }