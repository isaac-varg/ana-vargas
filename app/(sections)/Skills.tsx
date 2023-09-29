import SectionText from "@/components/ui/SectionText";
import SkillCard from "@/components/ui/SkillCard";
import { skillsCards, skillsSectionHeading } from "@/configs/skillsSection";

const Skills = () => {
  return (
    <div className="sm:mb-32 mb-16 mt-12">
      <SectionText>{skillsSectionHeading}</SectionText>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-0 sm:gap-y-4">
        {skillsCards.map( skill => {
          return <SkillCard title={skill.title} blurbText={skill.blurbText} />
        })}
      </div>
    </div>
  );
};

export default Skills;
