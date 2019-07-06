const initialState = {
    todo:['Redux']
}

const reducer = (state=initialState,action)=>{
    let newState = {...state};
    if(action.type=="ADD_WORK"){
        newState.todo.push(action.work)
    }
    return newState
}

export default reducer;