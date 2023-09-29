type FormTextAreaProps = {
    register: any;
    name: string;
    errors: any;
    placeholder: string;
}

const FormTextArea = ({ register, name, errors, placeholder } : FormTextAreaProps) => {
    return (
      <>
        <div className="w-full mb-6 md:mb-0">
          <input
            type="text"
            placeholder={placeholder}
            {...register(name)}
            className={`${
              errors[name] ? "border-red-500" : ""
            } appearance-none block w-full bg-[#f6f6f6] text-gray-700 border border-[#f6f6f6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id={name}
          />
          {errors[name] && (
            <div className="mb-4">
              <p className="text-red-500 text-xs ">{errors[name].message}</p>
            </div>
          )}
        </div>
      </>
    );
  };
  
  export default FormTextArea;
  