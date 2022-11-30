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
import heroImage from '../images/header-background.jpeg';
import porfolioImage1 from '../images/portfolio/NUNSlinger-Cover.png';
import porfolioImage2 from '../images/portfolio/rancid-tomatillos.png';
import porfolioImage3 from '../images/portfolio/daily-dispatch.png';
import porfolioImage4 from '../images/portfolio/report-card.png';
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
      href: '../images/resume.pdf',
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
  description: `I'm really interested in applications that inspire people to take action. I know how to work with JavaScript, React, TypeScript, HTML/CSS and GraphQL. I will soon learn how to incorporate PWA's into my applications. I'm currently working with a front-end & back-end team to create an app for educators to more easily find information about school districts they are interested in applying to for work. I'm also creating various iterations of CRUD applications. Please message me to chat about anything and everything.`,
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
        level: 7
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
        name: 'CSS & SCSS',
        level: 8
      },
       {
        name: 'HTML',
        level: 9
      },
      {
        name: 'GraphQL',
        level: 5
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nunslinger',
    description: 'A trio of Vanilla JS coders took on the challenge of learning TypeScript in React/React-Spring/Player to program a 2D reaction-based shooter mini game, all within a 10 day period. All game physics, player controls and logic were created by our team and all game art was hand-crafted by me in Adobe Photoshop. We wrote E2E testing in Cypress for the main page views, fetch calls, stubbing and interactive game play. We achieved this through asynchronous & paired programming with extensive project board planning in GitHub.',
    url: 'https://patrickgbecker.github.io/nunslinger/',
    image: porfolioImage1,
  },
  {
    title: 'Rancid Tomatillos',
    description: 'React application that displays a movie catalog with functionality to see individual movie summaries through dynamic searching, and relevant movie trailers from YouTube on the details page. Implementation of React Router, E2E Cypress testing and deployment to Heroku.',
    url: 'https://patrickgbecker.github.io/rancidTomatillos/',
    image: porfolioImage2,
  },
  {
    title: 'The Daily Dispatch',
    description: 'The Daily Dispatch allows users to browse article samples from various sections of The New York Times. The samples also include links to the full articles.',
    url: 'https://daily-dispatch.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Report Card',
    description: 'This application is designed to assist teachers in their search for school districts that might better meet their financial needs and provide better work conditions.',
    url: 'https://reportcard-fe.vercel.app/',
    image: porfolioImage4,
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
    content: <p>Made some flippin' good sites yo'</p>,
  },
  {
    date: 'March 2009',
    location: 'Emporia State University',
    title: 'Associates of Fine Arts',
    content: <p>Did some pretty good drawings and skipped class</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
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
