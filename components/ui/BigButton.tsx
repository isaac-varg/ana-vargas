"use client"
import { useRouter } from "next/navigation";


type BigButtonProps = {
    children: React.ReactNode;
    path: string;
}

const BigButton = ({children, path = '/'}: BigButtonProps) => {

    const router = useRouter();

    return <>
        <button onClick={() => router.push(path)} className="bg-[#ffd4de] py-4 px-6 rounded-full text-base text-gray-800 font-Poppins font-semibold uppercase hover:-translate-y-4 transition-all duration-300 ease-in-out">
            {children}
        </button>
    </>
};

export default BigButton;