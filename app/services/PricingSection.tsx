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
    <div className="mb-32">
         <HeadingText textColor="text-zinc-700">
            {pricingSectionHeading}
          </HeadingText>
      <div className="grid grid-cols-3 gap-x-8 mb-20">
        <div className="col-span-1">
       
          <SectionText>{pricingSectionTitle}</SectionText>
        </div>
        <div className="col-span-2">
          <p>{pricingSectionDescription}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ">
        {/* <div className="flex justify-evenly space-x-4"> */}
        {pricingOptions.map((option) => {
          return <PriceCard key={option.title} priceOption={option} />;
        })}
      </div>
    </div>
  );
};

export default PricingSection;
