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
      name: 'Robust solutions.',
      description: 'Solutions are deployed to be robust. The contracts are permanently deployed to the blockchain and require no further maintenance. This means you can be sure that your business processes will continue to run smoothly.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Integrate with your existing infrastructure.',
      description: 'Our solutions are intended to not require an entire overhaul of your existing infrastructure, rather the process is a gradual integration.',
      icon: ServerIcon,
    },
  ]
  
  export default function Web3() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Coming soon...</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No expertise? No problem.</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Regardless of you or your company's existing infrastructure, you will be aware of the potential benefits of deploying
              alternative workflows that make use of smart contracts to automate certain business processes.

              Have a look at how we will soon be helping businesses like yours transform and prepare for a new paradigm in productivity.
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

      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
        <p className="mt-2 text-sm leading-6 text-gray-300">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
      </div>
      <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-indigo-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
    )
  }
  