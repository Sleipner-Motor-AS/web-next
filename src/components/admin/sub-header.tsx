type SubHeaderProps = {
  value: string;
};

export const SubHeader = ({ value }: SubHeaderProps) => {
  return <h3>{value}</h3>;
};
