const shoppingReducer = (prevState = [], action) => {
    let { type, payload } = action
    // console.log(action,'shoppingReduce的paylod')
    switch(type){
        case "getShoppingDataList":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
}

export default shoppingReducer