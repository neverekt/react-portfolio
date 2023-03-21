import { CodeBracketIcon, ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Projects',
    description:
      'Click here to see examples of some recent projects we have been involved in the development of.',
    href: '/Projects',
    icon: CodeBracketIcon,
  },
  {
    name: 'What we offer',
    description:
      'We offer a variety of services, including business and domestic software development including blockchain/web3, websites and hosting as well as automation, data processing, and various other analytics. Click here to find out more.',
    href: '/Services',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Jack Turner - Coupled Logic - Summary
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Welcome to the homepage of Jack Turner, founder of Coupled Logic, the consultancy arm of a software development company based in the UK.
            To get started, why not explore some of the following options...
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
