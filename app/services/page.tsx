
import AvailabilitySection from "./AvailabilitySection";
import PricingSection from "./PricingSection";
import ServicesSection from "./ServicesSection";

const ServicesPage = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-start p-24">

        <ServicesSection />
        
        <PricingSection />

        <AvailabilitySection />
      </main>
    </>
  );
};

export default ServicesPage;
