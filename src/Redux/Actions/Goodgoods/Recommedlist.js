import Axios from 'axios'

function recommend() {
    return Axios.get('/front/discover/new/recDiscovers').then(res => {
        // console.log('recommend数据',res.data.data)
        return {
            type: 'recommend',
            payload: res.data.data
        }
    })
}

export { recommend }