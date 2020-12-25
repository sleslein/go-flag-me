import Button from "../../components/Button";
import Field from "../../components/Field";

export default function SignUp() {
    return (
        <form>
            <Field label="Name" />
            <Field label="Address" />
            <Field label="Phone" />
            <Button>Sign Me Up!</Button>
        </form>
    );
}