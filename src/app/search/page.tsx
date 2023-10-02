'use client';

import { Navbar } from '@/components/layouts/Navbar';
import { Search } from '@/components/pages/Search';

import { Fragment } from 'react';

export default function SearchPage() {
  return (
    <Fragment>
      <Navbar />
      <Search />
    </Fragment>
  );
}
