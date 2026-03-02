export const projects = [
    {
        id: 1,
        title: "DockerOpsAgent",
        description: "Conversational, LangGraph-powered assistant for Docker Hub tasks. It plans, checks risky actions, executes MCP tools, and summarizes outcomes — all from a simple CLI.",
        details: "DockerOpsAgent is a conversational assistant that uses LangGraph to handle Docker Hub tasks without requiring custom CLI scripts or manual UI navigation. When the user types a natural-language command into the terminal, the agent turns it into an ordered sequence of Docker operations, executes those operations through MCP tools running inside a Docker container, and returns a concise, human-readable result. Planning is handled by Gemini, and each node is orchestrated by LangGraph, producing a predictable and well-structured workflow for tasks like listing repositories, inspecting images, and checking usage metadata.",
        images: [
            "/projects/DockerOpsAgent/DockerOpsAgent.png",
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
        title: "Secure Cloud File Vault",
        description: "Cloud-native file storage solution focused on high availability and end-to-end security compliance.",
        details: "Secure Cloud File Vault is built entirely on Azure Blob Storage with a strong focus on enterprise-grade security. It facilitates secure file uploads using temporary, short-lived SAS tokens, ensuring that backend credentials are never exposed to the client application. Global load balancing and web application firewall (WAF) functionality is provided by Azure Front Door. For user authentication and role-based access control, the system seamlessly integrates with Azure Active Directory (Entra ID).",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
        ],
        architecture: ["Blob Storage", "Azure AD", "Azure Front Door", "React"],
        highlights: [
            "Enabled SAS-token based secure uploads to Blob Storage",
            "Configured Azure Front Door for global load balancing and WAF",
            "Integrated Azure Active Directory for RBAC authentication"
        ],
        github: "https://github.com/yourusername/cloud-file-vault",
        live: ""
    },
    {
        id: 3,
        title: "Microservices Notification Engine",
        description: "Distributed notification routing service handling email, SMS, and push notifications.",
        details: "This notification engine relies on a microservices-based architecture to fan out messages across multiple communication channels (Email, SMS, Push). At its core, it uses Azure Service Bus topics and subscriptions for reliable and decoupled message delivery. The microservices are containerized using Docker and orchestrated via Azure Kubernetes Service (AKS), allowing for auto-scaling based on queue depth. It also implements a sophisticated distributed rate-limiting mechanism backed by Redis.",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
        ],
        architecture: ["Service Bus", "AKS", "Redis", "Docker"],
        highlights: [
            "Utilized Azure Service Bus topics/subscriptions for decoupled routing",
            "Containerized services orchestrated with Azure Kubernetes Service",
            "Implemented distributed caching with Redis for rate-limiting"
        ],
        github: "https://github.com/yourusername/notification-engine",
        live: "https://notify.example.com"
    }
];
