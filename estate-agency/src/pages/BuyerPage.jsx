import BuyerList from "../components/BuyerList";
import BuyerForm from "../components/BuyerForm";

export default function BuyerPage() {
    return (
        <div className="BuyerPage">

            <BuyerForm />

        <h2>List of available buyers</h2>

            <BuyerList />

        </div>
    );
}