const DetailReducer = (prevState = [], action) => {
    let { type, payload } = action
    switch(type){
        case "GET_Detaillist":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default DetailReducer