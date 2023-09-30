import {
  pricingOptions,
  pricingSectionDescription,
  pricingSectionHeading,
  pricingSectionTitle,
} from "@/configs/servicesPage";
import PriceCard from "@/components/ui/PriceCard";
import HeadingText from "@/components/ui/HeadingText";
import SectionText from "@/components/ui/SectionText";

const PricingSection = () => {
  return (
    <div className="mb-16 md:mb-32">
      <HeadingText textColor="text-zinc-700">{pricingSectionHeading}</HeadingText>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 mb-8">
        <div className="md:col-span-1">
          <SectionText>{pricingSectionTitle}</SectionText>
        </div>
        <div className="md:col-span-2">
          <p>{pricingSectionDescription}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option) => {
          return <PriceCard key={option.title} priceOption={option} />;
        })}
      </div>
    </div>
  );
};

export default PricingSection;
