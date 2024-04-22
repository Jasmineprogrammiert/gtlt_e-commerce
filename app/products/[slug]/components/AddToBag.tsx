'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../../../lib/sanity'

export interface ProductCart {
  name: string;
  description_1: string;
  price: number;
  price_id: string;
  currency: string;
  image: any;
}

export default function AddToBag({
  currency,
  description_1,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description_1: description_1,
    price: price,
    price_id: price_id,
    currency: currency,
    image: urlFor(image).url(),
  }
  return (
    <>
    <button
      onClick={() => {addItem(product), handleCartClick()}}
      className="sc-btn"
    >
      Add to Bag
    </button>
    </>
  )
}