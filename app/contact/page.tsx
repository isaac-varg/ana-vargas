import ContactInfo from "./ContactInfo";
import FormSection from "./Form";
import BigText from "@/components/ui/BigText";

const ContactPage = () => {
  return (
    <div className="px-4 lg:px-32 pt-4 lg:pt-24 flex flex-col sm:flex-row space-x-26">
      <div className="flex flex-col w-auto sm:w-1/2">
        <BigText>{"Let's"} chat</BigText>

        <div className="mb-12">
          <p>
            Have a project or an open position. Send me a message. I typically
            respond within 24 hours.
          </p>
        </div>
        <FormSection />
      </div>
      <div className="flex flex-col justify-center items-center w-auto sm:w-1/2">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
