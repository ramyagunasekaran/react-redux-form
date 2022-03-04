
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import axios from "axios";
import PropTypes from 'prop-types';



class Confirm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            

            

        }
        const current = new Date();
    }



    HandlePrevious = () => {
        console.log(this.props.name)
        this.setState({
            redirect: "/cad"
        })


    }



    HandleSubmit = () => {
       
        let newForm = {
            name: this.props.name.name,
            email: this.props.email.email,
            phoneNumber: this.props.phonenumber.phonenumber,
            address: this.props.address.address,
            postCode: parseInt(this.props.postcode.postcode),
            country: this.props.country.country,
            cardType: this.props.cardType.cardType,
            cardNumber: parseInt(this.props.cardNumber.cardNumber),
            securityCode: parseInt(this.props.securityCode.securityCode),
            nameOnCard: this.props.nameOnCard.nameOnCard,
            dateTime: this.props.dateTime.dateTime
        }
        axios.post('http://localhost:3002/myrestapi/form', newForm)
            .then(res => {
                console.log(res.data)
                this.setState({
                    redirect: "/fop",
                    
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    redirect: "/sf",
                    
                })

            })
            
        
    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (


            <div className="mx-5">
                <h1 className='text-center page-head'>Confirm Your Details</h1><br></br>
                <div className="p-l">


                    <label>name: {this.props.name.name}
                    </label><br></br>
                    <label>email: {this.props.email.email}

                    </label><br></br>
                    <label>phonenumber:{this.props.phonenumber.phonenumber}
                    </label>

                    <label>Address: {this.props.address.address}
                    </label><br></br>
                    <label>postcode:{this.props.postcode.postcode}

                    </label><br></br>
                    <label>country: {this.props.country.country} </label><br />


                    <label>CardType: {this.props.cardType.cardType}

                    </label><br></br>
                    <label>cardnumber: {this.props.cardNumber.cardNumber}

                    </label><br></br>
                    <label>securityCode: {this.props.securityCode.securityCode}


                    </label><br></br>
                    <label>nameOnCard:{this.props.nameOnCard.nameOnCard}


                    </label><br></br>
                    <label>dateTime: {this.props.dateTime.dateTime} 

                     </label><br></br>



                    <button className="btn button prev-btn m-btn" onClick={this.HandlePrevious}>Previous</button>



                    <button className="btn button " onClick={this.HandleSubmit}>Submit</button>




                </div>
            </div>

        )




    }

}
// Confirm.propTypes = {
//     nam: PropTypes.array
// };
const mapStateToProps = (state) => {
    return {
        name: state.FormDetail,
        email: state.FormDetail,
        phonenumber: state.FormDetail,
        address: state.comm,
        postcode: state.comm,
        country: state.comm,
        cardType: state.card,
        cardNumber: state.card,
        securityCode: state.card,
        nameOnCard: state.card,
        dateTime: state.card
    }
}

export default connect(mapStateToProps, null)(Confirm)