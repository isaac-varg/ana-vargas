import SocialHandles from '@/components/ui/SocialHandles'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-[#F8EDEB] pl-6 lg:pl-12 pr-20 lg:pr-32 py-4 lg:py-12 rounded-md">
      <div className="mb-6">
        <p className="text-2xl font-Poppins antialiased  mb-2">Email </p>
        <p>
          <a href="mailto:contact@anavargas.design">
            contact@anavargas.design
          </a>
        </p>
      </div>
      <div className="mb-6">
        <p className="text-2xl font-Poppins antialiased  mb-2">Phone </p>
        <p>
          <a href="tel:19514078104">+1 (951) 407-8104</a>
        </p>
      </div>

      <div className="mb-6">
        <p className="text-2xl font-Poppins antialiased mb-3">Social </p>
        <SocialHandles />
      </div>
    </div>
  
  )
}

export default ContactInfo