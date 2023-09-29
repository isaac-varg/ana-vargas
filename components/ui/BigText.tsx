type BigTextProps = {
    children: React.ReactNode;
}
const BigText = ({ children } : BigTextProps) => {
  return (
    <div className="font-Poppins font-bold text-4xl md:text-4xl lg:text-7xl text-[#161C2D] mb-6">
    {children}
    </div>
  )
}

export default BigText