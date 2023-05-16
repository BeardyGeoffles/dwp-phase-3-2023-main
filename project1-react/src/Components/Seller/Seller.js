import React, {useEffect, useReducer, useState} from "react";
import {Link} from "react-router-dom";
import SellerForm from "./SellerForm";
import "./Seller.css";

const Seller = (props) => {

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const sellerListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state.concat(action.payload);
            case "SET":
                return action.payload;
            default:
                return state;
        }
    };
    const [sellersList, dispatch] = useReducer(sellerListReducer, []);
    const sellerAddHandler = (newSeller) => {

        if (sellersList.filter(seller => seller.firstName === newSeller.firstName && seller.surname === newSeller.surname).length) {
            alert("Seller already exist");
            return;
        }

        setSaving(true);

        fetch("http://localhost:8080/seller", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSeller)
        })
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to create the TODO item");
                setSaving(false);
                throw response.status;
            } else return response.json();
        })
        .then(newSeller => {
            dispatch({type: "ADD", payload: newSeller});
            setSaving(false);
        });
    };

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/seller")
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to read the Sellers");
                throw response.status;
            } else return response.json();
        }).then(sellers => {
            dispatch({type: "SET", payload: sellers});
            setLoading(false);

            console.log(JSON.stringify(sellers, null, 2));
        }).catch(error => {
            setLoading(false);
            console.error(error);
        });
    }, []);

    return (
        <>
            <div className="pageHeader"><i className="bi bi-person-square"/>&nbsp;Manage Sellers</div>
            <SellerForm addHandler={sellerAddHandler}/>
            <hr/>
            {
                loading || saving ?
                    <div className="message alert alert-info" role="alert">
                        <span className="spinner-border" role="status"><i className="sr-only"/></span>
                        {loading ? "Loading Sellers Information" : ""}
                        {saving ? "Saving Seller Information" : ""}
                    </div>
                    : ""
            }
            <ul>
                {
                    sellersList.length === 0 && !loading ?
                        <li>
                            <div className="message alert alert-info" role="alert">
                                <i className="bi bi-info-circle"></i>&nbsp;No sellers found
                            </div>
                        </li>
                        :
                        sellersList.map(seller => (
                            <li key={seller.id}>
                                <div className="sellerBlock">
                                    <i className="bi bi-person-fill"/>{seller.firstName}&nbsp;{seller.surname}
                                </div>
                                <i className="bi bi-geo-alt-fill"/>{seller.address}&nbsp;{seller.postcode}<i/><i/>
                                <i className="fa fa-phone"/>{seller.phone}&nbsp;
                                REF: {seller.id}
                                <Link to={`${seller.id}/property`} state={seller}
                                      className="btn btn-info btn-sm float-end">
                                    <i className="bi bi-house-add"/>&nbsp;Manage Properties</Link>
                            </li>
                        ))}
            </ul>
        </>);
};
export default Seller;