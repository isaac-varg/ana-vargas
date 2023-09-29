import { PriceOption } from '@/types/PriceCard';

const PriceCard = ({ priceOption }: { priceOption: PriceOption }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-800">{priceOption.title}</h1>
        <h2 className="text-base text-gray-600 mt-2">{priceOption.subtitle}</h2>
      </div>

      <hr className="mx-auto border-t-2 w-4/5 border-gray-200" /> 


      <div className="px-6 py-6">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-primary">${priceOption.price}</h1>
        </div>
        <div className="text-center text-gray-600 mt-2">{priceOption.term}</div>
      </div>

      <hr className="mx-auto border-t-2 w-4/5 border-gray-200" /> 


      <div className="px-6 py-4">
        <ul className="list-disc list-inside text-gray-600">
          {priceOption.info.map((info) => (
            <li key={info} className="mb-2">
              {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
