import HeroSection from '@/components/HomePage/HeroSection'
import React from 'react'
// import page from "./AboutUs/page"
import Contact from '@/components/Contact/Contact'
import LocationCard from '@/components/LocationCard/LocationCard'
import ContactForm from '@/components/ContactForm/ContactForm'



const page = () => {
  const locations = [
    {
      location: "Harlingen, Scotland",
      address: "Noorderhaven 24",
      city: "Friesland, Harlingen",
      phone: "0517 431 616"
    },
    {
      location: "Oslo, Norway",
      address: "Noorderhaven 24",
      city: "Friesland, Harlingen",
      phone: "0517 431 616"
    },
    {
      location: "Stockholm, Sweden",
      address: "Noorderhaven 24",
      city: "Friesland, Harlingen",
      phone: "0517 431 616"
    }
  ];
  return (
 <div>
  <Contact />
   <section className="py-8">
        <h2 className="mb-8 text-2xl font-bold text-center">Our Locations</h2>
        <div className="flex flex-wrap justify-center">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location.location}
              address={location.address}
              city={location.city}
              phone={location.phone}
            />
          ))}
        </div>
      </section>
      <section className="py-8">
        <ContactForm />
      </section>
 </div>
  )
}

export default page