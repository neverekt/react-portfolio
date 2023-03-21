import { CloudArrowUpIcon, ArrowPathIcon, ServerIcon } from '@heroicons/react/20/solid';
import CodeSampleAI from './CodeSampleAI';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const features = [
  {
    name: 'Multiple solutions.',
    description:
      'Whether its an AI-powered chat-bot, content creation or sales material - its time to upscale by leveraging the use of AI to boost your efficiency and productivity.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom models for your use-case.',
    description: 'We can train custom language models for your specific use-case from a variety of starting formats. You can then query this using an API.',
    icon: ServerIcon,
  },
  {
    name: 'Keep your model up-to-date.',
    description: 'We can help you set up a feedback system using new information so your model only gets better with time.',
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
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Output more</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A smarter workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Offering tailored solutions to help your business level-up with the latest AI technology solutions.
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
                <SyntaxHighlighter language="json" style={vscDarkPlus}>
                  {`{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo-0301",
  "usage": {
      "prompt_tokens": 13,
      "completion_tokens": 7,
      "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "\\n\\nThis is a test!"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}`}
</SyntaxHighlighter>
</div>
</div>
</div>
</div>
</div>
</div>
);
}








//   import { CloudArrowUpIcon, ArrowPathIcon, ServerIcon } from '@heroicons/react/20/solid'
// import CodeSampleAI from './CodeSampleAI'
// // import CodeSampleAI from './CodeSampleAI'

// const features = [
//   {
//     name: 'Multiple solutions.',
//     description:
//       'Whether its an AI-powered chat-bot, content creation or sales material - its time to upscale by leveraging the use of AI to boost your efficiency and productivity.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'Custom models for your use-case.',
//     description: 'We can train custom language models for your specific use-case from a variety of starting formats. You can then query this using an API.',
//     icon: ServerIcon,
//   },
//   {
//     name: 'Keep your model up-to-date.',
//     description: 'We can help you set up a feedback system using new information so your model only gets better with time.',
//     icon: ArrowPathIcon,
//   },
// ]

// export default function AI() {
//   return (
//     <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pr-8 lg:pt-4">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base font-semibold leading-7 text-indigo-400">Output more</h2>
//               <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A smarter workflow</p>
//               <p className="mt-6 text-lg leading-8 text-gray-300">
//                 Offering tailored solutions to help your business level-up with the latest AI technology solutions.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9">
//                     <dt className="inline font-semibold text-white">
//                       <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//           <CodeSampleAI />


          

//         </div>
//       </div>
//     </div>
//   )
// }


        //   <img
        //     src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
        //     alt="Product screenshot"
        //     className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        //     width={2432}
        //     height={1442}
        //   />

        // <CodeSampleAI />

      //   <img
      //   src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
      //   alt="Product screenshot"
      //   className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
      //   width={2432}
      //   height={1442}
      // />