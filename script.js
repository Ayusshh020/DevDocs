const patternsData = [
    { name: "Monolith", tag: "Classic", scale: "1K users", latency: "Low", tech: "Node.js, PostgreSQL", pros: "Fast dev, Simple deploy", cons: "Scaling limit", cost: "₹1,260/mo" },
    { name: "MVC Pattern", tag: "UI Arch", scale: "5K users", latency: "Low", tech: "Ruby on Rails", pros: "Clear separation", cons: "Hard to maintain scale", cost: "₹2,100/mo" },
    { name: "Layered Arch", tag: "Enterprise", scale: "10K users", latency: "Medium", tech: "Java, Spring Boot", pros: "Easy testing", cons: "Perf overhead", cost: "₹3,360/mo" },
    { name: "Hexagonal", tag: "Clean Code", scale: "50K users", latency: "Low", tech: "Python, FastAPI", pros: "Tech agnostic", cons: "Boilerplate code", cost: "₹5,040/mo" },
    { name: "Micro-kernel", tag: "Modular", scale: "80K users", latency: "Low", tech: "C++, Qt", pros: "Extensibility", cons: "Core complexity", cost: "₹10,080/mo" },
    { name: "Serverless FaaS", tag: "Cloud", scale: "200K users", latency: "Variable", tech: "AWS Lambda", pros: "Auto-scaling", cons: "Cold start latency", cost: "₹21,000/mo" },
    { name: "CQRS", tag: "Data Logic", scale: "400K users", latency: "Low", tech: "Kafka, .NET", pros: "High read speed", cons: "Eventual consistency", cost: "₹37,800/mo" },
    { name: "Event Sourcing", tag: "Immutable", scale: "600K users", latency: "Medium", tech: "EventStoreDB", pros: "Full audit trail", cons: "Storage heavy", cost: "₹46,200/mo" },
    { name: "Pub-Sub", tag: "Async", scale: "800K users", latency: "Low", tech: "RabbitMQ, Redis", pros: "Decoupling", cons: "Message delivery risk", cost: "₹58,800/mo" },
    { name: "Microservices", tag: "Distributed", scale: "1M users", latency: "Medium", tech: "Go, Kubernetes", pros: "Fault isolation", cons: "Complex networking", cost: "₹1.01L/mo" },
    { name: "API Gateway", tag: "Edge", scale: "5M users", latency: "Low", tech: "Kong, Nginx", pros: "Centralized Auth", cons: "Single failure point", cost: "₹1.68L/mo" },
    { name: "Saga Pattern", tag: "Transactions", scale: "10M users", latency: "High", tech: "Java, Temporal", pros: "Data consistency", cons: "Complex rollback", cost: "₹2.94L/mo" },
    { name: "DB Sharding", tag: "Database", scale: "25M users", latency: "Medium", tech: "Vitess, MySQL", pros: "Write scalability", cons: "Join complexity", cost: "₹4.20L/mo" },
    { name: "Cell-Based Arch", tag: "Resilient", scale: "50M users", latency: "Medium", tech: "AWS, Terraform", pros: "Blast radius control", cons: "High infra cost", cost: "₹10.08L/mo" },
    { name: "Sidecar Pattern", tag: "Mesh", scale: "50M+ users", latency: "Low", tech: "Istio, Envoy", pros: "Logic abstraction", cons: "Resource overhead", cost: "₹12.60L/mo" },
    { name: "Bulkhead", tag: "Stability", scale: "100M users", latency: "High", tech: "Hystrix, Resilience4j", pros: "Prevents cascading", cons: "Resource pooling", cost: "₹15.12L/mo" }
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

const pricingData = [
    {
        tier: "Starter",
        badge: null,
        price: "₹749",
        period: "/month",
        tagline: "Perfect for solo engineers learning system design.",
        color: "#00ff88",
        features: [
            "Access to 5 Architecture Blueprints",
            "Community Discord Access",
            "Monthly Design Digest",
            "Basic Performance Metrics",
            "1 Saved Blueprint"
        ],
        cta: "Get Started"
    },
    {
        tier: "Pro",
        badge: "Most Popular",
        price: "₹2,449",
        period: "/month",
        tagline: "For professionals architecting at scale.",
        color: "#00d4ff",
        features: [
            "All 16+ Full Blueprint Deep-Dives",
            "Trade-off Analysis Sheet (PDF)",
            "Code-Level Case Studies",
            "Real-Time Performance Dashboard",
            "Unlimited Saved Blueprints",
            "Priority Discord Support"
        ],
        cta: "Upgrade to Pro"
    },
    {
        tier: "Enterprise",
        badge: null,
        price: "₹8,299",
        period: "/month",
        tagline: "Team-wide access with private coaching.",
        color: "#c084fc",
        features: [
            "Everything in Pro",
            "Up to 20 Team Seats",
            "Private Slack Channel with Authors",
            "Monthly 1:1 Architecture Review",
            "Custom Blueprint Requests",
            "Early Access to New Content",
            "Dedicated Account Manager"
        ],
        cta: "Contact Sales"
    }
];

function drawPricing() {
    document.getElementById('pricingGrid').innerHTML = pricingData.map(p => `
        <div class="card pricing-card ${p.badge ? 'pricing-card--featured' : ''}" style="--plan-color: ${p.color};">
            ${p.badge ? `<div class="pricing-badge">${p.badge}</div>` : ''}
            <div class="pricing-tier">${p.tier}</div>
            <div class="pricing-price">
                <span class="pricing-amount">${p.price}</span>
                <span class="pricing-period">${p.period}</span>
            </div>
            <p class="card-desc" style="margin: 0 0 24px;">${p.tagline}</p>
            <ul class="pricing-features">
                ${p.features.map(f => `<li class="pricing-feature-item">✓ ${f}</li>`).join('')}
            </ul>
            <button class="btn-sub pricing-cta">${p.cta}</button>
        </div>
    `).join('');
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('content').classList.toggle('full-width');
}

// ── PROFILE PANEL ─────────────────────────
function openProfile() {
    document.getElementById('profilePanel').classList.add('open');
    document.getElementById('profileOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    document.getElementById('profilePanel').classList.remove('open');
    document.getElementById('profileOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ── THEME TOGGLE ──────────────────────────
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('devdocs-theme', isDark ? 'light' : 'dark');
}

// Restore saved theme on load
(function () {
    const saved = localStorage.getItem('devdocs-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

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
                <span style="color: #a78bfa;">Latency: ${p.latency}</span>
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
        p.tech.toLowerCase().includes(q) ||
        p.latency.toLowerCase().includes(q)
    );
    drawPatterns(filtered);
});

// Initialize on Load
window.onload = () => {
    drawPatterns(patternsData);
    drawPerf(perfData);
    drawPricing();
};