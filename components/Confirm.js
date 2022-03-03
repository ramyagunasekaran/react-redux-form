
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
            name: this.props.nam[this.props.nam.length - 1].name,
            email: this.props.emai[this.props.emai.length - 1].email,
            phoneNumber: this.props.phonenumbe[this.props.phonenumbe.length - 1].phonenumber,
            address: this.props.addres[this.props.addres.length - 1].address,
            postCode: parseInt(this.props.postcod[this.props.postcod.length - 1].postcode),
            country: this.props.countr[this.props.countr.length - 1].country,
            cardType: this.props.cardTyp[this.props.cardTyp.length - 1].cardType,
            cardNumber: parseInt(this.props.cardNumbe[this.props.cardNumbe.length - 1].cardNumber),
            securityCode: parseInt(this.props.securityCod[this.props.securityCod.length - 1].securityCode),
            nameOnCard: this.props.nameOnCar[this.props.nameOnCar.length - 1].nameOnCard,
            dateTime: this.props.dateTim[this.props.dateTim.length - 1].dateTime
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
                alert('Something went wrong!')

            })
            
        // this.setState({
        //                 redirect: "/fop"
        //             })
    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (


            <div className="mx-5">
                <h1 className='text-center page-head'>Confirm Your Details</h1><br></br>
                <form className="p-l">


                    <label>name: {this.props.nam[this.props.nam.length - 1].name}
                    </label><br></br>
                    <label>email: {this.props.emai[this.props.emai.length - 1].email}

                    </label><br></br>
                    <label>phonenumber:{this.props.phonenumbe[this.props.phonenumbe.length - 1].phonenumber}
                    </label>

                    <label>Address: {this.props.addres[this.props.addres.length - 1].address}
                    </label><br></br>
                    <label>postcode:{this.props.postcod[this.props.postcod.length - 1].postcode}

                    </label><br></br>
                    <label>country: {this.props.countr[this.props.countr.length - 1].country} </label><br />


                    <label>CardType: {this.props.cardTyp[this.props.cardTyp.length - 1].cardType}

                    </label><br></br>
                    <label>cardnumber: {this.props.cardNumbe[this.props.cardNumbe.length - 1].cardNumber}

                    </label><br></br>
                    <label>securityCode: {this.props.securityCod[this.props.securityCod.length - 1].securityCode}


                    </label><br></br>
                    <label>nameOnCard:{this.props.nameOnCar[this.props.nameOnCar.length - 1].nameOnCard}


                    </label><br></br>
                    <label>dateTime: {this.props.dateTim[this.props.dateTim.length - 1].dateTime}

                    </label><br></br>



                    <button className="btn button prev-btn m-btn" onClick={this.HandlePrevious}>Previous</button>



                    <button className="btn button " onClick={this.HandleSubmit}>Submit</button>




                </form>
            </div>

        )




    }

}
Confirm.propTypes = {
    nam: PropTypes.array
};
const mapStateToProps = (state) => {
    return {
        nam: state.FormDetail,
        emai: state.FormDetail,
        phonenumbe: state.FormDetail,
        addres: state.comm,
        postcod: state.comm,
        countr: state.comm,
        cardTyp: state.card,
        cardNumbe: state.card,
        securityCod: state.card,
        nameOnCar: state.card,
        dateTim: state.card
    }
}

export default connect(mapStateToProps, null)(Confirm)