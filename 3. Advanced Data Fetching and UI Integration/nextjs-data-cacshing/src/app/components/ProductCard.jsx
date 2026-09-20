import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100 border shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;