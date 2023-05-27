import { useRouter } from "next/router";

const BigButton = ({children, path = '/'}) => {

    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        router.push(path);
    }


    return <>
        <button onClick={handleClick} className="bg-[#ffd4de] py-4 px-6 rounded-full text-base text-gray-800 font-Poppins font-semibold uppercase hover:-translate-y-4 transition-all duration-300 ease-in-out">
            {children}
        </button>
    </>
};

export default BigButton;