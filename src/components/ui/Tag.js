const Tag = ({tagName = 'All', onTagClick, selectedTag, id}) => {

    const isSelected = selectedTag === tagName;

    return (
      
        <div className="mb-6" key={id}>
          <button onClick={onTagClick.bind(null, tagName)} className={`font-Poppins text-base text-gray-800 font-bold uppercase tracking-wide mb-6 ${!isSelected ? 'hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse' : ''} ${isSelected ? 'bg-[#ffd4de] rounded-md' : ''} px-4 py-2`}>{tagName}</button>
        </div>
      
    );
  };
  
  export default Tag;
  