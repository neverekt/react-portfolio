import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: "What does Coupled Logic do?",
      answer:
        "Coupled Logic is a software development company that specializes in creating custom software solutions for businesses. We provide a range of services including web development, mobile app development, and custom software development tailored to your business needs.",
    },
    {
      question: "What industries does Coupled Logic work with?",
      answer:
        "We work with businesses across various industries, including healthcare, finance, education, and e-commerce. Our team has extensive experience in creating software solutions for businesses of all sizes and across different industries.",
    },
    {
      question: "What technologies does Coupled Logic use?",
      answer:
        "Our team of developers has expertise in various technologies such as React, Angular, Node.js, PHP, Ruby on Rails, and many more. We stay up-to-date with the latest technologies to ensure that we provide our clients with the best solutions possible.",
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer:
        "The timeline for developing a custom software solution depends on the scope of the project and the specific requirements. Our team works closely with clients to define project goals and deliverables and develop a timeline that meets their specific needs.",
    },
    {
      question: "What is Coupled Logic's development process?",
      answer:
        "Our development process typically involves the following stages: project discovery, planning, design, development, testing, and deployment. We work closely with our clients throughout each stage to ensure that the final product meets their specific needs and exceeds their expectations.",
    },
    {
      question: "What sets Coupled Logic apart from other software development companies?",
      answer:
        "At Coupled Logic, we are committed to delivering high-quality software solutions that meet our clients' specific needs. Our team consists of highly skilled developers who are passionate about their work and dedicated to delivering results. We also place a strong emphasis on communication and collaboration with our clients throughout the development process.",
    },
    {
      question: "Does Coupled Logic offer ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure that our clients' software solutions are up-to-date and functioning optimally. We provide various support plans that can be tailored to meet each client's specific needs.",
    },
    {
      question: "How can I get started with Coupled Logic?",
      answer:
        "If you are interested in working with Coupled Logic, you can contact us through our website or by email. We will be happy to discuss your specific needs and provide you with a free consultation and quote for our services.",
    },
    {
      question: "What are the payment options for Coupled Logic's services?",
      answer:
        "We offer flexible payment options for our services, including hourly rates, project-based pricing, and retainer agreements. We work closely with each client to develop a payment plan that meets their specific needs.",
    },
    {
      question: "Does Coupled Logic offer non-disclosure agreements (NDAs)?",
      answer:
        "Yes, we offer non-disclosure agreements to protect our clients' confidential information. We take the confidentiality of our clients' information very seriously and are committed to maintaining the highest standards of confidentiality and security.",
    },
  ];
  

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
