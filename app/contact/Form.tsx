"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormTextField from "@/components/ui/form/FormTextField";
import FormTextArea from "@/components/ui/form/FormTextArea";
import { useToast } from "@/components/ui/use-toast"


const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z
    .string()
    .min(10, {
      message:
        "It appears your message is too short. Please provide a little bit more information.",
    }),
});

const FormSection = () => {

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmission = async (values: z.infer<typeof schema>) => {

    const response = await fetch('/contact/send', {
      method: 'POST',
      body: JSON.stringify(values)
    })

    if (response.status !== 200) {
      toast({
        title: "Error Sending Message",
        description: "Oops! Something went wrong. Try again or contact me manually using one of the methods on this page.",
        variant: "destructive"
      });
    }
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I will be in touch soon.",
      variant: "success"
    });
  };

  return (
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
  );
};

export default FormSection;
