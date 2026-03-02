export const projects = [
    {
        id: 1,
        title: "DockerOpsAgent",
        description: "Conversational, LangGraph-powered assistant for Docker Hub tasks. It plans, checks risky actions, executes MCP tools, and summarizes outcomes — all from a simple CLI.",
        details: "The EcoScale Serverless Backend is a complete cloud-native solution designed for processing high-throughput IoT telemetry. By utilizing Azure Functions and Cosmos DB, the architecture ensures seamless horizontal scaling under load. It employs Event Grid for event-driven patterns, substantially reducing overall latency. Infrastructure is fully codified using Bicep/ARM templates, and sensitive settings are secured behind Azure Key Vault with Managed Identities. Future versions will incorporate more complex anomaly detection algorithms directly into the event stream.",
        images: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
        ],
        architecture: ["Langgraph", "Docker Hub MCP", "Gemini API", "Typscript MCP SDK"],
        highlights: [
            "Plans multi-step Docker Hub workflows and executes the right tools.",
            "Human-in-the-loop guardrails for create/update operations.",
            "Lightweight CLI with checkpointed threads so you can pause/resume.",
            "Structured logging for debugging (set LOG_LEVEL)"
        ],
        github: "https://github.com/yourusername/ecoscale",
        live: "https://ecoscale-demo.azurewebsites.net"
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
