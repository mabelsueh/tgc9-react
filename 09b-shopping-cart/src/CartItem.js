import React from "react";

export default function CartItem(props) {
  return (
    <React.Fragment>
      <div class="media">
        <img
          className="mr-3"
          src={props.product.imageUrl}
          className="img-fluid"
          alt="Generic placeholder image"
          style={{
              'width': '200px',
              'height': '200px'
          }}
        />
        <div className="media-body">
          <h5 className="mt-0">{props.product.name}</h5>
          <ul>
            <li>SKU: {props.product.sku}</li>
            <li>Price: {props.product.price}</li>
          </ul>
          <button class="btn btn-danger">Remove from Cart</button>
        </div>
      </div>
    </React.Fragment>
  );
}
