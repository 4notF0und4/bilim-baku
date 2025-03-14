// app/contact/layout.tsx
import React from 'react';
import { ReactNode } from 'react';

const ContactLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
};

export default ContactLayout;

