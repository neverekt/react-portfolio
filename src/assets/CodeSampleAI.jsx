import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeSampleAI() {
    return (
        <SyntaxHighlighter language="json" style={vscDarkPlus}>
            {`{
                "id": "customer-interaction-march-2023",
                "object": "customer-inquiry-0223",
                "created": 1661516177,
                "model": "customer-behavior-model-0051",
                "usage": {
                    "prompt_tokens": 135,
                    "completion_tokens": 75,
                    "total_tokens": 210
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
            }`
            }
        </SyntaxHighlighter>
    );
}
