import BuyerList from "../components/BuyerList";
import BuyerForm from "../components/BuyerForm";

export default function BuyerPage() {
    return (
        <div className="BuyerPage">

            <BuyerForm />

        <p>List of available buyers</p>

            <BuyerList />

        </div>
    );
}