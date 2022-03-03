import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { CardDetailAdded } from "../redux/Action";

const defaultState = {
    cardType: '',
    cardNumber: '',
    securityCode: "",
    nameOnCard: '',
    cardTypeError: '',
    cardNumberError: '',
    securityCodeError: '',
    nameOnCardError: '',
    redirect: null
};
class CardDetails extends React.Component {
    constructor() {
        super();
        this.state = defaultState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.HandlePrevious = this.HandlePrevious.bind(this);
       

    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    validate() {
        let cardTypeError = "";
        let cardNumberError = "";
        let securityCodeError = "";
        let nameOnCardError = "";
        if (!this.state.cardType) {
            cardTypeError = "card Type field is required";
        }

        if (!this.state.cardNumber) {
            cardNumberError = "card Number field is required";
        }
        const cardNumReg = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        if (!this.state.cardNumber || cardNumReg.test(this.state.cardNumber) === false) {
            cardNumberError = "Enter in this format xxxx-xxxx-xxxx-xxxx ";
        }

        if (!this.state.securityCode) {
            securityCodeError = "security Code field is required";
        }
        const reg = /^[0-9]{3}$/;
        if (!this.state.securityCode || reg.test(this.state.securityCode) === false) {
            securityCodeError = "Enter only 3 digits ";
        }
        if (!this.state.nameOnCard) {
            nameOnCardError = "name On Card field is required";
        }
        if (this.state.nameOnCard != this.props.name[this.props.name.length - 1].name) {
            nameOnCardError = "name on card is not equal to your name";
        }

        if (cardTypeError || cardNumberError || securityCodeError || nameOnCardError) {
            this.setState({ cardTypeError, cardNumberError, securityCodeError, nameOnCardError });
            return false;
        }
        return true;
    }
    submit = () => {
        if (this.validate()) {
            this.setState(defaultState);
            const current = new Date();
            let date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
            let cardDetail = this.props.details(this.state.cardType, this.state.cardNumber, this.state.securityCode, this.state.nameOnCard,date)
            console.log(cardDetail.payload)
            this.setState({ redirect: "/con" });
        }
    }

    HandlePrevious = () => {
        this.setState({
            redirect: "/cd"
        })
    }

    handleCardType = (event) => {
        this.setState({
            cardType: event.target.value
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div className='container'></div>
                {/* <div className="row"> */}

                {/* <div className="col-md-6 offset-md-3 "> */}
                <h1 className='text-center page-head'>Card Details</h1>
                <div className="container form-align">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <p className='label text-left'>Card Type</p>
                                <input type="radio" onChange={this.handleCardType} name="cardType" value="Visa" />
                                <label htmlFor="Visa"> Visa</label><br></br>
                                <input type="radio" onChange={this.handleCardType} name="cardType" value="AmEx" />
                                <label htmlFor="AmEx"> AmEx</label><br></br>
                                <input type="radio" onChange={this.handleCardType} name="cardType" value="Mastercard" />
                                <label htmlFor="Mastercard"> Mastercard</label><br></br>
                                <span className="text-danger">{this.state.cardTypeError}</span>
                            </div>
                        </div>
                    </form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className='label text-left'>Card Number :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cardNumber"
                                value={this.state.cardNumber}
                                onChange={this.handleInputChange}
                            />
                            <span className="text-danger">{this.state.cardNumberError}</span>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className='label text-left'>Security Code :</label>
                            <input
                                type="password"
                                className="form-control"
                                name="securityCode"
                                value={this.state.securityCode}
                                onChange={this.handleInputChange}
                            />
                            <span className="text-danger">{this.state.securityCodeError}</span>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className='label text-left'>Name on card :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nameOnCard"
                                value={this.state.nameOnCard}
                                onChange={this.handleInputChange}
                                placeholder="Exact name as on the card"
                            />
                            <span className="text-danger">{this.state.nameOnCardError}</span>

                        </div>
                    </div>


                    <button className="btn button prev-btn" onClick={this.HandlePrevious}>Previous</button>
                    <button className="btn button " onClick={this.submit}>Next</button>
                </div>
            </div>
            //     </div>
            // </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.FormDetail
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        details: (cardType, cardNumber, securityCode, nameOnCard,dateTime) => dispatch(CardDetailAdded(cardType, cardNumber, securityCode, nameOnCard,dateTime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)
