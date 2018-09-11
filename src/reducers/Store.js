import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    mylist:[],
    recommendations:[]
};
const store = createStore(reducer,initialState);

export default store;