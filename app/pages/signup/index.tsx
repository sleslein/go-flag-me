import Button from "../../components/Button";
import Field from "../../components/Field";

export default function SignUp() {
    return (
        <form name="signup" method="post" netlify-data="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="signup" />
            <Field label="Name" />
            <Field label="Address" />
            <Field label="Phone" />
            <Button type='submit'>Sign Me Up!</Button>
        </form>
    );
}