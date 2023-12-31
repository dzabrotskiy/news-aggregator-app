'use client';

import { Navbar } from '@/components/layouts/Navbar';
import { Home } from '@/components/pages/Home';

import { Fragment } from 'react';

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}
