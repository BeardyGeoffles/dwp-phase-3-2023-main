import React, {useEffect, useReducer, useState} from "react";

import BuyerForm from "./BuyerForm";
import "./Buyer.css"

const Buyer = (props) => {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    const buyerListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state.concat(action.payload);
            case "SET":
                return action.payload;
            case "REMOVE":
                return state.filter(buyer => buyer.id !== action.payload);
            default:
                return state;
        }
    };
    const [buyersList, dispatch] = useReducer(buyerListReducer, []);

    const buyerAddHandler = (newBuyer) => {
        setSaving(true);

        fetch("http://localhost:8080/buyer", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBuyer)
            }
        ).then((response) => {
                if (!response.ok) {
                    alert("An error has occurred.  Unable to create the TODO item");
                    setSaving(false);
                    throw response.status;
                } else return response.json();
            }
        ).then(newBuyer => {
            setSaving(false);
            dispatch({type: "ADD", payload: newBuyer});
        });
    };

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/buyer")
            // get the JSON content from the response
            .then((response) => {
                if (!response.ok) {
                    alert("An error has occurred.  Unable to Load Buyers");
                    setLoading(false);
                    throw response.status;
                } else return response.json();
            })
            .then(buyers => {
                dispatch({type: "SET", payload: buyers});
                setLoading(false);
                console.log(JSON.stringify(buyers, null, 2));
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className="pageHeader"><i className="bi bi-person-square"/>&nbsp;Manage Buyers</div>
            <BuyerForm addHandler={buyerAddHandler}/>
            <hr/>
            {
                loading || saving ?
                    <div className="message alert alert-info" role="alert">
                        <span className="spinner-border" role="status"><i className="sr-only"/></span>
                        {loading ? "Loading" : ""}
                        {saving ? "Saving" : ""}
                    </div>
                    : ""
            }
            <div>
                <ul>
                    {
                        buyersList.length === 0 && !loading ?
                            <li>
                                <div className="message alert alert-info" role="alert">
                                    <i className="bi bi-info-circle"></i>&nbsp;No buyers found
                                </div>
                            </li>
                            :
                            buyersList.map(buyer => (
                                <li key={buyer.id}>
                                    <div className="buyerBlock">
                                        <i className="bi bi-person-fill"/>{buyer.firstName}&nbsp;{buyer.surname}
                                    </div>
                                    <i className="bi bi-geo-alt-fill"/>{buyer.address}&nbsp;{buyer.postcode}<i/><i/>
                                    <i className="fa fa-phone"/>{buyer.phone}&nbsp;
                                    REF: {buyer.id}
                                </li>
                            ))}
                </ul>
            </div>
        </>);
};
export default Buyer;