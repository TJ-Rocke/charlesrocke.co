import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'What’s up I’m Charles, a Marylander spending way too much time on my computer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            What’s up, I’m Thomas
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I never understood why I could never fit in at a young age. My
              escape was always to video games where I could determine my own
              way of doing things. From video games, I was led to study Computer
              Science in college. After a semester, I couldn&apos;t piece things
              together or understand the big picture behind it. I switched my
              major to Business Administration and did very well. Out of
              youthful arrogance, I dropped out. I was determined to build my
              own large company without any real plan or vision.
            </p>
            <p>
              A few years later, I watched the movie, &ldquo;The Social
              Network&ldquo;, and immediately pieced things together. I built my
              first application called &ldquo;<em>B.A.</em>&ldquo;, a twitter
              for billionaires, and was hooked. I spent almost all of my free
              time learning how to build applications, web and mobile, but took
              a stronger liking to web applications. Outside of computers,
              I&apos;ve wrestled for 10+ years, love to read, and love going to
              the gym.
            </p>
            <p>
              I won many tournaments and was ranked top 10 in the state of
              Maryland for 2 consecutive years. The number one thing I learned
              from wrestling is discipline. I was the least disciplined among my
              teammates, always overeating, but surprisingly only ever missed
              weight once. I can still hear Coach Tom anytime I get in a
              difficult situation in life. He had a great impact on my life, who
              I am, and how I view myself. I owe much of who I am becoming to
              him.
            </p>
            <p>
              Today, I’m the founder of <em>Rocke</em>, a hacker house, where a
              variety of custom applications are developed and aimed to be spun
              off as startups. Some products and services that have been built
              have helped teams of different types in companies like Amazon.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/TJ-Rocke"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/thomas-rocke-716bb71ab/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:tjrocke365@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tjrocke365@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
