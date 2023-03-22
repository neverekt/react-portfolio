import { CodeBracketIcon, InformationCircleIcon, AcademicCapIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Recent Projects',
    description:
      'Discover some of our most recent projects, including academic exercises by our team members and live creations. Browse our gallery to see our work in action.',
    href: '/Projects',
    icon: CodeBracketIcon,
  },
  {
    name: 'Our Services',
    description:
      'We provide a range of services, from software development to automation, data processing, and analytics for businesses and individuals. Learn more about what we offer by clicking below.',
    href: '/Services',
    icon: InformationCircleIcon,
  },
  {
    name: 'Modern Solutions',
    description:
      'We offer intelligent, up-to-date solutions that combine the best industry practices with cutting-edge technology. Click here to learn more about our innovative solutions.',
    href: '/Services',
    icon: AcademicCapIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Jack Turner - Professional Profile
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Welcome to the homepage of Jack Turner, founder of Coupled Logic, the consultancy arm of a software development company based in the UK.
            We invite you to explore some of the following options to learn more about our work and how we can help your business thrive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
