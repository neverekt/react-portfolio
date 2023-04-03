import { CloudArrowUpIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/20/solid';
import DatabaseCode from './DatabaseCode';

const features = [
    {
    name: 'Efficient database integration',
    description: 'Our team can help you integrate and manage databases for optimal performance, scalability, and security. Whether it’s backend integration or safe user information management, we can provide reliable and scalable solutions tailored to your needs.',
    icon: CloudArrowUpIcon,
},
{
    name: 'Streamlined server setup',
    description: 'Our server setup and redirection services can help you tie together all the elements of your web application for a seamless user experience. We can integrate your website or web app with your existing infrastructure to ensure maximum efficiency.',
    icon: ServerIcon,
},
{
    name: 'Custom backend application development',
    description: 'Our experts can develop custom backend applications tailored to your business needs. We specialize in creating secure and scalable applications that can handle complex data management tasks and integrate with your existing infrastructure.',
    icon: CodeBracketIcon,
}
];

export default function BackEnd() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Streamline Your Workflow</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Optimize Your Databases and Servers with Our Scalable Solutions</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              We manage database integration, server setup, and security to optimize your web applications. Our reliable solutions seamlessly integrate with your existing infrastructure, ensuring a smooth user experience.
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
              <div className="mt-6">
                <DatabaseCode />
                </div>
</div>
</div>
</div>
</div>
</div>
);
}