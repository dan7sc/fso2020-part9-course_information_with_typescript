import React from 'react';

interface CoursePartDescription {
  description: string;
}

interface CoursePartBase  extends CoursePartDescription {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartBase {
  name: "My course part interface";
  groupProjectCount: number;
  exerciseSubmissionLink: string;
  exerciseScores: string[];
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const isUpperCase = (letter: string): boolean => {
  return letter === letter.toUpperCase();
}

const separateWords = (words: string): string => {
  const str: string[] = [];

  for (let i = 0; i < words.length; i++) {
    if (isUpperCase(words[i])) {
      str.push(' ');
      str.push(words[i].toLowerCase());
    } else {
      str.push(words[i]);
    }
  }

  return str.join('');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getOptionalValues = (object: any) => {
  const optValues: string[] = [];
  const valuesMap = new Map();

  for (const key in object) {
    if (key !== 'name' && key !== 'exerciseCount' && key !== 'description') {
      valuesMap.set(key, object[key]);
    }
  }

  valuesMap.forEach((value, key) => {
    optValues.push(`${separateWords(key)}: ${value}`);
  });

  return optValues;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateDiv = (part: CoursePart): any => {
  return (
    <div key={part.name}>
      <h3>{part.name}</h3>
      <div>number of exercises: {part.exerciseCount}</div>
      <div>description: {part.description}</div>
      {getOptionalValues(part).map(value => <div key={value}>{value}</div>)}
    </div>
  );
};

const Part: React.FC<{ parts: CoursePart[] }> = ({ parts }) => {
  return (
    <div>
      {parts.map(part => {
        switch(part.name) {
          case 'Fundamentals':
            return generateDiv(part);
          case 'Using props to pass data':
            return generateDiv(part);
          case 'Deeper type usage':
            return generateDiv(part);
          case 'My course part interface':
            return generateDiv(part);
          default:
            return assertNever(part);
        }
      })}
    </div>
  )
};

export default Part;
