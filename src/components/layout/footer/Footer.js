import { DateTime } from "luxon";

const Footer = () => {
  const date = DateTime.now();
  return (
    <>
      <div className="bottom-0 items-center flex justify-center my-6">
        <span className="text-xs font-bold font-Inter uppercase">© {date.year} Ana Vargas</span>
      </div>
    </>
  );
};

export default Footer;
