import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '../../Utlites/useAuth';
import useAxiosSecures from '../../Utlites/useAxiosSecures';
import { updateOrderById } from '../../AllApi/updateOrderById';

const PaymentForm = ({ price, course }) => {
    const [cardError, setCardError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState('')
    const [clientSecrect, setClientSecrect] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [axiosSerure] = useAxiosSecures()


    useEffect(() => {
        if (price) {
            axiosSerure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecrect(res.data.clientSecret)
                })
        }
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        setProcessing('payments processing..')

        const { error } = await stripe.createPaymentMethod({ type: "card", card })
        if (error) {
            setCardError(error.message)
            setProcessing('payment unsuccess')
            setProcessing('')
        }
        else {
            // console.log('payments Methods', paymentMethod)
            setCardError('')
        }
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecrect, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                }
            }

        })
        if (paymentError) {
            console.log('paymentError', paymentError)
            setProcessing('payment unsuccess')
        }
        
        if (paymentIntent.status === 'succeeded') {
            
            setProcessing('save payment')
            const paymentHistory = {
                courseId: course._id,
                category: course.category,
                name: course.name,
                instractor: {
                    name: course.instractor.name,
                    email: course.email,
                    image: course.instractor.image
                },
                price: course.price,
                rating: course.rating,
                studentEmail: user?.email,
                data: new Date(),
                transactionId: paymentIntent.id
            }
            const updataCourse = {
                orderStatus: 'enrolled'
            }

            axiosSerure.post('payment', paymentHistory)
                .then(res => {
                    if (res.data.insertedId) {
                        setProcessing('update status')
                        updateOrderById(course._id, updataCourse)
                            .then(res => {
                                if (res.modifiedCount>0) {
                                    toast.success('Payments successfull')
                                    setProcessing('success')
                                    setTransactionId(paymentIntent.id)
                                }
                                
                            })
                    }
                })
            


        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className=' bg-neutral-200 px-4 py-3 rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#C084FC',
                                '::placeholder': {
                                    color: '#C084FC',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecrect || processing || !price} >
                    {processing ? processing : `Pay ${price}`}
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4 text-sm'>{cardError}</p>}
            {transactionId && <p className='text-green-500 mt-4 text-sm'>Payments successfull with transaction Id {transactionId} </p>}
            <Toaster />
        </>
    );
};

export default PaymentForm;
