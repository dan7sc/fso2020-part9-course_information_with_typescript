import React from 'react';
import Part, { CoursePart } from './Part';

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <Part parts={courseParts} />
  );
}

export default Content;
