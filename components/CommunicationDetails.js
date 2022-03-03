import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { CommDetailAdded } from "../redux/Action";

const defaultState = {
    countries: [],
    address: '',
    postcode: '',
    country: "Afghanistan",
    addressError: '',
    postcodeError: '',
    countryError: '',
    redirect: null
};
class CommunicationDetails extends React.Component {
    constructor() {
        super();
        this.state = defaultState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.HandlePrevious = this.HandlePrevious.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleCountryChange(event) {
        this.setState({
            country: event.target.value
        })

    }
    validate() {
        let addressError = "";
        let postcodeError = "";
        let countryError = "";
        if (!this.state.address) {
            addressError = "Address field is required";
        }
        const addressreg = /^[ A-Za-z0-9_@./#&+-]*$/;
        if (!this.state.address || addressreg.test(this.state.address) === false) {
            addressError = "address field has exceeded ";
        }
        const reg = /^[0-9]{6}$/;
        if (!this.state.postcode || reg.test(this.state.postcode) === false) {
            postcodeError = "Enter only 6 digits ";
        }
        if (!this.state.country) {
            countryError = "country field is required";
        }

        if (addressError || postcodeError || countryError) {
            this.setState({ addressError, postcodeError, countryError });
            return false;
        }
        return true;
    }
    submit() {
        if (this.validate()) {
            this.setState(defaultState);
            let communicationDetail = this.props.details(this.state.address,this.state.postcode,this.state.country)
            console.log(communicationDetail.payload)
            this.setState({ redirect: "/cad" });
        }
    }

    HandlePrevious() {
        this.setState({
            redirect: "/"
        })
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v2/all')
            .then(res => {
                console.log(res.data)
                this.setState({ countries: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    countryHandler = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div className='container'>
                    {/* <div className="row"> */}
                    {/* <div className="col-md-6 offset-md-3"> */}
                    <h3 className='text-center page-head'>Communication details</h3>
                    <br />
                    <div className="container form-align">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className='label text-left'>Address :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                />
                                <span className="text-danger">{this.state.addressError}</span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className='label text-left'>post code :</label>
                                <input
                                    type="postCode"
                                    className="form-control"
                                    name="postcode"
                                    value={this.state.postcode}
                                    onChange={this.handleInputChange}
                                />
                                <span className="text-danger">{this.state.postcodeError}</span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className='label text-left'>Country:</label>
                                <select className="form-control" value={this.state.country} onChange={this.handleCountryChange} defaultValue="Select Country">
                                    {
                                        this.state.countries.map(country => (<option key={country.name} value={country.name}>{country.name}</option>))
                                    }
                                </select>
                                <span className="text-danger">{this.state.countryError}</span>
                            </div>
                        </div>
                        {/* <div className="form-row">
                        <div className="col-md-12 text-center prev-btn"> */}
                        
                            <button
                                className=" btn button prev-btn"
                                onClick={() => this.HandlePrevious()}
                            >
                                Previous
                            </button>
                            {/* </div>
                    </div> */}
                            {/* <div className="form-row">
                        <div className="col-md-12 text-center"> */}
                            <button
                                type="submit"
                                className="btn button"
                                onClick={() => this.submit()}
                            >
                                Next
                            </button>
                        
                        {/* </div>
                    </div> */}
                    </div>
                </div>
            </div>
            // </div>
            // </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    details: (address,postcode,country)=> dispatch(CommDetailAdded(address,postcode,country))
    }
}

export default connect(null,mapDispatchToProps)(CommunicationDetails)
