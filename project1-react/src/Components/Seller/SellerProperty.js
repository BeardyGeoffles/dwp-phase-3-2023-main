import {useLocation} from "react-router-dom";
import React, {useEffect, useReducer, useState} from "react";

import SellerPropertyForm from "./SellerPropertyForm";
import BuyerSelector from "./BuyerSelector";

import "../Property/Property.css";

const SellerProperty = () => {
    const seller = useLocation().state;
    const [soldProperty, setSoldProperty] = useState({});
    const [loadingProperties, setLoadingProperties] = useState(false);
    const [saving, setSaving] = useState(false);

    const buyerSelectorId = "buyerSelector";

    const propertyListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state.concat(action.payload);
            case "SET":
                return action.payload;
            case "REMOVE":
                return state.filter(property => property.id !== action.payload.id);
            default:
                return state;
        }
    };
    const [properties, dispatch] = useReducer(propertyListReducer, []);

    useEffect(() => {
        setLoadingProperties(true);
        fetch("http://localhost:8080/property")
        // get the JSON content from the response
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to read the Seller Properties");
                throw response.status;
            } else {
                return response.json();
            }
        })
        .then(properties => {
            dispatch({type: "SET", payload: properties});
            setLoadingProperties(false);
        })
        .catch(error => {
            setLoadingProperties(false);
            console.error(error);
        });
    }, []);

    const propertyAddHandler = (newProperty) => {
        setSaving(true);

        fetch("http://localhost:8080/property", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProperty)
        })
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to save Property");
                throw response.status;
            } else {
                return response.json();
            }
        })
        .then((newProperty) => {
            dispatch({type: "ADD", payload: newProperty});
            setSaving(false);
        });
    };

    const propertyUpdateHandler = (propertyToUpdate, newStatus) => {
        const updatedProperty = JSON.parse(JSON.stringify(propertyToUpdate));
        updatedProperty.status = newStatus;

        setSaving(true);

        fetch("http://localhost:8080/property/" + updatedProperty.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProperty)
        })
        .then((response) => {
            if (!response.ok) {
                setSaving(false);
                alert("An error has occurred.  Unable to save Property");
                throw response.status;
            } else {
                return response.json();
            }
        })
        .then((newProperty) => {
            dispatch({type: "REMOVE", payload: propertyToUpdate});
            dispatch({type: "ADD", payload: updatedProperty});
            setSaving(false);
        });
    };

    const iconClassForPropertyType = (propertyType) => {
        switch (propertyType) {
            case "DETACHED" :
                return "bi bi-house-fill";
            case "SEMI" :
                return "bi bi-houses-fill";
            case "APARTMENT" :
                return "fas fa-building";
            default:
                console.error(`${propertyType} is not a recognised icon type`);
        }
    };

    const iconClassForStatus = (propertyStatus) => {
        switch (propertyStatus) {
            case "FORSALE" :
                return "forsale";
            case "SOLD" :
                return "sold";
            case "WITHDRAWN" :
                return "withdrawn";
            default:
                console.error(`${propertyStatus} is not a recognised property status.  It should be one of FORSALE, SOLD or WITHDRAWN`);
        }
    };

    return (
        <>
            <div className="pageHeader"><i className="bi bi-person-square"/>&nbsp;Manage Seller Properties
                for <span
                    className={"text-info"}>REF:{seller.id} - {seller.firstName} {seller.surname} - {seller.address}</span>
            </div>
            <SellerPropertyForm addHandler={propertyAddHandler}/>
            {
                loadingProperties || saving ?
                    <div className="message alert alert-info" role="alert">
                        <span className="spinner-border" role="status"><i className="sr-only"/></span>
                        {loadingProperties ? "Loading Seller Properties" : ""}
                        {saving ? "Saving" : ""}
                    </div>
                    : ""
            }
            <BuyerSelector property={soldProperty} propertyUpdateHandler={propertyUpdateHandler} id={buyerSelectorId}/>
            <ul>
                {
                    properties.filter(property => Number(property.seller.id) === Number(seller.id)).length === 0 && !loadingProperties ?
                        <li>
                            <div className="message alert alert-info" role="alert">
                                <i className="bi bi-info-circle"></i>&nbsp;Sellers has not yet registered any properties
                                for sale
                            </div>
                        </li>
                        :
                        properties.filter(property => Number(property.seller.id) === Number(seller.id)).map(property => (
                            <li key={property.id}>
                                <div className={"priceBlock " + iconClassForStatus(property.status)}>
                                    <span>{property.status}</span><br/>
                                    £{property.price}
                                </div>
                                <div className="detailsBlock">
                                    <div>{property.address}&nbsp;{property.postcode}</div>
                                    <div>
                                        <i className={iconClassForPropertyType(property.type)}/><span>{property.type}</span>
                                        <i className="fas fa-bed"/><span>{property.bedrooms}</span>
                                        <i className="fas fa-shower"/><span>{property.bathrooms}</span>
                                        <i className="fas fa-tree"/><span>{Number(property.garden) ? "Yes" : "No"}</span>
                                        Reference:&nbsp;{property.id}
                                    </div>
                                </div>
                                {property.status === "FORSALE" ?
                                    <span className={"float-end"}>
                                            <button data-bs-toggle="modal" data-bs-target={"#" + buyerSelectorId}
                                                    onClick={setSoldProperty.bind(this, property)}
                                                    className="btn btn-success btn-sm">
                                                <i className="fas fa-thumbs-up"/>Change to Sold
                                            </button>
                                        &nbsp;
                                        <button onClick={propertyUpdateHandler.bind(this, property, "WITHDRAWN")}
                                                className="btn btn-warning btn-sm ">
                                                <i className="bi-house-dash"/>Withdraw
                                            </button>
                                        </span>
                                    : ""
                                }
                                {property.status === "WITHDRAWN" ?
                                    <button onClick={propertyUpdateHandler.bind(this, property, "FORSALE")}
                                            className="btn btn-info btn-sm float-end">
                                        <i className="bi-house-add"/>&nbsp;Resubmit
                                    </button>
                                    : ""
                                }
                            </li>
                        ))}
            </ul>
        </>);
};

export default SellerProperty;



