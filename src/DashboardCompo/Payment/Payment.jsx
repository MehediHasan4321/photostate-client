import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Secrect_Publisable_Key)
    const course = useLoaderData()

    return (
        <div>
            <h1 className="text-3xl">This is Payments Page</h1>
            <div className="w-96 mx-auto mt-12">
                <Elements stripe={stripePromise}>
                    <PaymentForm price={course?.course?.price} course={course}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;