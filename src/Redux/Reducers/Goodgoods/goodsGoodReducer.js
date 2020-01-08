const GoodgoodsDataReducer = (prevState = [], action) => {
    let { type, payload } = action
    console.log(action,'GoodgoodsDataReducer=======')
    switch(type){
        case "GoodgoodsData":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default GoodgoodsDataReducer