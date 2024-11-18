import React from 'react';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <h1 className='text-center mt-44 text-4xl'>404 This Page Not Founded</h1>
        </div>
    );
};

export default Error;