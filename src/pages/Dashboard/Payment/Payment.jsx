import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY_PK_TEST);

const Payment = () => {
    return (
        <div className="bg-slate-100 py-6">
            <h1 className="text-center text-2xl pb-8">Request for contact details</h1>
            <div>

            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;