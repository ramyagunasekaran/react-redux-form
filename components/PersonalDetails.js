import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PersonalDetailAdded } from "../redux/Action";

const defaultState = {
    name: '',
    email: '',
    phonenumber: '',
    nameError: '',
    emailError: '',
    phonenumberError: '',
    redirect: null
};
class PersonalDetails extends React.Component {
    constructor() {
        super();
        this.state = defaultState;
        this.handleInputChange = this.handleInputChange.bind(this);
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
        let nameError = "";
        let emailError = "";
        let phonenumberError = "";
        if (!this.state.name) {
            nameError = "Name field is required";
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.email || reg.test(this.state.email) === false) {
            emailError = "Email Field is Invalid ";
        }
        if (!this.state.phonenumber) {
            phonenumberError = "Phonenumber field is required";
        }
        const phonereg = /^[0-9]{10}$/;
        if (!this.state.phonenumber || phonereg.test(this.state.phonenumber) === false) {
            phonenumberError = "phonenumber Field is Invalid ";
        }
        if (nameError || emailError && phonenumberError) {
            this.setState({ nameError, emailError, phonenumberError });
            return false;
        }
        return true;
    }
    submit() {
        if (this.validate()) {

            //Send back the form values to the parent i.e App.js
            //this.props.onSubmit([this.state]);



            this.setState(defaultState);
            let persosnalDetail = this.props.details(this.state.name,this.state.email,this.state.phonenumber)
            console.log(persosnalDetail.payload)
            console.log(this.props.name)
            this.setState({ redirect: "/cd" });
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                {/* <div className="row"> */}
                <div className='container'>
                    {/* <div className="col-md-6 offset-md-3 "> */}
                        <h3 className='text-center page-head'>Personal details</h3>
                        <br />
                        <div className="container form-align">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className='label text-left'>Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="text-danger">{this.state.nameError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className='label'>Email :</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className='label'>phonenumber :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phonenumber"
                                        value={this.state.phonenumber}
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="text-danger">{this.state.phonenumberError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="button btn"
                                        onClick={() => this.submit()}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                //  </div>
            //  </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        name:state.FormDetail
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    details: (name,email,phonenumber)=> dispatch(PersonalDetailAdded(name,email,phonenumber))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonalDetails);

