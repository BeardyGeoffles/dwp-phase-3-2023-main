import PropertyList from "../components/PropertyList";
import PropertyForm from "../components/PropertyForm";

export default function PropertyPage() {
    return (
        <div className="PropertyPage">
            
            <PropertyForm />
            <h2>List of available properties</h2>
            <PropertyList />

        </div>
    );
}