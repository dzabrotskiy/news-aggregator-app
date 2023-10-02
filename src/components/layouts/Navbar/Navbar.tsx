import { menuItems } from '@/components/layouts/Navbar/constants';
import { useNewsStore } from '@/store/NewsStore';

import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Tooltip } from '@nextui-org/tooltip';
import NextLink from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const { setSearchModalOpened } = useNewsStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextNavbar shouldHideOnScroll={false}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand>
        <NextLink href="/">
          <Tooltip showArrow={true} content="Best News Aggregator">
            <p className="font-bold text-inherit cursor-pointer">BNA</p>
          </Tooltip>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Feed
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onPress={() => setSearchModalOpened(true)}
            color="primary"
            href="#"
            variant="flat"
          >
            Search
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}
