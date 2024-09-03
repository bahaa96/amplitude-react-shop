import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { trackEvent } from "../lib/analytics";
import { ANALYTICS_EVENTS } from "../types/analyticsEvents";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link
        href={`/product/${slug.current}`}
        onClick={() => {
          trackEvent(ANALYTICS_EVENTS.PRODUCT_CLICK, { name });
        }}
      >
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
