import {
  servicesCards,
  servicesSectionDescriptions,
  servicesSectionHeading,
  servicesSectionTitle,
} from "@/configs/servicesPage";
import HeadingText from "@/components/ui/HeadingText";
import SectionText from "@/components/ui/SectionText";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="mb-10">
      <HeadingText textColor="text-zinc-700">{servicesSectionHeading}</HeadingText>

      <div className="md:grid md:grid-cols-3 md:gap-x-8 mb-8">
        <div className="md:flex md:flex-col md:space-y-8 md:col-span-1">
          <SectionText>{servicesSectionTitle}</SectionText>

          {servicesSectionDescriptions.map((description) => {
            return <p key={Math.random()}>{description}</p>;
          })}
        </div>

        <div className="md:col-span-2 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-8 md:gap-y-8 mt-4 sm:mt-0">
          {servicesCards.map((service) => {
            return <ServiceCard key={Math.random()} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
