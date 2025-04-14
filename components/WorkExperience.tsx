import React from "react";
import { Timeline } from "./ui/timeline";
const timelineData = [
  {
    title: "Software Development Engineer - II",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl">
        <li>
          Led a team of 5 front-end developers, managing client requirements and
          contributing to architectural planning, resulting in a 20% faster
          project delivery time.
        </li>
        <li>
          Implemented Storybook (UI Testing), Jest (Unit Testing), and
          Playwright (End-to-End Testing), reducing deployment errors by 30% and
          improving release cycles by 15%.
        </li>
        <li>
          Achieved 80% test coverage across the codebase, enhancing application
          stability and reducing production bugs by 25%.
        </li>
        <li>
          Developed reusable modules, improving development consistency and
          reducing redundant code by 40%.
        </li>
        <li>
          Implemented and managed Monorepo solutions, ensuring streamlined
          codebase maintenance and scalability across projects.
        </li>
        <li>
          Designed and implemented Micro Frontend Architectures, enabling
          independent deployment of features and reducing deployment downtime.
        </li>
      </ul>
    ),
  },
  {
    title: "Software Development Engineer - I",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl">
        <li>
          Adapted to programming languages and frameworks based on project
          requirements, delivering 100% on-time project completion.
        </li>
        <li>
          Analyzed and interpreted user requirements for 3+ projects, reducing
          miscommunication and rework by 15%.
        </li>
        <li>
          Collaborated with 10+ clients to understand design needs and
          recommended optimal solutions, improving client satisfaction scores by
          20%.
        </li>
        <li>
          Delivered clean, error-free code with a 95% reduction in
          post-deployment bugs compared to previous benchmarks.
        </li>
        <li>
          Worked cross-functionally with 3+ teams to resolve complex challenges,
          reducing development bottlenecks by 25%.
        </li>
        <li>
          Oversaw programming and QA functions, achieving a 98% defect-free
          release rate for all deliverables.
        </li>
      </ul>
    ),
  },
  {
    title: "Software Development Engineer - Trainee",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl">
        <li>
          Mastered Angular framework for building dynamic single-page
          applications, completing 5+ projects with complex state management.
        </li>
        <li>
          Developed proficiency in Node.js and Express.js, building RESTful APIs
          with authentication and database integration.
        </li>
        <li>
          Gained expertise in both MySQL and MSSQL database systems, designing
          optimized schemas and writing complex queries.
        </li>
        <li>
          Implemented full-stack applications using Angular frontend with
          Node.js backend and SQL databases.
        </li>
      </ul>
    ),
  },
];

const WorkExperience = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold py-10">
        Work <span className="text-purple"></span> History
      </h1>
      <Timeline data={timelineData} />
    </>
  );
};

export default WorkExperience;
