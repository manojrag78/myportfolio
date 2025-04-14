import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandMysql,
  IconBrandAngular,
  IconSql,
} from "@tabler/icons-react";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Looking For A New Role",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Segregation of Duties (SoD)",
    des: "Divides critical tasks across multiple people to prevent fraud or error by eliminating conflicting responsibilities. It helps reduce the risk of misuse of privileges or unauthorized transactions.",
    img: "/sod.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  },
  {
    id: 2,
    title: "ITGC (IT General Controls)",
    des: "Controls that govern the overall IT environment, ensuring systems are secure, reliable, and support accurate financial reporting. They mitigate risks like unauthorized access, system failures, or data integrity issues.",
    img: "/itgcIcon.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  },
  {
    id: 3,
    title: "ITAC (IT Application Controls)",
    des: "Automated controls embedded in business applications to ensure accuracy, completeness, and validity of transactions. They help reduce the risk of processing errors or fraud in specific processes.",
    img: "/itac.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  },
  {
    id: 4,
    title: "User Access Reviews (UARs)",
    des: "Periodic checks to ensure users have appropriate access based on their roles. They reduce risk by detecting and removing unnecessary, excessive, or outdated permissions.",
    img: "/uar.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Rust",
    img: "/rust.png",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Collaborated with senior developers to build interactive UI components using Angular.js, improved performance by optimizing DOM rendering, and gained hands-on experience in Agile workflows and Git version control.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Engineer - I",
    desc: "Designed and implemented cross-platform mobile applications using React Native, integrated REST APIs, handled device-specific optimizations, and contributed to performance enhancements and bug fixes across both iOS and Android platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Development Engineer - II",
    desc: "Led the end-to-end development of a scalable web pages for a high-profile client, coordinated with UI/UX teams to ensure design consistency and monitored analytics post-deployment to drive iterative improvements.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Architected and maintained complex frontend systems using React, Next.js, and TypeScript. Mentored junior developers, enforced coding standards, conducted performance audits, and collaborated with product managers to deliver high-quality user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/manojrag78",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://www.instagram.com/manoj_rag?igsh=MXdjODIyb3FrOGQ3cA==",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/manoj-kumar-b-a-44593216b/",
  },
];

export const skills = [
  {
    name: "React",
    icon: IconBrandReact,
    color: "#61DAFB",
    id: 3,
    className: "md:col-span-2",
    description:
      "React is a popular JavaScript library for building user interfaces using a component-based architecture.",
  },
  {
    name: "TypeScript",
    icon: IconBrandTypescript,
    color: "#3178C6",
    id: 2,
    className: "md:col-span-2",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, making code more predictable and easier to debug.",
  },
  {
    name: "JavaScript",
    icon: IconBrandJavascript,
    color: "#F7DF1E",
    id: 1,
    className: "md:col-span-2",
    description:
      "JavaScript is a versatile scripting language used to create interactive effects and dynamic behavior on websites.",
  },
  {
    name: "MySQL",
    icon: IconBrandMysql,
    color: "#00758F",
    id: 12,
    className: "md:col-span-2",
    description:
      "MySQL is an open-source relational database management system commonly used in web applications for structured data storage.",
  },
  {
    name: "MSSQL",
    icon: IconSql,
    color: "#004E8C",
    id: 12,
    className: "md:col-span-2",
    description:
      "MSSQL is a relational database management system developed by Microsoft, used for storing and managing structured data in enterprise-level applications.",
  },
  {
    name: "HTML5",
    icon: IconBrandHtml5,
    color: "#E34F26",
    id: 6,
    className: "md:col-span-2",
    description:
      "HTML5 is the standard markup language used for creating the structure of web pages and applications.",
  },
  {
    name: "CSS3",
    icon: IconBrandCss3,
    color: "#1572B6",
    id: 7,
    className: "md:col-span-2",
    description:
      "CSS3 is used for styling HTML elements, allowing developers to design responsive and visually appealing web interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: IconBrandTailwind,
    color: "#38B2AC",
    id: 8,
    className: "md:col-span-2",
    description:
      "Tailwind CSS is a utility-first CSS framework that makes it easy to build custom designs directly in your markup.",
  },
  {
    name: "Git",
    icon: IconBrandGit,
    color: "#F05032",
    id: 10,
    className: "md:col-span-2",
    description:
      "Git is a version control system that tracks code changes, enabling collaborative development and history tracking.",
  },
  {
    name: "Node.js",
    icon: IconBrandNodejs,
    color: "#339933",
    id: 5,
    className: "md:col-span-2",
    description:
      "Node.js is a runtime environment that lets developers run JavaScript on the server side to build scalable backend applications.",
  },
  {
    name: "Angular",
    icon: IconBrandAngular,
    color: "#DD0031",
    id: 11,
    className: "md:col-span-2",
    description:
      "Angular is a TypeScript-based web application framework used for building scalable single-page applications.",
  },
  {
    name: "Next.js",
    icon: IconBrandNextjs,
    color: "#fff",
    id: 4,
    className: "md:col-span-2",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and powerful routing.",
  },
];
