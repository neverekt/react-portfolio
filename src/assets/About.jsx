import {
    HandshakeIcon,
    LightningBoltIcon,
    UsersIcon,
    HeartIcon,
    GlobeAltIcon,
    CalendarIcon
} from '@heroicons/react/20/solid'

const values = [
    {
        name: 'Client satisfaction first',
        description: 'We are dedicated to delivering exceptional service and quality work to ensure our clients are always satisfied.',
        icon: HandshakeIcon,
    },
    {
        name: 'Continuous innovation',
        description: 'We constantly strive to improve our processes and stay ahead of the curve in technology and industry trends.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Collaborative teamwork',
        description: 'We believe in the power of teamwork and communication to achieve the best results for our clients and each other.',
        icon: UsersIcon,
    },
    {
        name: 'Passionate expertise',
        description: 'We are passionate about our work and bring our expertise to every project we undertake.',
        icon: HeartIcon,
    },
    {
        name: 'Diversity and inclusion',
        description: 'We embrace diversity and inclusion in all aspects of our company, from hiring to work culture and beyond.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Work-life balance',
        description: 'We value our employees’ well-being and offer a supportive work environment with flexible hours and vacation time.',
        icon: CalendarIcon,
    },
];

const team = [
    {
        name: 'Jack Turner',
        role: 'Co-Founder',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        location: 'Blackpool, United Kingdom',
    },
  // More people...
]

export default function About() {
    return (
    <div className="bg-gray-900">
        <main className="relative isolate">
        {/* Background */}
        <div className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
            <svg viewBox="0 0 1108 632" className="w-[69.25rem] flex-none" aria-hidden="true">
            <path
            fill="url(#eee5076e-98f8-4901-b4c5-181a87854225)"
            fillOpacity=".25"
            d="M235.233 402.61 57.541 321.574.83 631.051 235.233 402.61l320.018 145.945c-65.036-115.26-134.286-322.756 109.01-230.654C968.382 433.027 1031 651.248 1092.23 459.361c48.98-153.51-34.51-321.107-82.37-385.717l-198.908 250.58L648.261.089 235.233 402.61Z"
            />
            <defs>
                <linearGradient
                id="eee5076e-98f8-4901-b4c5-181a87854225"
                x1="1220.59"
                x2="-85.053"
                y1="432.767"
                y2="638.715"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#4F46E5" />
                <stop offset={1} stopColor="#80CAFF" />
                </linearGradient>
                </defs>
            </svg>
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We help you thrive</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    At Coupled Logic, we're passionate about delivering intelligent, up-to-date solutions that help businesses like yours
                    streamline operations and achieve greater efficiency.
                </p>
            </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <p>
                            At Coupled Logic, we are passionate about using technology to help businesses thrive.
                            We offer a range of services that can help you improve your workflow and boost productivity.
                            Our team of experts can work with you to map your existing business processes into smart
                            contract equivalents, automate internal processes, and develop custom AI models tailored to your unique needs.
                        </p>
                        <p className="mt-8">
                            With Coupled Logic, you can be sure you're working with a team that's committed to staying ahead of the curve.
                            We combine the best industry practices with cutting-edge technology to deliver modern solutions that help businesses succeed.
                        </p>
                    </div>
                    <div>
                        <p>
                            We also believe in transparency and collaboration. That's why we work closely with our clients to ensure that our
                            solutions are tailored to their needs. We offer gradual integration with your existing infrastructure, ensuring a
                            smooth transition to using smart contracts and other advanced technologies.
                        </p>
                    <p className="mt-8">
                        Whether you're looking to streamline your operations, improve security, or enhance productivity, Coupled Logic
                        is here to help. Contact us today to learn more about our services and how we can help your business thrive.
                    </p>
                </div>
            </div>
        </div>
    </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
            />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our values</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    At Coupled Logic, we believe in delivering top-notch solutions to our clients while fostering an
                    inclusive, collaborative, and innovative culture. Here are our core values:
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                {values.map((value) => (
                <div key={value.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                        <value.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                        {value.name}
                    </dt>{' '}
                    <dd className="inline">{value.description}</dd>
                </div>
                ))}
            </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Meet the talented individuals behind Coupled Logic. Our diverse team brings a wealth of experience and expertise to every project we work on.
                </p>
            </div>
            <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
            {team.map((person) => (
            <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
                </li>
            ))}
            </ul>
        </div>
    </main>
    </div>
    )
}
