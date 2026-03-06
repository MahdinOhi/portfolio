interface SkillTagProps {
  name: string;
  color?: string;
}

const SkillTag = ({ name, color = "bg-primary" }: SkillTagProps) => {
  return (
    <span className={`brutal-tag ${color} inline-block`}>
      {name}
    </span>
  );
};

export default SkillTag;
