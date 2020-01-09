import Axios from 'axios'
function getGoodsgoodVideoDataList () {
    return Axios.get('https://midway.51tiangou.com/shopping/home/init.node?storeId=1065&cityId=2554&lat=38.8486755&lon=121.5107209&_=1578534684808&source=1&id=1065&name=%25E7%25BE%258E%25E9%25A3%259F1%25E5%258F%25B7%25E7%25B2%25BE%25E5%2593%2581%25E8%25B6%2585%25E5%25B8%2582&cityName=%25E5%25A4%25A7%25E8%25BF%259E%25E5%25B8%2582&storeName=%25E7%25BE%258E%25E9%25A3%259F1%25E5%258F%25B7%25E7%25B2%25BE%25E5%2593%2581%25E8%25B6%2585%25E5%25B8%2582&marketType=1&tabIndex=0&childIndex=0&currentView=2').then(res => {
        console.log(res.data.data,'取视频数据000000000')
        return {
            type: "GET_GoodsgoodVideoDataList",
            payload: res.data.data
        }
    })
}

export { getGoodsgoodVideoDataList }