import * as actions from './ActionTypes'
let lastId = 0
export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.PRESONAL_DET_ADDED:
            return (
                {
                    name: action.payload.name,
                    email:action.payload.email,
                    phonenumber:action.payload.phonenumber,
                })
            ;

        // case actions.COMM_DET_ADDED:
        //     return [
        //         ...state,
        //         {
        //             address: action.payload.address,
        //             postcode:action.payload.postcode,
        //             country:action.payload.country,
        //         }
        //     ];

        // case actions.CARD_DET_ADDED:
        //     return [
        //         ...state,
        //         {
        //             cardType: action.payload.cardType,
        //             cardNumber:action.payload.cardNumber,
        //             securityCode:action.payload.securityCode,
        //             nameOnCard:action.payload.nameOnCard,
        //         }
        //     ];

       
        default:
            return state;
    }
}