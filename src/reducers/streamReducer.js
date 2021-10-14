import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from "../actions/typses";
import _ from 'lodash';

export default (state={}, action)=>{
    switch (action.type){
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            const items = {};
            action.payload.map(item=>{
                items[item.id]=item
            });
            return {...state, ...items};
        default:
            return state;
    }
};