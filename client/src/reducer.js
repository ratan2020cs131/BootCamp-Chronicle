export const initialState = false;
export const reducer = (state, action)=>{
    if(action.type==='login'){
        return true;
    }
    if(action.type==='logout'){
        return false;
    }
}