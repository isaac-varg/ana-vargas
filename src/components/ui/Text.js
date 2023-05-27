const Text = ({children, font = 'Poppins'}) => {
    return <div className={`font-${font} font-normal text-base subpixel-antialiased`}>
        {children}
    </div>
};

export default Text;