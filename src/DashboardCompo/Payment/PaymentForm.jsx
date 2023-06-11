import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '../../Utlites/useAuth';
import useAxiosSecures from '../../Utlites/useAxiosSecures';
import { updateOrderById } from '../../AllApi/updateOrderById';
import { updateCourseById } from '../../AllApi/updateCourseById';

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
                courseId: course.course._id,
                category: course.course.category,
                name: course.course.name,
                instractor: {
                    name: course.course.instractor.name,
                    email: course?.course?.email,
                    image: course.course.instractor.image
                },
                price: course.course.price,
                rating: course.course.rating,
                studentEmail: user?.email,
                data: new Date(),
                transactionId: paymentIntent.id,
                image: course.course.image,
                paymentMehtod: paymentIntent.payment_method_types[0]
            }
            const updataOrder = {
                orderStatus: "enrolled"
            }
            const updateCoures = {
                enroledStudent: [user.email, ...course?.course?.enroledStudent]
            }
            axiosSerure.post('/payment', paymentHistory)
                .then(res => {
                    if (res.data.insertedId) {
                        setProcessing('update status')
                        updateOrderById(course._id, updataOrder).then(res => {
                            if (res.modifiedCount > 0) {
                                setProcessing('Save Order')
                                updateCourseById(updateCoures, course.course._id)
                                    .then(res => {
                                        if (res.modifiedCount > 0) {
                                            toast.success('Payments successfull')
                                            setProcessing('Payment Success')
                                            setTransactionId(paymentIntent.id)
                                        } else { console.log(res) }

                                    })
                                    .catch(err => toast.error(err.message))
                            } else { console.log(res) }

                        }).catch(err => console.log(err))

                    }
                }).catch(err => console.log(err))




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

