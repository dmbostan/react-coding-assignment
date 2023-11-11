import { HeadingTypes } from './Heading.types.ts';

const Heading = ({ as, className, children }: HeadingTypes) => {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
