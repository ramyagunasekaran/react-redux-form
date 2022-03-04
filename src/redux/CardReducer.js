import * as actions from './ActionTypes'
let lastId = 0
export default function cardReducer(state = {}, action) {
    switch (action.type) {
        
        case actions.CARD_DET_ADDED:
            return (
                {
                    cardType: action.payload.cardType,
                    cardNumber:action.payload.cardNumber,
                    securityCode:action.payload.securityCode,
                    nameOnCard:action.payload.nameOnCard,
                    dateTime:action.payload.dateTime
                }
            );

       
        default:
            return state;
    }
}