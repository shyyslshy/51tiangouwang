const storeReducer = (prevState = [], action) => {
    let { type, payload } = action
    switch(type){
        case "GET_StoreDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default storeReducer