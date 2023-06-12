import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../ShareComponents/SectionTitle/SectionTitle';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Secrect_Publisable_Key)
    const course = useLoaderData()
 
    return (
        <div>
            <SectionTitle title={'Payment Page'} subTitle={'Please Provide All Information For A Successfull Payment'} />
            <div className="w-96 mx-auto mt-12">
                <Elements stripe={stripePromise}>
                    <PaymentForm price={course?.course?.price} course={course}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;