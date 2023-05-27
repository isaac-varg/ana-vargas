import ServiceCard from "../ui/ServiceCard";

import serviceData from "../../data/servicesData";

const createService = (data) => {
  return (
    <ServiceCard
      key={data.title}
      image={data.image}
      title={data.title}
      blurbText={data.blurbText}
      longText={data.longText}
      extendCard={data.extendCard}
    />
  );
};

const Services = () => {
  return (
    <>
      <div className="sm:mb-40 mb-16">
        <div className="font-Poppins font-bold text-5xl text-[#161C2D] mb-6">
          What I do
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-0 sm:gap-y-4">
          {serviceData.map(createService)}
        </div>
      </div>
    </>
  );
};

export default Services;
