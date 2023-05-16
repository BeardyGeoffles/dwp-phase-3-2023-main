import React, {useEffect, useState} from "react";

const BuyerSelector = (props) => {
    const property = props.property;
    const id = props.id;
    const propertyUpdateHandler = props.propertyUpdateHandler;
    const [buyers, setBuyers] = useState([]);


    const buyerSelectedHandler = (buyerId) => {
        property.buyerId = buyerId;
        propertyUpdateHandler(property, "SOLD");
    };

    useEffect(() => {
        fetch("http://localhost:8080/buyer")
        // get the JSON content from the response
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to read the Buyers");
                throw response.status;
            } else return response.json();
        })
        .then(buyers => {
            setBuyers(buyers);
            console.log(JSON.stringify(buyers, null, 2));
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="modal" id={id}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Please Select Buyer for {property.address} REF: {property.id}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <ul className="modal-body">
                        {
                            buyers.length === 0 ?
                                <li>
                                    <div className="message alert alert-info" role="alert">
                                        <i className="bi bi-info-circle"></i>&nbsp;No buyers found
                                    </div>
                                </li>
                                :
                                buyers.map(buyer => (
                                    <li key={buyer.id}>
                                        {buyer.firstName} {buyer.surname}
                                        <button type="button" className="btn btn-primary btn-sm float-end bi bi-check"
                                                data-bs-dismiss="modal"
                                                onClick={buyerSelectedHandler.bind(this, buyer.id)}/>
                                    </li>))
                        }
                    </ul>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BuyerSelector;

