import { ParagraphType } from './Paragraph.type.ts';

const Paragraph = ({ className, children }: ParagraphType) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
