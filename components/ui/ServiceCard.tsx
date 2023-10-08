import { ServiceCard } from "@/types/ServiceCard";

const ServiceCard = ({ service }: { service: ServiceCard }) => {
  return (
    <div className={`bg-neutral-100 rounded-md flex flex-col justify-center py-4 px-4`}>
      <div className="flex flex-col justify-center items-center mb-4">
        {/* <div className="text-5xl">{service.icon}</div> */}
        <h1 className="text-2xl font-semibold">{service.title}</h1>

      </div>

      <p>{service.blurb}</p>
    </div>
  );
};

export default ServiceCard;
