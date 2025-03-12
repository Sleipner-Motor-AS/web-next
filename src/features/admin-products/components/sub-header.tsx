import { useField } from '@payloadcms/ui';

type Props = {
  value: string;
};

export const SubHeader = ({ value }: Props) => {
  return <h3>{value}</h3>;
};
