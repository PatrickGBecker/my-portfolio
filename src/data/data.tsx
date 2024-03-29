import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.png';
import portfolioImage1 from '../images/portfolio/lit-salon.png';
import portfolioImage2 from '../images/portfolio/rancid-tomatillos.png';
import portfolioImage3 from '../images/portfolio/daily-dispatch.png';
import portfolioImage4 from '../images/portfolio/tiltons-therapy.png'
import portfolioImage5 from '../images/portfolio/mock-search-app.png';
import portfolioImage6 from '../images/portfolio/muck-savage.png';
import portfolioImage7 from '../images/portfolio/graphic-design.png';
import profilepic from '../images/Headshot.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Patrick Becker\'s Portfolio',
  description: "Portfolio site built with NextJS, TypeScript and Tailwind",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Patrick Becker.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Kansas City based <strong className="text-stone-100">Front-End Software Developer</strong>, currently 
         <strong className="text-stone-100"> looking for a company</strong> that needs an enthusiastic, collaborative & creative person on their team.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me strumming my <strong className="text-stone-100">guitar & mandolin</strong>,
        illustrating <strong className="text-stone-100">unique ideas</strong>, and exploring beautiful{' '}
        <strong className="text-stone-100">hiking trails</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../../resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm really interested in creating applications that people actually enjoy using. I know how to work with JavaScript, React, TypeScript, Next.js, HTML/CSS, GraphQL, Wordpress, Squarespace and Salesforce. I thoroughly enjoy making progressive web apps that are accessible for everyone. I'm currently freelancing as a Web Developer & Graphic Designer to built my industry knowledge and keep my skills sharp. The money doesn't hurt, either.  I'm also recreating various popular applications. Please message me to chat about anything and everything.`,
  aboutItems: [
    {label: 'Location', text: 'Independence, MO', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American-Irish / Bolivian', Icon: FlagIcon},
    {label: 'Interests', text: 'Traditional Irish Music, The Art of Zdzislaw Beksinski, Mythology', Icon: SparklesIcon},
    {label: 'Study', text: 'Turing School of Software & Design', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Possibly Your Company', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
       {
        name: 'JavaScript',
        level: 8
      },
      {
        name: 'React',
        level: 8
      },
      {
        name: 'Typescript',
        level: 6
      },
      {
        name: 'Next.js',
        level: 8
      },
       {
        name: 'CSS & SCSS',
        level: 9
      },
       {
        name: 'HTML',
        level: 9
      },
      {
        name: 'GraphQL',
        level: 5
      },
      {
        name: 'Wordpress',
        level: 7
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tilton\'s Therapy',
    description: 'This website was built for customers of Tilton\'s Therapy. It is a responsive site built in Squarespace. The purpose of this site was to create a responsive UI/UX design, display downloadable content for customers, encourage contact with therapists, provide an easy way for users to book appointments and a careers page that displays the company\'s job openings.',
    url: 'https://www.tiltonstherapy.com/',
    image: portfolioImage4,
  },
  {
    title: 'Las Vegas Lit',
    description: 'A Squarespace website created for Las Vegas Lit. The purpose of this site was to create a responsive UI/UX design, display upcoming events for readers and writers, encourage contact with the company, provide an easy way for users to purchase local writing and an about page that displays the company\'s mission statement.',
    url: 'https://lvlitsalon.squarespace.com',
    image: portfolioImage1,
  },
  {
    title: 'Mock-Search-App',
    description: 'An educational web app built with Next.js, Tailwind CSS and Mapbox. The purpose of this app was to create date & calendar functionality, search functionality that displays all listings, an image carousel, loading bars, Mapbox functionality and responsive UI/UX design implementations. Please note that most of the main page is for display only and the search functionality is limited to only populate results from downtown London. No personal information is taken from the user.',
    url: 'https://mock-search-app.vercel.app/',
    image: portfolioImage5,
  },
  {
    title: 'Rancid Tomatillos',
    description: 'React application that displays a movie catalog with functionality to see individual movie summaries through dynamic searching, and relevant movie trailers from YouTube on the details page. Implementation of React Router, E2E Cypress testing and deployment to Heroku.',
    url: 'https://patrickgbecker.github.io/rancidTomatillos/',
    image: portfolioImage2,
  },
  {
    title: 'The Daily Dispatch',
    description: 'This project was an 8-hour coding challenge. The Daily Dispatch allows users to browse article samples from various sections of The New York Times. The samples also include links to the full articles.',
    url: 'https://daily-dispatch.vercel.app/',
    image: portfolioImage3,
  },
  {
    title: 'Muck Savage website',
    description: 'This is a website I created for my band, Muck Savage. It is a responsive site built in Wordpress. The purpose of this site was to create a responsive UI/UX design, a contact form that sends an email to the band, an easy way for users to hear our music and a page that displays the history of our performances.',
    url: 'https://muck-savage.com/',
    image: portfolioImage6,
  },
  {
    title: 'Digital Media Portfolio',
    description: 'This site is a portfolio of my web app wireframes, graphic design work and multi-media art. The purpose of the site is to display my design skills and project planning abilities.',
    url: 'https://patrickgbecker.myportfolio.com/',
    image: portfolioImage7,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2022',
    location: 'Turing School of Software & Design',
    title: 'Front-End Web Development Certificate',
    content: <p>I learned Object-Oriented Programming, comp recreation with semantic HTML, and clean, readable code. I also utilized front-end frameworks and libraries for building complex, scalable, fully-tested applications, as well as diving into asynchronous JavaScript and consuming APIs.</p>,
  },
  {
    date: 'March 2009',
    location: 'Emporia State University',
    title: 'Associates of Fine Arts',
    content: <p>I further developed my illustration skills with life drawings, etchings & engravings, and completed general education credits.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2021 - Present',
    location: 'Remote/Kansas City Metropolitan Area',
    title: 'Freelance Frontend Software Developer & Graphic Designer',
    content: (
      <>
        <p>
          ● Design, build and deploy customized web applications/digital content for small businesses. Services include: product management, payment, email template integrations, custom forms, custom logos, icons, and SEO integration..
        </p>
        <p>
          ● Developed a responsive UI/UX design for a website for a local band, Muck Savage, using Wordpress.
        </p>
        <p>
          ● Designed, built and deployed a responsive website for Audio Engineering/Videography company, Cerulean Media, Using Next.js 13, Tailwind CSS and Sanity.io.
        </p>
      </>
    )
  },
  {
    date: 'March 2020 - March 2021',
    location: 'Westmont Hospitality Group',
    title: 'Regional Revenue Analyst',
    content: (
      <>
        <p>
          ● Forecasted group and transient occupancy & rate to ensure proper inventory controls were in place for the best top and bottom line outcome, increasing year-over-year revenue by 2%.
        </p>
        <p>
          ● Effectively used market data and historical trends to implement dynamic pricing patterns for upcoming days, weeks and months, increasing average monthly revenue by $2,000.
        </p>
      </>
    ),
  },
  {
    date: 'July 2014 - March 2020',
    location: 'Sage Hospitality',
    title: 'Front Office Supervisor/Group Rooms Coordinator/Revenue Analyst',
    content: (
      <>
        <p>
          ● Implemented/monitored MLOS and pricing strategy in close partnership with Director of Revenue, increasing weekly report generation for Management/Ownership teams.
        </p>
        <p>
          ● Managed room inventory, gift shop ordering, and created an enthusiastic team attitude that promoted honesty, curiosity and efficiency, resulting in a top-rated Customer Service team via TripAdvisor.
        </p>
        <p>
          ● Demonstrated the ability to improvise and maintain composure in difficult situations, increasing customer loyalty and satisfaction.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Shauna MacFarlane-Okongo - Frontend Software Developer',
      text: 'Very calm, kind, gracious and patient, Patrick was really wonderful to work with. I appreciated his willingness to allow others to struggle with new ideas, and be a sounding board to make this project great. He was encouraging, gave great ideas and feedback. I would love the opportunity to work with him again at any time. No coaching at all to offer. He was a great team member! Patrick was a pleasure to work with and I would love the opportunity to work with him again on any project'
    },
    {
      name: 'Amelia Eiger, Full Stack Developer @Sigmatech, Space Enterprise Divison',
      text: 'Your knack for verbalizing processes in plain English was the most helpful resource I had during our project. It is such a useful skill and made working with you easy and breezy. Also, you were such a pleasure to collaborate with. Your positive demeanor and persistence was encouraging and, in the end, look at what we made! We did it!'
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to get a hold of me by email, on LinkedIn, Instagram or by carrier pigeon!',
  items: [
    {
      type: ContactType.Email,
      text: 'patrickgbecker@gmail.com',
      href: 'mailto:patrickgbecker@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Independence, Missouri',
      href: 'https://www.google.com/maps/@39.058545,-94.4696776,15z',
    },
    {
      type: ContactType.Instagram,
      text: '@patrickgbecker',
      href: 'https://www.instagram.com/patrickgbecker/',
    },
    {
      type: ContactType.Github,
      text: 'PatrickGBecker',
      href: 'https://github.com/PatrickGBecker',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/PatrickGBecker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/patrickgarrettbecker/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/patrickgbecker/'},
];
