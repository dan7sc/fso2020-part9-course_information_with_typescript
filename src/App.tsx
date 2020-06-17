import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import { CoursePart } from './components/Part';

const App: React.FC = () => {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      description: "This is a course part about props"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "My course part interface",
      exerciseCount: 34,
      description: "My description",
      exerciseSubmissionLink: "https://fake-sumission.dev",
      groupProjectCount: 2,
      exerciseScores: ['A', 'B', 'C', 'D', 'E']
    }
  ];

  const courseExerciseSum = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total exerciseSum={courseExerciseSum} />
    </div>
  );
}

export default App;
