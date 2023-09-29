type SectionTextProps = {
    children: React.ReactNode;
};

const SectionText = ({ children, ...props } : SectionTextProps) => {
  return (
    <div className="font-Poppins font-bold text-5xl text-[#161C2D] mb-6" {...props}>
      {children}
    </div>
  );
};

export default SectionText;
