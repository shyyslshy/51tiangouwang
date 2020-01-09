const shoppinggoodsvideoReducer = (prevState = [], action) => {
    let { type, payload } = action
    console.log(action,'GET_GoodsgoodVideoDataList视频的paylod00000000000000000')
    switch(type){
        case "GET_GoodsgoodVideoDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default shoppinggoodsvideoReducer