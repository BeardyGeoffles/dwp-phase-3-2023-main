import SellerList from "../components/SellerList";
import SellerForm from "../components/SellerForm";

export default function SellerPage() {
    return (
        <div className="SellerPage">
            
            <SellerForm />

            <h2>List of available sellers</h2>

            <SellerList />
        </div>
    );
}