const overSeasReducer = (prevState = [], action) => {
    let { type, payload } = action
    switch(type){
        case "Get_overseasDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default overSeasReducer