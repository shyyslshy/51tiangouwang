const overSeasReducer = (prevState = [], action) => {
    let { type, payload } = action
    // console.log(action,'overSeasReducer Reducer数据')
    switch(type){
        case "Get_overseasDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default overSeasReducer