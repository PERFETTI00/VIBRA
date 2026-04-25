/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { History } from '@/src/components/sections/History';
import { Flavors } from '@/src/components/sections/Flavors';
import { Moments } from '@/src/components/sections/Moments';
import { Commitment } from '@/src/components/sections/Commitment';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <History />
        <Flavors />
        <Moments />
        <Commitment />
      </main>
      <Footer />
    </div>
  );
}
