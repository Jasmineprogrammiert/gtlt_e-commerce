'use client'

import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://gtlt.vercel.app/stripe/success"
      cancelUrl="https://gtlt.vercel.app/stripe/error"
      currency="HKD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  )
}