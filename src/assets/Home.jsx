import { CodeBracketIcon, InformationCircleIcon, AcademicCapIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'About us',
    description:
      'Learn more about our company and our mission to provide top-quality web development, software and technology solutions to our clients. Visit our About page to get to know us better.',
    href: '/About',
    icon: InformationCircleIcon,
  },
  {
    name: 'Innovative Solutions',
    description:
      'We offer intelligent, up-to-date solutions that combine the best industry practices with cutting-edge technology. Whether you need a custom web application, AI solution, or blockchain development, our innovative solutions can help take your business to the next level. Click here to learn more about our services.',
    href: '/Solutions',
    icon: AcademicCapIcon,
  },
  {
    name: 'Our work',
    description:
      'Discover some of our most recent projects, from web development to blockchain solutions. Our work showcases our expertise and our commitment to delivering high-quality solutions that meet our clients’ unique needs. Browse our gallery to see our work in action.',
    href: '/Projects',
    icon: CodeBracketIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Coupled Logic – Lets Build the Future of Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          We are a software development company based in the UK. We specialize in web design, software development, automation,
          and analytics for businesses and individuals. With our expertise, we can help your business thrive by
          delivering solutions tailored to your requirements.
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
