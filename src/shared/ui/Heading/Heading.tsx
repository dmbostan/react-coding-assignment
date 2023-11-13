import { HeadingType } from './Heading.type.ts';

const Heading = ({ as, className, children }: HeadingType) => {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
