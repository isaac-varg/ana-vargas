import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "@/components/ui/FormTextField";
import FormTextArea from "@/components/ui/FormTextArea";
import BigText from "@/components/ui/BigText";
import Text from "@/components/ui/Text";
import Socials from "@/components/sections/Socials";
import SubmitModal from "@/components/ui/SubmitModal";
import { useState } from "react";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Message Sent",
    text: "I'll be in touch soon",
    status: "success",
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmission = async ({ name, email, subject, message }) => {
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status !== 200) {
      setModalContent({
        title: "Error Sending Message",
        text: "Oops! Something went wrong. Try again or contact me using one of the methods on the left.",
        status: "error",
      });
    }

    setModalIsOpen(true);
  };

  return (
    <>
      <SubmitModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        confirmButtonLabel="Close"
        onConfirm={closeModal}
        title={modalContent.title}
        status={modalContent.status}
      >
        {modalContent.text}
      </SubmitModal>
      <div className="px-4 lg:px-32 pt-4 lg:pt-24 flex flex-col sm:flex-row space-x-26">
        <div className="flex flex-col w-auto sm:w-1/2">
          <BigText justify="start">Let's chat</BigText>

          <div className="mb-12">
            <Text>
              Have a project or an open position. Send me a message. I typically
              respond within 24 hours.
            </Text>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmission)}
            className="w-full max-w-lg justify-start"
          >
            <div className="flex flex-wrap mb-6">
              <FormTextField
                register={register}
                name="name"
                errors={errors}
                placeholder="Your name"
              />

              <FormTextField
                register={register}
                name="email"
                errors={errors}
                placeholder="Email address"
              />

              <FormTextField
                register={register}
                name="subject"
                errors={errors}
                placeholder="Subject"
              />

              <FormTextArea
                register={register}
                name="message"
                errors={errors}
                placeholder="Write your message"
              />

              <button
                type="submit"
                className="bg-[#ffd4de] mt-0 sm:mt-6 py-4 px-6 rounded-full text-base text-gray-800 font-Poppins font-semibold uppercase hover:-translate-y-4 transition-all duration-300 ease-in-out"
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-auto sm:w-1/2">
          <div className="bg-[#F8EDEB] pl-6 lg:pl-12 pr-20 lg:pr-32 py-4 lg:py-12 rounded-md">
            <div className="mb-6">
              <p className="text-2xl font-Poppins antialiased  mb-2">Email </p>
              <Text>
                <a href="mailto:contact@anavargas.design">
                  contact@anavargas.design
                </a>
              </Text>
            </div>
            <div className="mb-6">
              <p className="text-2xl font-Poppins antialiased  mb-2">Phone </p>
              <Text>
                <a href="tel:19514078104">+1 (951) 407-8104</a>
              </Text>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-Poppins antialiased mb-3">Social </p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
