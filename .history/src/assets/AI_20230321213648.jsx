import { CloudArrowUpIcon, ArrowPathIcon, ServerIcon } from '@heroicons/react/20/solid';
import CodeSampleAI from './CodeSampleAI';

const features = [
  {
    name: 'Unlock the power of AI',
    description:
      'From chatbots to content creation and sales materials, our AI solutions can help you achieve unprecedented levels of productivity and efficiency.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tailored to your needs.',
    description: 'We offer custom AI models that are specifically designed for your unique use case. You can easily integrate these models into your workflow via API.',
    icon: ServerIcon,
  },
  {
    name: 'Stay ahead of the game.',
    description: 'Our feedback system ensures that your AI models are always up-to-date and improving over time. With our help, you can stay ahead of the competition and maximize your ROI.',
    icon: ArrowPathIcon,
  },
];

export default function AI() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Empower Your Workflow with AI</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transform Your Business with Smarter Solutions</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our customized AI solutions can take your business to the next level by streamlining your workflow and boosting productivity. From chatbots to content creation and more, we use the latest AI technology to help you stay ahead of the curve.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
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
          <div className="lg:pl-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Code sample</h2>
              <div className="mt-6">
                <CodeSampleAI />
                </div>
</div>
</div>
</div>
</div>
</div>
);
}