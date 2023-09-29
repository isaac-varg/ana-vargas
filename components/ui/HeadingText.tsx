type HeadingTextProps = {
    children: React.ReactNode;
    textColor?: string;
}
const HeadingText = ( { children, textColor } : HeadingTextProps) => {
  return (
    <div className={`font-Poppins text-base ${textColor} font-bold uppercase tracking-wide mb-6`}>
    {children}
  </div>
  )
}

export default HeadingText