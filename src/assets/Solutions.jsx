import {
    GlobeAltIcon,
    CodeBracketIcon,
    ServerIcon,
    CircleStackIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Website and Web App Development',
        description:
            'We develop custom websites and web applications for small businesses, sole traders, and companies. Whether you need a company showcase page, portfolio, or e-commerce store, we can create a website or web app that is visually appealing, user-friendly, and functional.',
        icon: GlobeAltIcon,
        link: '/WebDev',
    },
    {
        name: 'SAAS Application Development',
        description:
            'We offer SAAS (Software as a Service) application development services that cater to your specific needs. Whether you need a single-page application, progressive web app, or a complex enterprise application, we can help you meet your requirements.',
        icon: CodeBracketIcon,
        link: '/SAAS',
    },
    {
        name: 'Custom AI Solutions',
        description:
            'We can develop custom AI solutions such as chatbots, business intelligence tools, and automation systems. We can help you leverage AI and machine learning to streamline your business processes, increase efficiency, and save time and money. We offer custom AI models that are specifically designed for your unique use case and help you integrate these models into your workflow.',
        icon: ComputerDesktopIcon,
        link: '/AI',
    },
    {
        name: 'Blockchain Solutions',
        description:
            'Our experts offer smart contract design and deployment services for various business assets, including invoicing, expenses, and RFP systems. Smart contracts settle transactions and agreements in real-time, providing enhanced security and minimizing human error. Our solutions integrate with your existing infrastructure and require no further maintenance.',
        icon: CodeBracketIcon,
        link: '/Blockchain',
    },
    {
        name: 'Database Integration and Management',
        description:
            'We can help you integrate and manage your databases, ensuring optimal performance, scalability, and security. Whether it’s backend integration or safe user information management, we can provide you with a reliable and scalable database solution for your web applications.',
        icon: CircleStackIcon,
        link: '/Backend',
    },
    {
        name: 'Server Setup and Redirections',
        description:
            'Our team offers server setup and redirection services, tying together all the elements of your website or web application. We can help you integrate your website or web app with your existing infrastructure, ensuring a seamless user experience for your visitors.',
        icon: ServerIcon,
        link: '/Backend',
    },
]


export default function Solutions() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Solutions</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    We specialize in website and web app development, SAAS applications, custom AI solutions, database integration, and server setup/redirections.
                    Our team delivers user-friendly, visually appealing, and functional solutions tailored to your unique needs. Our expertise streamlines your
                    business processes, increases efficiency, and keeps you ahead of the competition.

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
                            <p className="mt-6">
                                <a href={feature.link} className="text-sm font-semibold leading-6 text-indigo-400">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </p>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
