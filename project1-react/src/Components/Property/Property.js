import React, {useEffect, useReducer, useState} from "react";
import {Link} from "react-router-dom";

import "./Property.css";
import PropertySearchForm from "./PropertySearchForm";

const Property = (props) => {
    const propertyListReducer = (state, action) => {
        switch (action.type) {
            case "SET":
                return action.payload;
            case "REMOVE":
                return state.filter(property => property.id !== action.payload);
            default:
                return state;
        }
    };
    const [properties, dispatch] = useReducer(propertyListReducer, []);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchHandler = (searchCriteria) => {
        setSearchResult(properties.filter(property =>
            (searchCriteria.type === "ANY" || property.type === searchCriteria.type) &&
            (Number(property.bedroom) >= Number(searchCriteria.bedroom)) &&
            (Number(property.bathroom) >= Number(searchCriteria.bathroom)) &&
            (Number(property.garden) >= Number(searchCriteria.garden)) &&
            (Number(searchCriteria.price) === 0 || Number(property.price) <= Number(searchCriteria.price))
        ));
    };

    const iconClassForPropertyType = (propertyType) => {
        switch (propertyType) {
            case "DETACHED" :
                return "bi bi-house-fill";
            case "SEMI" :
                return "bi bi-houses-fill";
            case "APARTMENT" :
                return "fas fa-building";
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
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/property")
        // get the JSON content from the response
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to load Properties data");
                throw response.status;
            } else return response.json();
        })
        .then(properties => {
            dispatch({type: "SET", payload: properties});
            setSearchResult(properties);
            setLoading(false);
            console.log(JSON.stringify(properties, null, 2));
        })
        .catch(error => {
            setLoading(false);
            console.error(error);
            window.alert("An error has occurred");
        });
    }, []);

    return (
        <>
            <div className="pageHeader"><i className="bi bi-house-fill"/>&nbsp;Property Search and Bookings</div>
            <PropertySearchForm searchHandler={searchHandler}/>
            <hr/>
            {
                loading ?
                    <div className="message alert alert-info" role="alert">
                        <span className="spinner-border" role="status"><i className="sr-only"/></span>
                        Loading Properties
                    </div>
                    : ""
            }
            <ul>
                {
                    searchResult.length === 0 && !loading ?
                        <li>
                            <div className="message alert alert-info" role="alert">
                                <i className="bi bi-info-circle"></i>&nbsp;No properties found
                            </div>
                        </li>
                        :
                        searchResult.map(property => (
                            <li key={property.id}>
                                <div className={"priceBlock " + iconClassForStatus(property.status)}>
                                    <span>{property.status}</span><br/>
                                    £{property.price}
                                </div>
                                <div className="detailsBlock">
                                    <div>{property.address}&nbsp;{property.postcode}</div>
                                    <div>
                                        <i className={iconClassForPropertyType(property.type)}/><span>{property.type}</span>
                                        <i className="fas fa-bed"/><span>{property.bedroom}</span>
                                        <i className="fas fa-shower"/><span>{property.bathroom}</span>
                                        <i className="fas fa-tree"/><span>{Number(property.garden) ? "Yes" : "No"}</span>
                                        Reference:&nbsp;{property.id}
                                    </div>
                                </div>
                                {
                                    property.status === "FORSALE" ?
                                        <Link to={`/property/${property.id}/booking`} state={property}
                                              className="btn btn-info btn-sm float-end">
                                            <i className="bi-alarm"/>&nbsp;Manage Bookings</Link>
                                        : ""
                                }
                            </li>
                        ))
                }
            </ul>
        </>)
        ;
};
export default Property;