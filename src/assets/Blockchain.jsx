import {
  CodeBracketIcon,
    ArrowPathIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
  
const features = [
  {
    name: 'Smart contract design and deployment',
    description:
      'We can help you map an existing business asset into its smart contract equivalent, whether it’s an invoicing system, employee expense tracking, or an RFP system. Our experts can get you started with smart contracts even if you have no prior expertise.',
    icon: CodeBracketIcon,
  },
    {
      name: 'Enhanced security',
      description:
        'Smart contracts settle transactions and agreements in real-time without any intermediaries, which eliminates the need for extra parties and minimizes the risk of human error. This means you can better safeguard your business processes and data.',
      icon: LockClosedIcon,
    },
    {
      name: 'In-house automation',
      description:
        'By automating internal processes with smart contracts, you can streamline your operations and achieve greater efficiency. We can help you identify opportunities to use smart contracts for in-house automation.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Identity verification',
      description:
        'Smart contracts ensure the identity of the counter-party in any agreement or transaction, eliminating the risk of fraud and identity-related issues. You can be sure you are dealing with the right party 100% of the time.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Robust solutions',
      description:
        'Smart contract solutions are permanently deployed to the blockchain and require no further maintenance. This ensures your business processes run smoothly and seamlessly, while allowing you to focus on growing your business.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Gradual integration with your existing infrastructure',
      description:
        'Our smart contract solutions are designed to integrate with your existing infrastructure, ensuring a smooth and gradual transition to using smart contracts. You don’t need to overhaul your existing systems or processes to benefit from smart contracts.',
      icon: ServerIcon,
    },
  ]
export default function Blockchain() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Coming soon...</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No expertise? No problem.</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Regardless of your company's existing infrastructure, you're likely aware of the potential benefits of
            deploying alternative workflows that use smart contracts to automate certain business processes. We're
            excited to help businesses like yours prepare for a new paradigm in productivity. Stay tuned for more
            updates on our smart contract offerings.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      )
    }