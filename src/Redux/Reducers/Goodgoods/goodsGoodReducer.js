const GoodgoodsDataReducer = (prevState = [], action) => {
    let { type, payload } = action
    switch(type){
        case "GoodgoodsData":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default GoodgoodsDataReducer