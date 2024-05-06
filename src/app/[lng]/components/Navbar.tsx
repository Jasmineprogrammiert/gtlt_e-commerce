'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// links
import { products, stories, explore } from './Data/NavbarData'
// styles
import Logo from '../../../../public/assets/logo.png'
import { useShoppingCart } from 'use-shopping-cart'
import { cn } from '@/lib/utils'
import { Menu, User, LogOut, ShoppingBag } from 'lucide-react'
// components
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './NavMenu'
import Sidebar from './Sidebar'
import { logout } from '../(auth)/actions'

export const dynamic = 'force-dynamic';

export default function Navbar({ 
  user, 
}: { 
  user: any,
}) {
  const { handleCartClick } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 z-50 w-full shadow px-10 py-1.5 lg:px-20 lg:py-2 flex justify-start items-center bg-gray-50 h-[4.5rem]">
      <Link href="/" className="mr-8">
        <Image
          src={Logo}
          alt="Gutolution Logo"
          className="m-auto"
          width={45}
          height={45}
        />
        <h1 className="text-base font-bold">
          Gut<span className="theme-color">olution</span>
        </h1>
      </Link>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavigationMenu>
        <NavigationMenuList className="gap-1 hidden lg:flex">
          {/* ----- HOME ----- */}
          {/* <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} nav-item mr-2`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          {/* ----- PRODUCTS ----- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-item bg-transparent">Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-ul">
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/products" 
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-transparent"
                    >
                      <Image
                        src={Logo}
                        alt="Gutolution Logo"
                        width={50}
                        height={50}
                      />
                      <div className="text-base font-medium mt-2">Something here</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="grid gap-1.5">
                  {products.map(p => (
                    <ListItem
                      key={p.title}
                      title={p.title}
                      href={p.href}
                    >
                      {p.description}
                    </ListItem>
                  ))}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ----- OUR STORY ----- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-item bg-transparent">Our Story</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-ul">
                {stories.map(s => (
                  <ListItem
                    key={s.title}
                    title={s.title}
                    href={s.href}
                  >
                    {s.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ----- EXPLORE ----- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-item bg-transparent">Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-ul">
                {explore.map(ex => (
                  <ListItem
                    key={ex.title}
                    title={ex.title}
                    href={ex.href}
                  >
                    {ex.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-grow items-center justify-end space-x-8">
        {user ? (
          <>
          <span className="text-gray-800 max-md:hidden">Hello, {user.email}</span>
          <button onClick={() => handleCartClick()}><ShoppingBag /></button>
          <form action={logout}><button className="mt-1.5"><LogOut /></button></form>
          <button
            type="button"
            className="inline-flex items-center lg:hidden"
            onClick={toggle}
          >
            <Menu />
          </button>
          </>
        ) : (
          <>
          <Link href="/login"><User /></Link>
          <button onClick={() => handleCartClick()}><ShoppingBag /></button>
          <button
            type="button"
            className="inline-flex items-center lg:hidden"
            onClick={toggle}
          >
            <Menu />
          </button>
          </>
         )}        
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem";