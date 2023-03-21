import {
  CodeBracketIcon,
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Smart contract designed and deployed.',
      description: 'We can map an existing business asset into its smart contract analog. Whether its an invoicing system, employee expense tracking or an RFP system, we can help you get started with smart contracts.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Security.',
      description: 'There are no extra parties involved when something is settled in real-time using a smart contract. This means you can further guard your business processes against future human error.',
      icon: LockClosedIcon,
    },
    {
      name: 'Helping in-house automation.',
      description: 'Streamlining of any internal process through automation can usually be achieved by using a smart contract.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Identity.',
      description: 'The identity of a counter-party in any agreement or transaction can often be called into question. By using a smart contract equivalent, you can make sure you are 100% certain you are dealing with the right party.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Powerful API.',
      description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Integrate with your existing infrastructure.',
      description: 'Whatever your current .',
      icon: ServerIcon,
    },
  ]
  
  export default function Web3() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Coming soon...</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No problem.</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Regardless of you or your company's existing infrastructure, you will be aware of the potential benefits of deploying
              alternative workflows that make use of smart contracts to automate certain business processes.

              Have a look at how we will soon be able to help transform your business and prepare for a new paradigm in productivity.
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
  