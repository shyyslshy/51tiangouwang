import Axios from 'axios'

function getDetaillist(id) {
    return Axios.get(`/product/listing/init.node?id=${id}&depot=true&_=1578964264496`).then(res => {
        return {
            type: 'GET_Detaillist',
            payload: res.data.data
        }
    })
}

export default getDetaillist