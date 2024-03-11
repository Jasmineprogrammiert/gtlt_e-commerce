'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
// styles
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
import { useShoppingCart } from 'use-shopping-cart'

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Adults | Precision Probiotics Program",
    href: "/products/precision-probiotics-program",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Microbiome Test Pro",
    href: "/products/microbiome-test-pro",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "[Pre-Order] | Microbiome Disease Risk Test",
    href: "/products/microbiome-disease-risk-test",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Dummy | Pro Precision Probiotics Program",
    href: "/products/dummy-pro-precision-probiotics-program",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
]

const stories: { title: string; href: string; description: string }[] = [
  {
    title: "Mission",
    href: "/mission",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Team",
    href: "/team",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "News",
    href: "/news",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Join Us",
    href: "/join-us",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
]

const explore: { title: string; href: string; description: string }[] = [
  {
    title: "Technology",
    href: "/technology",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "Health Blog",
    href: "/health-blog",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "FAQ",
    href: "/faq",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
]

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Explore', href: '/explore' },
]

export default function Navbar() {
  const pathname = usePathname();
  // const { handleCartClick } = useShoppingCart();

  return (
    <>    
    <header className="mb-20 nav-sticky">
      <div className="flex justify-start items-center mx-auto max-w-7xl sm:px-6 lg:max-w-full">
        <Link href="/">
          <h1 className="text-3xl font-bold mr-12">
            Gut<span className="text-primary">olution</span>
          </h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex gap-1">
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
                      <a href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-transparent">
                        <span>An icon</span>   
                        <div className="text-base font-medium mt-2">Something</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ul className="grid gap-3">
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
              <NavigationMenuTrigger className="nav-item mr-64 bg-transparent">
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
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

        <button className="nav-icon ml-80 mr-9">
          <SearchIcon />
        </button>
        <button className="nav-icon mr-10"
          // onClick={() => handleCartClick()}
        >
          <ShoppingBag />
        </button>
      </div>
    </header>
    </>
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
ListItem.displayName = "ListItem"
