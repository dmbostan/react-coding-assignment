import { ParagraphTypes } from './Paragraph.types.ts';

const Paragraph = ({ className, children }: ParagraphTypes) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
