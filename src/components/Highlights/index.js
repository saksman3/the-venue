import React from 'react';
import Desc from './Description';
import Discount from './Discounts';

const Highlights = () => {
    return (
        <div className="highlight_wrapper">
            <Desc/>
            <Discount/>
        </div>
    );
};

export default Highlights;