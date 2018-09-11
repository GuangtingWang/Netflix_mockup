import * as actionTypes from './actionType';

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.INITIALIZE_DATA:
            return {
                ...state,
                mylist:action.mylist,
                recommendations:action.recommendations
            }  
        case actionTypes.REMOVE_ITEM:
            let newMylist = [...state.mylist];
            let addToRecommendations = newMylist.filter(list => list.id===action.payload);
            newMylist = newMylist.filter(list => list.id!==action.payload);
            const myRecommendations = [...state.recommendations,...addToRecommendations]; 
            return {
                ...state,
                mylist: [...newMylist],
                recommendations: [...myRecommendations]
            }
        case actionTypes.ADD_ITEM:
            let newRecommendations = [...state.recommendations];
            let addToList = newRecommendations.filter(list => list.id===action.payload);
            newRecommendations = newRecommendations.filter(list => list.id!==action.payload);
            const myNewList2 = [...state.mylist,...addToList]; 
            return {
                ...state,
                mylist: [...myNewList2],
                recommendations: [...newRecommendations]
            }
        default:
            return state;
    }
}

export default reducer;