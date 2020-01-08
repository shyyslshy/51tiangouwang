import Axios from "axios"

function getOverSeaDataList() {
    return Axios.get('overseas/main/init.node?scp=08.smcfine.navE.00&_=1578480521880').then(res => {
        console.log(res.data.data,22222222333)
        return {
            type: 'Get_overseasDataList',
            payload: res.data.data
        }
    })
}

export default getOverSeaDataList