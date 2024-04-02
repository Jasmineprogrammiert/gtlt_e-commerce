'use client'

import { Button } from '@mui/material'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import { ProductCart } from './AddToBag'

export default function Checkout({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart()

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    price_id: price_id,
    currency: currency,
    image: urlFor(image).url(),
  }
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id)
      }}
    >
      Checkout Now
    </Button>
  )
}