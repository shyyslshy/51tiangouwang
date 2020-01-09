const recommendReducer = (prevState = [], action) => {
    let { type, payload } = action
    // console.log(action,'recommendReducer=======')
    switch(type){
        case "recommend":
            return [...prevState, ...payload]
        default:
            return prevState
    }
    // return prevState
 }
 


 export default recommendReducer