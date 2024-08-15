import {
	// mobile,
	backend,
	// creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	docker,
	angular,
	java,
	python,
	freddiemac,
	mindgrub,
	bitfila,
	posit,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	// {
	//   title: "React Native Developer",
	//   icon: mobile,
	// },
	{
		title: "Backend Developer",
		icon: backend,
	},
	// {
	//   title: "Content Creator",
	//   icon: creator,
	// },
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Angular",
		icon: angular,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Technology Analyst",
		company_name: "Freddie Mac",
		icon: freddiemac,
		iconBg: "#383E56",
		date: "Jun 2022 - Present",
		points: [
			"Developing and maintaining web applications using Angular to simplify testing across organization.",
			"Collaborated with cross-functional team to improve a team's automation suite by accomplishing 85% code coverage in three months.",
			"Deployed Angular application on Amazon EKS service using Jenkins and Kubernetes",
			"Helped 25 teams across the organization to implement parallel testing improving average time to run tests from eight hours to two hours.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Associate Software Engineer",
		company_name: "MindGrub",
		icon: mindgrub,
		iconBg: "#E6DEDD",
		date: "Jun 2021 - Sep 2021",
		points: [
			"Developed a minimum viable product using React, Postman, and Drupal CMS called Hoos Hoo - an HR management tool that allowed employess to learn about their colleagues through gamified experience.",
			"Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
			"Introduced gaming mechanics in the app by adding immersive animations.",
			"Implemented authentication and authorization to prevent users from accessing restricted endpoints.",
			"Implemented responsive design and ensured cross-browser compatibility.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Bit-Fil-A",
		description:
			"Developed by four talented, self-taught developers in their final year of bachelors, Bit-Fil-A is angular CRUD (Create, Read, Update, and Delete) application inspired by Chick-Fil-A.",
		tags: [
			{
				name: "Angular",
				color: "blue-text-gradient",
			},
		],
		image: bitfila,
		source_code_link: "https://github.com/sidharthpatel/Bit-fil-a",
	},
	{
		name: "Post-it",
		description:
			"A MEAN Stack application that allows users to add public notes with images attached to it. Post-it has features such as user authorization and authentication, error handling, AWS S3 bucket connection to store images, and much more!",
		tags: [
			{
				name: "Angular",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Node.js",
				color: "pink-text-gradient",
			},
			{
				name: "Express",
				color: "blue-text-gradient",
			},
			{
				name: "AWS",
				color: "green-text-gradient",
			},
			{
				name: "Heroku",
				color: "pink-text-gradient",
			},
		],
		image: posit,
		source_code_link:
			"https://github.com/sidharthpatel/post-it-frontend#readme",
	},
	// {
	//   name: "Car Rent",
	//   description:
	//     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	//   tags: [
	//     {
	//       name: "react",
	//       color: "blue-text-gradient",
	//     },
	//     {
	//       name: "mongodb",
	//       color: "green-text-gradient",
	//     },
	//     {
	//       name: "tailwind",
	//       color: "pink-text-gradient",
	//     },
	//   ],
	//   image: carrent,
	//   source_code_link: "https://github.com/",
	// },
	// {
	//   name: "Job IT",
	//   description:
	//     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	//   tags: [
	//     {
	//       name: "react",
	//       color: "blue-text-gradient",
	//     },
	//     {
	//       name: "restapi",
	//       color: "green-text-gradient",
	//     },
	//     {
	//       name: "scss",
	//       color: "pink-text-gradient",
	//     },
	//   ],
	//   image: jobit,
	//   source_code_link: "https://github.com/",
	// },
	// {
	//   name: "Trip Guide",
	//   description:
	//     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	//   tags: [
	//     {
	//       name: "nextjs",
	//       color: "blue-text-gradient",
	//     },
	//     {
	//       name: "supabase",
	//       color: "green-text-gradient",
	//     },
	//     {
	//       name: "css",
	//       color: "pink-text-gradient",
	//     },
	//   ],
	//   image: tripguide,
	//   source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
