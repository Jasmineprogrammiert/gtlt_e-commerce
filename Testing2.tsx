'use client'

import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useShoppingCart } from 'use-shopping-cart'

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
    {/* <Sheet open onOpenChange={() => handleCartClick()}> */}
      <SheetContent className="sm:max-w-md px-8 py-14">
        <div className="h-full overflow-y-auto flex flex-col justify-between">
          <div className="divide-y divide-gray-200">
          {cartCount === 0 ? (
            <>
            <SheetHeader>
              <SheetTitle className="text-2xl font-medium tracking-wide">
                Your Bag is empty
              </SheetTitle>
              <SheetDescription className="text-base text-gray-700">
                Sign in to see if you have any saved items. Or continue shopping.
              </SheetDescription>
            </SheetHeader>
            </>
            ) : (
              <>
              {Object.values(cartDetails ?? {}).map((entry) => (
                <li key={entry.id} className="flex py-6">
                  <Image
                    src={entry.image as string}
                    alt="Product image"
                    width={100}
                    height={100}
                    className="object-cover object-center rounded-md h-28 w-28"
                  />
                  <div className="flex flex-col ml-4">
                    <div className="mb-1.5">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{entry.name}</h3>
                        <span className="ml-4">${entry.price}</span>
                      </div>
                      <p className="text-sm leading-5 line-clamp-2 text-gray-600 mt-0.5">
                        {entry.description_1}
                      </p>
                    </div>

                    <div className="flex items-end justify-between text-sm">
                      <p className="text-gray-500">QTY: {entry.quantity}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(entry.id)}
                        className="font-medium text-cyan-700 hover:text-cyan-700/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              </>
            )}
          </div>

          <div className="border-t border-gray-200 py-5">
            {cartCount === 0 ? (
              <>
              <div className="mt-6 flex justify-center text-center font-3xl">
                <button
                  onClick={() => handleCartClick()}
                  className="sc-btn"
                >
                  Continue Shopping
                </button>
              </div>
              </>
              ) : (
              <>
              <div className="px-1.5 flex flex-col mt-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal:</p>
                  <span>${totalPrice}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes are calculated at checkout.
                </p>
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="font-medium text-cyan-700 hover:text-cyan-700/80 self-end mt-6"
                >
                  Check Out
                </button>
              </div>
              </>
            )}
          </div>
        </div>       
      </SheetContent>
    </Sheet>
    </>
  )
}