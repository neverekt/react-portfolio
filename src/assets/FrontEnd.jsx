import {
    GlobeAltIcon,
    CodeBracketIcon,
    CircleStackIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Website development',
        description:
            'We can develop custom websites tailored to your business needs, whether it’s a static website, dynamic website or an ecommerce website. Our team of experts can help you create a website that is user-friendly, visually appealing and functional.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Web app development',
        description:
            'We can develop web applications that work seamlessly across different devices and platforms, ensuring a smooth user experience. Whether it’s a single-page application, progressive web app or a complex enterprise application, we can help you create a web app that meets your specific requirements.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Desktop application development',
        description:
            'We can develop desktop applications that work seamlessly on different operating systems, ensuring your application is accessible to a wider audience. Our experts can help you create a desktop application that is user-friendly, visually appealing and functional.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Backend integration with databases',
        description: 'We can help you integrate your backend with different types of databases such as relational databases, NoSQL databases and more. Our solutions ensure optimal performance, scalability and security, while providing reliable data management tailored to your specific requirements.',
        icon: CircleStackIcon,
    },

]
export default function FrontEnd() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Web development</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        At Coupled Logic, we offer a range of web development services to help businesses like yours achieve their goals.
                        Our team of experts can help you create custom websites, web applications, and desktop applications that are
                        visually appealing, user-friendly and functional.
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
        );
}