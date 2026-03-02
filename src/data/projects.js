export const projects = [
    {
        id: 1,
        title: "DockerOpsAgent",
        description: "Conversational, LangGraph-powered assistant for Docker Hub tasks. It plans, checks risky actions, executes MCP tools, and summarizes outcomes — all from a simple CLI.",
        details: "DockerOpsAgent is a conversational assistant that uses LangGraph to handle Docker Hub tasks without requiring custom CLI scripts or manual UI navigation. When the user types a natural-language command into the terminal, the agent turns it into an ordered sequence of Docker operations, executes those operations through MCP tools running inside a Docker container, and returns a concise, human-readable result. Planning is handled by Gemini, and each node is orchestrated by LangGraph, producing a predictable and well-structured workflow for tasks like listing repositories, inspecting images, and checking usage metadata.",
        images: [
            "/projects/DockerOpsAgent/DockerOpsFlow.png"
        ],
        architecture: ["Langgraph", "Docker Hub MCP", "Gemini API", "Typscript MCP SDK"],
        highlights: [
            "Plans multi-step Docker Hub workflows and executes the right tools.",
            "Human-in-the-loop guardrails for create/update operations.",
            "Lightweight CLI with checkpointed threads so you can pause/resume.",
            "Structured logging for debugging (set LOG_LEVEL)"
        ],
        github: "https://github.com/Rahul-1611/DockerOpsAgent",
        live: "https://gmuedu-my.sharepoint.com/:v:/g/personal/rdeshmu_gmu_edu/IQDakrq8lYZhQYTcVQVJW5eyAQ3nGrbaKq5II4IupgZPyuI?e=QZgyud&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D"
    },
    {
        id: 2,
        title: "ShareSafely",
        description: "Cloud-native file storage solution focused on high availability and end-to-end security compliance.",
        details: "ShareSafely is built entirely on Azure Blob Storage with a strong focus on enterprise-grade security. It facilitates secure file uploads using temporary, short-lived SAS tokens, ensuring that backend credentials are never exposed to the client application. Global load balancing and web application firewall (WAF) functionality is provided by Azure Front Door. For user authentication and role-based access control, the system seamlessly integrates with Azure Active Directory (Entra ID).",
        images: [
            "/projects/ShareSafely/ShareSafelyArch.png",
            "/projects/ShareSafely/ShareSafelyDemo.png"
        ],
        architecture: ["Blob Storage", "Azure AD", "Azure Front Door", "React"],
        highlights: [
            "Enabled SAS-token based secure uploads to Blob Storage",
            "Configured Azure Front Door for global load balancing and WAF",
            "Integrated Azure Active Directory for RBAC authentication"
        ],
        github: "https://github.com/yourusername/share-safely",
        live: ""
    },
    {
        id: 3,
        title: "VM Fleet Commander",
        description: "Automated virtual machine management and orchestration system for high-scale cloud environments.",
        details: "VM Fleet Commander provides a centralized control plane for managing large-scale VM deployments across multiple regions. It leverages native cloud APIs for automated provisioning, lifecycle management, and monitoring of virtual infrastructure.",
        images: [
            "/projects/VM-Fleet-Commander/VMFleetArch.jpg"
        ],
        architecture: ["Cloud APIs", "Python", "Automation", "Monitoring"],
        highlights: [
            "Automated multi-region VM provisioning and teardown",
            "Real-time health monitoring and automated recovery",
            "Centralized dashboard for fleet-wide visibility"
        ],
        github: "https://github.com/yourusername/vm-fleet-commander",
        live: ""
    },
    {
        id: 4,
        title: "Mock Interview Platform",
        description: "Full-stack application designed to help developers practice technical interviews with AI-driven feedback.",
        details: "A comprehensive platform that simulates real-world interview scenarios. It includes code editors, video sessions, and automated feedback mechanisms to improve interview readiness.",
        images: [
            "/projects/Mock-Interview-Platform/login.png",
            "/projects/Mock-Interview-Platform/Dashboard.png",
            "/projects/Mock-Interview-Platform/execution.png"
        ],
        architecture: ["React", "Node.js", "WebSockets", "AI Feedback"],
        highlights: [
            "Real-time collaborative code editor with syntax highlighting",
            "AI-integrated feedback system for technical accuracy",
            "Video/Audio streaming for realistic interview simulation"
        ],
        github: "https://github.com/yourusername/mock-interview",
        live: ""
    },
    {
        id: 5,
        title: "nsLookup Clone",
        description: "A specialized network utility for DNS querying and troubleshooting, built to replicate professional tools.",
        details: "Built as a high-performance network utility, this clone allows users to perform deep DNS lookups, verify records, and diagnose connectivity issues from a streamlined interface.",
        images: [
            "/projects/nsLookup-Clone/demo-nsLookupClone.png"
        ],
        architecture: ["C++/Go", "Networking", "DNS Protocol"],
        highlights: [
            "Fast recursive and iterative DNS query resolution",
            "Supports all major record types (A, AAAA, MX, TXT, CNAME)",
            "Detailed response analysis including TTL and Authoritative status"
        ],
        github: "https://github.com/yourusername/nslookup-clone",
        live: ""
    },
    {
        id: 6,
        title: "AeroCarbon",
        description: "Dashboard for monitoring and analyzing carbon footprints and environmental impacts of aeronautical operations.",
        details: "AeroCarbon provides a data-driven approach to tracking emissions. It aggregates flight data and calculates carbon offsets, providing actionable insights for sustainability initiatives.",
        images: [
            "/projects/AeroCarbon/Dashboard.png",
            "/projects/AeroCarbon/AeroCarbonDemo.png"
        ],
        architecture: ["React", "Data Visualization", "Environmental APIs"],
        highlights: [
            "Real-time carbon footprint calculation based on flight parameters",
            "Interactive data visualizations for trend analysis",
            "Exportable sustainability reports for regulatory compliance"
        ],
        github: "https://github.com/yourusername/aerocarbon",
        live: ""
    },
    {
        id: 7,
        title: "nasaMCPServer",
        description: "A Model Context Protocol (MCP) server that interfaces with NASA's open APIs to provide space-related data to AI models.",
        details: "This server implements the MCP standard to allow AI agents (like Claude) to directly query NASA datasets, including APOD (Astronomy Picture of the Day), Mars Rover photos, and Near Earth Object data.",
        images: [
            "/projects/nasaMCPServer/Tools.png",
            "/projects/nasaMCPServer/Execution.png"
        ],
        architecture: ["TypeScript", "MCP SDK", "NASA Open APIs"],
        highlights: [
            "Implemented standard MCP tool definitions for space data retrieval",
            "Seamless integration with Claude Desktop and other MCP clients",
            "High-performance caching layer for NASA API responses"
        ],
        github: "https://github.com/yourusername/nasa-mcp-server",
        live: ""
    },
    {
        id: 8,
        title: "Vocal Coin",
        description: "Cryptocurrency tracking and analysis platform featuring voice-driven navigation and alerts.",
        details: "Vocal Coin combines financial technology with voice recognition, allowing users to track their portfolios and set price alerts using natural language commands.",
        images: [
            "/projects/Vocal-Coin/VocalCoinDemo.png"
        ],
        architecture: ["React", "Voice Recognition API", "Crypto Exchange APIs"],
        highlights: [
            "Voice-activated portfolio tracking and market searches",
            "Real-time price updates for over 1000+ cryptocurrencies",
            "Secure encrypted wallet integration for personal holdings"
        ],
        github: "https://github.com/yourusername/vocal-coin",
        live: ""
    },
    {
        id: 9,
        title: "Federated Learning Demo",
        description: "A showcase of privacy-preserving machine learning where models are trained across decentralized devices.",
        details: "This demo illustrates the lifecycle of a federated learning job, from server-side initialization to local model updates and global aggregation, ensuring data never leaves the client devices.",
        images: [
            "/projects/Federated-Learning-Demo/Start.jpeg",
            "/projects/Federated-Learning-Demo/Running.jpeg",
            "/projects/Federated-Learning-Demo/Training.jpeg",
            "/projects/Federated-Learning-Demo/Finished.jpeg",
            "/projects/Federated-Learning-Demo/Exception.jpeg"
        ],
        architecture: ["Python", "TensorFlow Federated", "Decentralized Systems"],
        highlights: [
            "Demonstrated secure model aggregation without data exposure",
            "Visualized local training progress across multiple simulated nodes",
            "Implemented robust error handling for edge-case connectivity issues"
        ],
        github: "https://github.com/yourusername/federated-learning-demo",
        live: ""
    },
    {
        id: 10,
        title: "AdviceChromeExtension",
        description: "A lightweight Chrome extension that provides contextual productivity advice and mental wellness prompts.",
        details: "Designed to counteract digital fatigue, this extension surfaces timely advice and productivity hacks based on the user's browsing patterns and time spent on specific domains.",
        images: [
            "/projects/AdviceChromeExtension/desktop-design.jpg",
            "/projects/AdviceChromeExtension/mobile-design.jpg"
        ],
        architecture: ["Javascript", "Chrome Extension API", "HTML/CSS"],
        highlights: [
            "Context-aware productivity prompts based on active tabs",
            "Low-footprint background processing ensuring no browser lag",
            "Customizable advice categories including 'Wellness' and 'Technical Hacks'"
        ],
        github: "https://github.com/yourusername/advice-extension",
        live: ""
    },
    {
        id: 11,
        title: "Microservices Training Engine",
        description: "Distributed infrastructure training system used for large-scale Kubernetes deployments.",
        details: "This project showcases container orchestration at scale. It includes automated pipelines for deploying full-stack applications across heterogeneous environments using Rancher and Kubernetes.",
        images: [
            "/projects/FullStackDeployment/Rancher.png",
            "/projects/FullStackDeployment/LiveApp.png"
        ],
        architecture: ["Rancher", "Kubernetes", "Docker", "CI/CD"],
        highlights: [
            "Configured multi-cluster management through Rancher",
            "Automated blue-green deployment strategies for zero downtime",
            "Implemented comprehensive cluster visibility and logging"
        ],
        github: "https://github.com/yourusername/full-stack-deploy",
        live: ""
    }
];
