import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeSampleAI() {
    return (
    <SyntaxHighlighter language="json" style={vscDarkPlus}>
        {
`{
    "iteration": 10,
    "batch": 3,
    "total_loss": 1.1234,
    "avg_loss": 0.4567,
    "inputs": [
        {
            "text": "Annual budget report for Q1.",
            "metadata": {
                "label": "budget",
                "source": "financial data"
            }
        },
        {
            "text": "Sales performance analysis for the past year.",
            "metadata": {
                "label": "sales",
                "source": "CRM system"
            }
        }
    ],
    "model_params": {
        "hidden_dim": 768,
        "num_layers": 12,
        "num_heads": 12,
        "dropout": 0.1
    },
    "training_params": {
        "batch_size": 32,
        "learning_rate": 0.001,
        "num_epochs": 20
    },
    "training_time": "02:34:56"
    }`
    }
</SyntaxHighlighter>
    );
}