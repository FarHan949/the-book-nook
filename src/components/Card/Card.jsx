import React from 'react';

const Card = ({book}) => {

    const {image, rating, category, tags, publisher, author} = book

    return (
        <div>
            <img src={image} width={"100px"} alt="" />
        </div>
    );
};

export default Card;