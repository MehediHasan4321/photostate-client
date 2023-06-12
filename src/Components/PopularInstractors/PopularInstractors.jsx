import React, { useEffect, useState } from 'react';
import SectionTitle from '../../ShareComponents/SectionTitle/SectionTitle';
import InstractorCard from '../InstractorCard/InstractorCard';
import { getUserRole } from '../../AllApi/getUserRole';
import useAxiosSecures from '../../Utlites/useAxiosSecures';

const PopularInstractors = ({ num }) => {
    const [instractors, setInstractors] = useState([])
    const [axiosSerure] = useAxiosSecures()
    useEffect(() => {
        axiosSerure(`users/${'instractor'}`).then(res => {
            setInstractors(res.data)
        })
    }, [])
    return (
        <>
            <SectionTitle title={'Out Favorite Instrator'} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    instractors.length > 6 ? instractors.slice(0, num ? num : instractors?.length).map((intractor) => <InstractorCard key={instractors._id} instractor={intractor} />) : instractors.map((intractor) => <InstractorCard key={instractors._id} instractor={intractor} />)
                }
            </div>
        </>
    );
};

export default PopularInstractors;