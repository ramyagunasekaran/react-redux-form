import * as actions from './ActionTypes'


export const PersonalDetailAdded = (name,email,phonenumber) =>({
    type: actions.PRESONAL_DET_ADDED,
    payload: {
        name,
        email,
        phonenumber
    }
})

export const CommDetailAdded = (address,postcode,country) =>({
    type: actions.COMM_DET_ADDED,
    payload: {
        address,
        postcode,
        country
    }
})

export const CardDetailAdded = (cardType,cardNumber,securityCode,nameOnCard,dateTime) =>({
    type: actions.CARD_DET_ADDED,
    payload: {
        cardType,
        cardNumber,
        securityCode,
        nameOnCard,
        dateTime
    }
})