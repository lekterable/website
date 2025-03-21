import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
import ProjectCard from './project-card'
import InfluenseaProject from '~assets/influensea-project.png'
import MacromoProject from '~assets/macromo-project.png'
import OutreachProject from '~assets/outreach-project.png'
import BrowserExtensionIcon from '~assets/technologies/browser-extension.png'
import ExpoIcon from '~assets/technologies/expo.png'
import GraphQLIcon from '~assets/technologies/graphql.png'
import NextJsIcon from '~assets/technologies/nextjs.png'
import NodeJsIcon from '~assets/technologies/nodejs.png'
import PrismaIcon from '~assets/technologies/prisma.png'
import ReactNativeIcon from '~assets/technologies/react-native.png'
import ReactIcon from '~assets/technologies/react.png'
import TailwindIcon from '~assets/technologies/tailwind.png'
import TypeScriptIcon from '~assets/technologies/typescript.png'

const technologies: Technology[] = [
  {
    icon: NextJsIcon,
    name: 'Next.js',
  },
  {
    icon: PrismaIcon,
    name: 'Prisma',
  },
  {
    icon: NodeJsIcon,
    name: 'Node.js',
  },
  {
    icon: TailwindIcon,
    name: 'Tailwind',
  },
  {
    icon: ReactIcon,
    name: 'React',
  },
  {
    icon: ReactNativeIcon,
    name: 'React Native',
  },
  {
    icon: TypeScriptIcon,
    name: 'TypeScript',
  },
  {
    icon: GraphQLIcon,
    name: 'GraphQL',
  },
  {
    icon: ExpoIcon,
    name: 'Expo',
  },
  {
    icon: BrowserExtensionIcon,
    name: 'Browser Extension',
  },
]

const getTechnologies = (names: Array<Technology['name']>): Technology[] => {
  const returned = names.reduce<Technology[]>((acc, name) => {
    const tech = technologies.find((tech) => tech.name === name)

    if (tech) {
      acc.push(tech)
    }

    return acc
  }, [])

  return returned
}

export type Project = {
  title: string
  description: string
  technologies: Technology[]
  image: StaticImageData
}

export type Technology = {
  name:
    | 'Next.js'
    | 'Prisma'
    | 'Node.js'
    | 'Tailwind'
    | 'React'
    | 'React Native'
    | 'TypeScript'
    | 'Browser Extension'
    | 'GraphQL'
    | 'Expo'
  icon: StaticImport
}

const projects: Project[] = [
  {
    description: `Influensea simplifies content creation process by leveraging AI to create engaging, high-quality content at scale. You can brainstorm ideas, draft content and refine it to perfection.

Whether you're a blogger, marketer or social media influencer, Influensea provides all the tools you need to capture your audience and make an impact.

This is my personal project which I develop on after hours. I aim to create a tool which enhances both productivity and creativity.`,
    image: InfluenseaProject,
    technologies: getTechnologies([
      'TypeScript',
      'Node.js',
      'Prisma',
      'Next.js',
      'Tailwind',
    ]),
    title: 'Influensea.com',
  },
  {
    description: `Macromo is a preventive healthcare platform which allows you to order DNA and blood tests. Once the tests are completed, you can preview the results in a user-friendly mobile app.

It empowers you to take control of your health by providing detailed insights and recommendations based on your test results.

I joined Macromo as a first engineer and kicked off the project. Over time, I grew a team of developers and led the product development as Technical Lead.
`,
    image: MacromoProject,
    technologies: getTechnologies([
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'React Native',
      'Expo',
    ]),
    title: 'Macromo.com',
  },
  {
    description: `Outreach as a sales engagement platform improves effectiveness of sales teams. You can automate sales processes, manage customer interactions, and gain valuable insights.

It allows you to close more deals and build stronger relationships with your customers.

I worked on the browser extensions and parts of the main app, ensuring seamless integration and enhanced user experience for thousands of users.`,
    image: OutreachProject,
    technologies: getTechnologies([
      'TypeScript',
      'Node.js',
      'GraphQL',
      'Browser Extension',
      'React',
    ]),
    title: 'Outreach.io',
  },
]

const ProjectList = () => (
  <div className="mt-16 flex flex-wrap items-center justify-center gap-16">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
      /* {index + 1 < projects.length && (
          <SeparatorBoth className="mx-auto my-8 w-[144px] text-accent" />
        )} */
    ))}
  </div>
)

export default ProjectList
