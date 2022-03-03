import * as actions from './ActionTypes'
let lastId = 0
export default function commReducer(state = [], action) {
    switch (action.type) {
        

        case actions.COMM_DET_ADDED:
            return [
                ...state,
                {
                    address: action.payload.address,
                    postcode:action.payload.postcode,
                    country:action.payload.country,
                }
            ];

        
       
        default:
            return state;
    }
}