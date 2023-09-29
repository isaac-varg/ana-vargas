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

    <div className="grid grid-cols-3 gap-x-8 mb-20">
      <div className="flex flex-col space-y-8 col-span-1">
        <SectionText>{servicesSectionTitle}</SectionText>

        {servicesSectionDescriptions.map((description) => {
          return <p key={Math.random()}>{description}</p>;
        })}
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-x-8 gap-y-8">
        {servicesCards.map((service) => {
          return <ServiceCard key={Math.random()} service={service} />;
        })}
      </div>
    </div>
        </div>
  );
};

export default ServicesSection;
