import React from 'react'
import { Metadata } from 'next';
import { Provider } from 'react-redux';
import { store } from '../lib/store';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RegisterLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <section>
      {children}
    </section>  
  )
}
