import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import './payment-form.styles.scss';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json());

        console.log(response);
    };

    return (
        <div className='payment-form-container'>
            <form onSubmit={paymentHandler}>
                <h1>Payment Information</h1>
                <CardElement/>
                <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Purchase</Button>
            </form>
        </div>
    );
};

export default PaymentForm;