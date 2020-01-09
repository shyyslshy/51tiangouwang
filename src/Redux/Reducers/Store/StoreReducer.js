const storeReducer = (prevState = [], action) => {
    let { type, payload } = action
    // console.log(action,'store Reducer数据')
    switch(type){
        case "GET_StoreDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default storeReducer