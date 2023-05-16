import PropertyList from "../components/PropertyList";
import PropertyForm from "../components/PropertyForm";

export default function PropertyPage() {
    return (
        <div className="PropertyPage">
            
            <PropertyForm />

            <PropertyList />

        </div>
    );
}