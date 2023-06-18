import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import { FaCss3, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import {
  SiDjango,
  SiDocker,
  SiJavascript,
  SiLinux,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const portolioProjects = [
  {
    id: 2,
    image: '/images/portfolio/telegram.webp',
    title: 'Ultra URL Bot',
    description: `A Telegram bot for URL shortening, expanding and QRCode generation powered by MongoDB
      This bot is built with Python, MongoDB and deployed to a VPS using Docker.
      The project has an active user base of over 500 users and counting. Connect with me on Telegram @kstar7.
      `,
    link: 'https://t.me/q_r_code_bot',
    github: '',
    stack: [FaPython, DiMongodb, SiDocker, SiLinux],
  },
  {
    id: 3,
    image: '/images/portfolio/bigquery.webp',
    title: 'Scrapy BigQuery Pipeline',
    description: `Contributed to the development of an open-source bigquery pipeline for Scrapy framework
      This pipeline provides a seamless integration between Scrapy, a popular web scraping framework, and BigQuery, allowing you to efficiently store and analyze scraped data.
      `,
    link: '',
    github: 'https://github.com/8W9aG/scrapy-bigquery',
    stack: [FaPython],
  },
  {
    id: 4,
    image: '/images/portfolio/bazaar.png',
    title: 'Bazaar',
    description: `
    Bazaar is an automated web scraping tool, capable of developing web scrapers for any website in a few clicks, including deployment to the cloud.
    This reduced the time spent on developing web scrapers by 80%. Generates functional web scrapers in less than 5 minutes.
    `,
    link: '',
    github: '',
    stack: [
      FaPython,
      SiDjango,
      SiPostgresql,
      SiRedis,
      SiDocker,
      SiLinux,
      TbBrandNextjs,
      SiTailwindcss,
      SiTypescript,
    ],
  },
  {
    id: 5,
    image: '/images/portfolio/white.png',
    title: 'Edugrids',
    description: `Edugrids is an online forum for students and teachers to share ideas and resources, with over 3000 active users
      This project solves the problem of students not having access to quality learning resources and a platform to share ideas.
      The project is actively used by students and teachers and has over 1500 registered users.
      `,
    link: '',
    github: '',
    stack: [
      FaPython,
      SiDjango,
      SiPostgresql,
      SiRedis,
      SiDocker,
      SiLinux,
      SiTypescript,
      TbBrandNextjs,
      SiTailwindcss,
    ],
  },
  {
    id: 6,
    image: '/images/portfolio/api.png',
    title: 'Vinyl',
    description: `A music store built with Django Rest Framework, PostgreSQL and integrated with Stripe
      This project is a backend API for a music store, with features like authentication, authorization, payment processing.
      It allows users to buy music and artists to sell their music by uploading it to the platform and getting paid for every sale.
      `,
    link: '',
    github: 'https://github.com/AmoabaKelvin/vinyl-backend',
    stack: [FaPython, SiDjango, SiPostgresql],
  },
  {
    id: 7,
    image: '/images/portfolio/kairos.png',
    title: 'Kairos',
    description: `
      A laboratory management system built with Python, Django, PostgreSQL and Bootstrap.
      Kairos solved the problem of record keeping and management of patients' data as well as financial records.
      It allowed to register new parents, capture their data, and store them in a database. Performing revenue analysis and generating reports.
      `,
    link: '',
    github: 'https://github.com/AmoabaKelvin/kairos-medical-center',
    stack: [
      FaPython,
      SiDjango,
      SiPostgresql,
      FaHtml5,
      FaCss3,
      BsFillBootstrapFill,
    ],
  },
  {
    id: 8,
    image: '/images/portfolio/hulu-clone.png',
    title: 'Hulu Website Clone',
    description:
      'Fully responsive Hulu website clone built with Next.js, Tailwind CSS, and TMDB API.',
    link: 'https://amoaba-hulu-clone.netlify.app/',
    github: 'https://github.com/AmoabaKelvin/hulu-clone',
    stack: [FaReact, TbBrandNextjs, SiTailwindcss],
  },
  {
    id: 9,
    image: '/images/portfolio/bankist.png',
    title: 'Bankist',
    description: 'Banking website built with HTML,CSS and JS',
    link: 'https://amoaba-bankist.netlify.app/',
    github: 'https://github.com/AmoabaKelvin/bankist',
    stack: [FaHtml5, FaCss3, SiJavascript],
  },
  {
    id: 10,
    image: '/images/portfolio/portfolio.png',
    title: 'Portfolio Website',
    description: 'My portfolio website built with Next.js and Tailwind CSS',
    link: '',
    github: 'https://github.com/AmoabaKelvin/personal-portfolio',
    stack: [SiTypescript, FaReact, TbBrandNextjs, SiTailwindcss],
  },
  {
    id: 11,
    image: '/images/portfolio/guessing.png',
    title: 'Guessing Game',
    description: 'A beautiful guessing game built with HTML,CSS and JS',
    link: 'https://amoaba-guessing-game.netlify.app/',
    github: 'https://github.com/AmoabaKelvin/guessing-game',
    stack: [FaHtml5, FaCss3, SiJavascript],
  },
  {
    id: 12,
    image: '/images/portfolio/blog.jpg',
    title: 'Blogging Website',
    description: 'A blogging website built with Django, HTML, CSS and JS',
    link: '',
    github: 'https://github.com/AmoabaKelvin/kelvins-insights',
    stack: [FaPython, SiDjango, FaHtml5, FaCss3, SiJavascript],
  },
];
