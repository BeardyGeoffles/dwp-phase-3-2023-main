import PropertyList from "../components/property/PropertyList";
import PropertyForm from "../components/property/PropertyForm";

export default function PropertyPage() {
    return (
        <div className="PropertyPage">
            
            <PropertyForm />

            <PropertyList />

        </div>
    );
}