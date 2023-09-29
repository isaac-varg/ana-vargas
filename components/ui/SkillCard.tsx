type SkillCardProps = {
    title: string;
    blurbText: string;
}

const SkillCard = ({ title, blurbText } : SkillCardProps) => {
  return (
    <div
        className={`rounded-md py-6 px-4 hover:bg-slate-100`}
      >
        <h1 className="font-Poppins text-[#1f1f1f] text-2xl font-bold mb-2 h-16 overflow-hidden">
          {title}
        </h1>
        <p className="font-Poppins font-normal text-base subpixel-antialiased ">
          {blurbText}
        </p>
      </div>
  )
}

export default SkillCard