import React from 'react';
import faq from '../../assets/faq.jpeg'

const Faq = () => {
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <img
                className=' object-contain'
                src={faq} alt="" />
            <p className='text-center'>We will update this page soon</p>
        </div>
    );
};

export default Faq;