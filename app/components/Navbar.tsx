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
} from '@/components/ui/navigation-menu'

const products: { title: string; href: string; description: string }[] = [
  {
    title: "GUTolution™ Adults | Precision Probiotics Program",
    href: "/products/adults-precision-probiotics-program",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "GUTolution™ Microbiome Test Pro",
    href: "/products/gut-health-test",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec",
  },
  {
    title: "[Pre-Order] GUTolution™ Microbiome Disease Risk Test",
    href: "/products/microbiome-disease-risk-test",
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

  return (
    <>
    <header className='my-4'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-4xl font-bold'>
            Gut<span className='text-primary'>olution</span>
          </h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className='hidden gap-12 lg:flex 2xl:ml-16'>
            {/* ----- HOME ----- */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="nav-item pr-6">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* ----- PRODUCTS ----- */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-item">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <span>An icon</span>   
                        <div className="mb-2 mt-4 text-lg font-medium">Something</div>
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
              <NavigationMenuTrigger className="nav-item">
                Our Story
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
              <NavigationMenuTrigger className="nav-item">
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
