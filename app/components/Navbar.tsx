'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'
// links
import { products, stories, explore } from './NavbarData'
// styles
import Logo from '../../public/assets/logo.png'
import { useShoppingCart } from 'use-shopping-cart'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { SearchIcon } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname();
  // const { handleCartClick } = useShoppingCart();

  return (
    <header className="px-20 py-2 flex justify-start items-center sticky top-0 z-50 w-full shadow bg-gray-50">
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
      <NavigationMenu>
        <NavigationMenuList className="gap-1 hidden lg:flex">
          {/* ----- HOME ----- */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} nav-item mr-2`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* ----- PRODUCTS ----- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-item bg-transparent">Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-ul">
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <a href="/products" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-transparent">
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
                    </a>
                  </NavigationMenuLink>
                </li>
                <ul className="grid gap-1.5">
                  {products.map(product => (
                    <ListItem
                      key={product.title}
                      title={product.title}
                      href={product.href}
                    >
                      {product.description}
                    </ListItem>
                  ))}
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ----- OUR STORY ----- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-item bg-transparent">Our Story</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-ul">
                {stories.map(story => (
                  <ListItem
                    key={story.title}
                    title={story.title}
                    href={story.href}
                  >
                    {story.description}
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
      <div className="flex flex-grow justify-end space-x-8">
        <button>
          <SearchIcon />
        </button>
        <button
          // onClick={() => handleCartClick()}
        >
          <ShoppingBag />
        </button>
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