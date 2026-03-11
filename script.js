const patternsData = [
    { name: "Monolith", tag: "Classic", scale: "1K users", tech: "Node.js, PostgreSQL", pros: "Fast dev, Simple deploy", cons: "Scaling limit", cost: "$15/mo" },
    { name: "MVC Pattern", tag: "UI Arch", scale: "5K users", tech: "Ruby on Rails", pros: "Clear separation", cons: "Hard to maintain scale", cost: "$25/mo" },
    { name: "Layered Arch", tag: "Enterprise", scale: "10K users", tech: "Java, Spring Boot", pros: "Easy testing", cons: "Perf overhead", cost: "$40/mo" },
    { name: "Hexagonal", tag: "Clean Code", scale: "50K users", tech: "Python, FastAPI", pros: "Tech agnostic", cons: "Boilerplate code", cost: "$60/mo" },
    { name: "Micro-kernel", tag: "Modular", scale: "80K users", tech: "C++, Qt", pros: "Extensibility", cons: "Core complexity", cost: "$120/mo" },
    { name: "Serverless FaaS", tag: "Cloud", scale: "200K users", tech: "AWS Lambda", pros: "Auto-scaling", cons: "Cold start latency", cost: "$250/mo" },
    { name: "CQRS", tag: "Data Logic", scale: "400K users", tech: "Kafka, .NET", pros: "High read speed", cons: "Eventual consistency", cost: "$450/mo" },
    { name: "Event Sourcing", tag: "Immutable", scale: "600K users", tech: "EventStoreDB", pros: "Full audit trail", cons: "Storage heavy", cost: "$550/mo" },
    { name: "Pub-Sub", tag: "Async", scale: "800K users", tech: "RabbitMQ, Redis", pros: "Decoupling", cons: "Message delivery risk", cost: "$700/mo" },
    { name: "Microservices", tag: "Distributed", scale: "1M users", tech: "Go, Kubernetes", pros: "Fault isolation", cons: "Complex networking", cost: "$1.2K/mo" },
    { name: "API Gateway", tag: "Edge", scale: "5M users", tech: "Kong, Nginx", pros: "Centralized Auth", cons: "Single failure point", cost: "$2K/mo" },
    { name: "Saga Pattern", tag: "Transactions", scale: "10M users", tech: "Java, Temporal", pros: "Data consistency", cons: "Complex rollback", cost: "$3.5K/mo" },
    { name: "DB Sharding", tag: "Database", scale: "25M users", tech: "Vitess, MySQL", pros: "Write scalability", cons: "Join complexity", cost: "$5K/mo" },
    { name: "Cell-Based Arch", tag: "Resilient", scale: "50M users", tech: "AWS, Terraform", pros: "Blast radius control", cons: "High infra cost", cost: "$12K/mo" },
    { name: "Sidecar Pattern", tag: "Mesh", scale: "50M+ users", tech: "Istio, Envoy", pros: "Logic abstraction", cons: "Resource overhead", cost: "$15K/mo" },
    { name: "Bulkhead", tag: "Stability", scale: "100M users", tech: "Hystrix, Resilience4j", pros: "Prevents cascading", cons: "Resource pooling", cost: "$18K/mo" }
];

const perfData = [
    { name: "Latency P99", tag: "Speed", metric: "42ms", desc: "Global edge nodes monitoring.", stat: "Optimized" },
    { name: "Throughput", tag: "Traffic", metric: "120k rps", desc: "Requests handled under stress.", stat: "Stable" },
    { name: "Cache Hit Ratio", tag: "Memory", metric: "94.2%", desc: "Redis efficiency analysis.", stat: "High" },
    { name: "DB Query Time", tag: "Database", metric: "12ms", desc: "Average time for read joins.", stat: "Healthy" },
    { name: "Error Rate", tag: "Stability", metric: "0.01%", desc: "HTTP 5xx errors last 24h.", stat: "Excellent" },
    { name: "CPU Utilization", tag: "Compute", metric: "65%", desc: "Load across K8s clusters.", stat: "Normal" },
    { name: "Cold Start", tag: "Lambda", metric: "180ms", desc: "Init time for Python runtimes.", stat: "Warning" },
    { name: "Network Ingress", tag: "Bandwidth", metric: "4.2 GB/s", desc: "Inbound traffic flow.", stat: "Peak" },
    { name: "Memory Leak", tag: "Audit", metric: "Clean", desc: "GC efficiency in Go services.", stat: "Passed" },
    { name: "Disk I/O", tag: "Storage", metric: "15k IOPS", desc: "SSD write performance.", stat: "Optimal" },
    { name: "SSL Handshake", tag: "Security", metric: "8ms", desc: "TLS negotiation speed.", stat: "Fast" },
    { name: "Message Lag", tag: "Kafka", metric: "25ms", desc: "Producer/Consumer offset delay.", stat: "Low" },
    { name: "Hydration Time", tag: "Frontend", metric: "1.2s", desc: "React SSR performance.", stat: "Slow" },
    { name: "Goroutine Count", tag: "Concurrency", metric: "5k active", desc: "Concurrent worker scaling.", stat: "Stable" },
    { name: "Container Boot", tag: "Runtime", metric: "2.5s", desc: "Cold start to ready state.", stat: "Healthy" }
];

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('content').classList.toggle('full-width');
}

function nav(id, el) {
    document.querySelectorAll('[data-section]').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    el.classList.add('active');
}

function drawPatterns(list) {
    document.getElementById('patternsGrid').innerHTML = list.map(p => `
        <div class="card">
            <div>
                <div class="card-tag">${p.tag}</div>
                <h2 class="card-title">${p.name}</h2>
                <p class="card-desc">Advanced blueprint for ${p.name} at ${p.scale}. Comprehensive system design guide.</p>
                <div class="tech-stack">STACK: ${p.tech}</div>
                <div class="trade-offs">
                    <div style="color: #4ade80;">▲ Pros: ${p.pros}</div>
                    <div style="color: #f87171;">▼ Cons: ${p.cons}</div>
                </div>
            </div>
            <div class="card-stats">
                <span>Scale: ${p.scale}</span>
                <span style="color: #ffcc00;">Cost: ${p.cost}</span>
            </div>
            <button class="btn-sub">View Full Blueprint</button>
        </div>
    `).join('');
}

function drawPerf(list) {
    document.getElementById('perfGrid').innerHTML = list.map(p => `
        <div class="card">
            <div>
                <div class="card-tag">${p.tag}</div>
                <h2 class="card-title">${p.name}</h2>
                <div class="perf-graph">[ Real-time Metric: ${p.metric} ]</div>
                <p class="card-desc">${p.desc}</p>
            </div>
            <div class="card-stats">
                <span style="color: var(--accent-perf);">${p.stat}</span>
                <span>Updated: Live</span>
            </div>
            <button class="btn-sub">Refresh Metrics</button>
        </div>
    `).join('');
}

// Search Filter Logic
document.getElementById('patternSearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = patternsData.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.scale.toLowerCase().includes(q) || 
        p.tech.toLowerCase().includes(q)
    );
    drawPatterns(filtered);
});

// Initialize on Load
window.onload = () => {
    drawPatterns(patternsData);
    drawPerf(perfData);
};