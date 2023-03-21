import React from 'react';

export default function CodeSampleAI() {
    return (
        <div>
            <pre className="hljs syntax-highlighter dark code-sample-pre">
                <code className="language-json" style={{ whiteSpace: 'pre' }}>
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
                "content": "\n\nThis is a test!"
            },
            "finish_reason": "stop",
            "index": 0
        }
    ]
}`}
                </code>
            </pre>
        </div>
    );
}
