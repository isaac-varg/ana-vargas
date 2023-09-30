import { ServiceCard } from "@/types/ServiceCard";

const ServiceCard = ({ service }: { service: ServiceCard }) => {
  return (
    <div className={`bg-neutral-100 rounded-md flex flex-col justify-center py-4 px-4`}>
      <div className="flex justify-center mb-2">
        <div className="text-5xl">{service.icon}</div>
      </div>

      <h1 className="font-semibold">{service.title}</h1>
      <p>{service.blurb}</p>
    </div>
  );
};

export default ServiceCard;
