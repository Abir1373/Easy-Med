import PagaTitle from "../Shared/PagaTitle";
import SeleceServices from "./SeleceServices";

export default function ChooseService() {
    return (
        <div>
            <PagaTitle MainTitle={"Appointment"} />
            <div className="mx-4 lg:mx-48">
                <SeleceServices />
            </div>
        </div>
    )
}
