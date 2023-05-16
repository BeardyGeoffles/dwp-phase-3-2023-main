import React, {useRef, useState} from "react";
import "./BuyerForm.css";

const BuyerForm = (props) => {
    const addHandler = props.addHandler;

    const firstNameRef = useRef();
    const surnameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const postcodeRef = useRef();

    const [firstNameError, setFirstNameError] = useState();
    const [surnameError, setSurnameError] = useState();
    const [addressError, setAddressError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [postcodeError, setPostcodeError] = useState();

    const clearForm = () => {
        firstNameRef.current.value = "";
        surnameRef.current.value = "";
        addressRef.current.value = "";
        postcodeRef.current.value = "";
        phoneRef.current.value = "";
    };
    const handleSubmit = (e) => {
        // Prevent event from bubbling up, we will handle it here
        e.preventDefault();

        setFirstNameError(!firstNameRef.current.value);
        setSurnameError(!surnameRef.current.value);
        setAddressError(!addressRef.current.value);
        setPhoneError(!phoneRef.current.value);
        setPostcodeError(!postcodeRef.current.value);

        if (firstNameRef.current.value && surnameRef.current.value && addressRef.current.value && phoneRef.current.value && postcodeRef.current.value) {
            addHandler({
                "firstName": firstNameRef.current.value,
                "surname": surnameRef.current.value,
                "address": addressRef.current.value,
                "postcode": postcodeRef.current.value,
                "phone": phoneRef.current.value,
            });
            clearForm();
        }
    };

    return (
        <form>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="buyerFirstName">First Name</label>
                    <input type="text" className="form-control" id="buyerFirstName" ref={firstNameRef}/>
                    {firstNameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>First Name cannot
                            be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="buyerSurname">Surname</label>
                    <input type="text" className="form-control" id="buyerSurname" ref={surnameRef}/>
                    {surnameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Surname cannot be
                            blank</div> : ""}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="buyerAddress">Address</label>
                <input type="text" className="form-control" id="buyerAddress" ref={addressRef}/>
                {addressError ?
                    <div className="text-danger"><i className="bi bi-exclamation-circle"/>Address cannot be
                        blank</div> : ""}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="buyerPostcode">Postcode</label>
                    <input type="text" className="form-control" id="buyerPostcode" ref={postcodeRef}/>
                    {postcodeError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>
                            Postcode cannot be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="buyerPhone">Phone</label>
                    <input type="text" className="form-control" id="buyerPhone" ref={phoneRef}/>
                    {phoneError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Phone cannot be blank
                        </div> : ""}
                </div>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}><i
                    className="bi bi-person-add"/>&nbsp;Add New Buyer
                </button>
            </div>
        </form>
    );
};
export default BuyerForm;