// ─────────────────────────────────────────────
//  script.js  —  DevDocs shared data + helpers
//  Used by: index.html, patterns.html, search.html
// ─────────────────────────────────────────────


// ══════════════════════════════════════════════
//  1. DATA  —  16 Architecture Patterns
//  Each object has: name, tag, scale, latency,
//  tech, pros, cons, cost, snippet, arch
// ══════════════════════════════════════════════

const patterns = [
  {
    name: "Monolith",
    tag: "Classic",
    scale: "1K users",
    latency: "Low",
    tech: "Node.js, PostgreSQL",
    pros: "Fast to build, simple deploy",
    cons: "Hard to scale beyond a point",
    cost: "₹1,260/mo",
    snippet: `const app = express();\napp.use('/api', router);\napp.listen(3000);`,
    arch: `Client → [Express App] → [PostgreSQL]`
  },
  {
    name: "MVC Pattern",
    tag: "UI Arch",
    scale: "5K users",
    latency: "Low",
    tech: "Ruby on Rails",
    pros: "Clear separation of concerns",
    cons: "Gets messy at scale",
    cost: "₹2,100/mo",
    snippet: `class UsersController < ApplicationController\n  def index\n    @users = User.all\n  end\nend`,
    arch: `Client → Controller → Model → View → Client`
  },
  {
    name: "Layered Arch",
    tag: "Enterprise",
    scale: "10K users",
    latency: "Medium",
    tech: "Java, Spring Boot",
    pros: "Easy to test each layer",
    cons: "Performance overhead between layers",
    cost: "₹3,360/mo",
    snippet: `@GetMapping("/users")\npublic List<User> list() {\n  return svc.getAll();\n}`,
    arch: `UI → [Controller] → [Service] → [Repository] → DB`
  },
  {
    name: "Hexagonal",
    tag: "Clean Code",
    scale: "50K users",
    latency: "Low",
    tech: "Python, FastAPI",
    pros: "Tech agnostic, highly testable",
    cons: "Lots of boilerplate code",
    cost: "₹5,040/mo",
    snippet: `class UserRepo(Protocol):\n    def find(self, id: int) -> User: ...`,
    arch: `[HTTP Adapter] → [App Core] ← [DB Adapter]`
  },
  {
    name: "Micro-kernel",
    tag: "Modular",
    scale: "80K users",
    latency: "Low",
    tech: "C++, Qt",
    pros: "Very extensible via plugins",
    cons: "Core logic becomes complex",
    cost: "₹10,080/mo",
    snippet: `class PluginManager {\n  register(Plugin* p) { plugins.push_back(p); }\n  void runAll() { for (auto p : plugins) p->exec(); }\n};`,
    arch: `[Core] ←→ [Plugin A]\n       ←→ [Plugin B]`
  },
  {
    name: "Serverless FaaS",
    tag: "Cloud",
    scale: "200K users",
    latency: "Variable",
    tech: "AWS Lambda",
    pros: "Auto-scaling, pay per use",
    cons: "Cold start latency issues",
    cost: "₹21,000/mo",
    snippet: `exports.handler = async (event) => {\n  const data = await db.query(event.id);\n  return { statusCode: 200, body: JSON.stringify(data) };\n};`,
    arch: `API GW → [Lambda] → DynamoDB\n             ↓\n         [S3 / SQS]`
  },
  {
    name: "CQRS",
    tag: "Data Logic",
    scale: "400K users",
    latency: "Low",
    tech: "Kafka, .NET",
    pros: "High read speed, clear separation",
    cons: "Eventual consistency complexity",
    cost: "₹37,800/mo",
    snippet: `void Handle(CreateOrderCmd cmd) {\n  _writeDb.Save(new Order(cmd));\n  _bus.Publish(new OrderCreated());\n}`,
    arch: `Write → [Command Bus] → [Write DB]\nRead  → [Query Store] ← [Projector]`
  },
  {
    name: "Event Sourcing",
    tag: "Immutable",
    scale: "600K users",
    latency: "Medium",
    tech: "EventStoreDB",
    pros: "Full audit trail of all changes",
    cons: "Storage heavy over time",
    cost: "₹46,200/mo",
    snippet: `await eventStore.AppendToStream(\n  "order-42",\n  new OrderPlaced { OrderId = 42 }\n);`,
    arch: `[Command] → [Event Store] → [Projections]\n                          ↓\n                     [Read Model]`
  },
  {
    name: "Pub-Sub",
    tag: "Async",
    scale: "800K users",
    latency: "Low",
    tech: "RabbitMQ, Redis",
    pros: "Fully decoupled services",
    cons: "Message delivery risk",
    cost: "₹58,800/mo",
    snippet: `channel.publish('notifications', msg);\nchannel.subscribe('notifications', (msg) => {\n  process(msg);\n});`,
    arch: `[Producer] → [RabbitMQ Exchange]\n  → [Queue A] → Consumer A\n  → [Queue B] → Consumer B`
  },
  {
    name: "Microservices",
    tag: "Distributed",
    scale: "1M users",
    latency: "Medium",
    tech: "Go, Kubernetes",
    pros: "Fault isolation per service",
    cons: "Complex networking and ops",
    cost: "₹1.01L/mo",
    snippet: `func main() {\n  mux := http.NewServeMux()\n  mux.HandleFunc("/health", healthCheck)\n  log.Fatal(http.ListenAndServe(":8080", mux))\n}`,
    arch: `Client → [API GW] → [Auth Svc]\n              → [Order Svc] → [DB]\n              → [Notify Svc]`
  },
  {
    name: "API Gateway",
    tag: "Edge",
    scale: "5M users",
    latency: "Low",
    tech: "Kong, Nginx",
    pros: "Centralized auth and rate limiting",
    cons: "Single point of failure",
    cost: "₹1.68L/mo",
    snippet: `services:\n  - name: user-service\n    url: http://users:8080\n    routes:\n      - paths: ["/users"]`,
    arch: `Internet → [Kong GW]\n  → [Auth Plugin]\n  → [Rate Limit]\n  → [Upstream Svc]`
  },
  {
    name: "Saga Pattern",
    tag: "Transactions",
    scale: "10M users",
    latency: "High",
    tech: "Java, Temporal",
    pros: "Distributed data consistency",
    cons: "Complex rollback logic",
    cost: "₹2.94L/mo",
    snippet: `@WorkflowInterface\npublic interface OrderSaga {\n  @WorkflowMethod\n  void execute(OrderRequest req);\n}`,
    arch: `[Order Svc] → Saga Orchestrator\n  ↓ → [Payment Svc]\n  ↓ → [Inventory Svc]\n  ↓ compensate on fail`
  },
  {
    name: "DB Sharding",
    tag: "Database",
    scale: "25M users",
    latency: "Medium",
    tech: "Vitess, MySQL",
    pros: "Massive write scalability",
    cons: "Cross-shard joins are hard",
    cost: "₹4.20L/mo",
    snippet: `CREATE TABLE orders (\n  id      BIGINT,\n  user_id BIGINT,\n  PRIMARY KEY (user_id, id)\n) ENGINE=InnoDB;`,
    arch: `[App] → [Vitess VTGate]\n  → [Shard 0 : users 0-50M]\n  → [Shard 1 : users 50M+]`
  },
  {
    name: "Cell-Based Arch",
    tag: "Resilient",
    scale: "50M users",
    latency: "Medium",
    tech: "AWS, Terraform",
    pros: "Controls blast radius of failures",
    cons: "Very high infrastructure cost",
    cost: "₹10.08L/mo",
    snippet: `module "cell_us_east" {\n  source = "./cell"\n  region = "us-east-1"\n  users  = "0-10M"\n}`,
    arch: `DNS → [Cell Router]\n  → [Cell US-E]  (0-10M users)\n  → [Cell EU-W]  (10-20M users)`
  },
  {
    name: "Sidecar Pattern",
    tag: "Mesh",
    scale: "50M+ users",
    latency: "Low",
    tech: "Istio, Envoy",
    pros: "Abstracts cross-cutting logic",
    cons: "Extra resource overhead per pod",
    cost: "₹12.60L/mo",
    snippet: `apiVersion: networking.istio.io/v1\nkind: VirtualService\nspec:\n  http:\n  - route:\n    - destination:\n        host: my-service`,
    arch: `[Pod]\n  ├─ App Container\n  └─ Envoy Sidecar → [Service Mesh]`
  },
  {
    name: "Bulkhead",
    tag: "Stability",
    scale: "100M users",
    latency: "High",
    tech: "Hystrix, Resilience4j",
    pros: "Prevents cascading failures",
    cons: "Resource pool management overhead",
    cost: "₹15.12L/mo",
    snippet: `Bulkhead bh = Bulkhead.of("payment",\n  BulkheadConfig.custom()\n    .maxConcurrentCalls(10).build());\nSupplier<String> safe =\n  Bulkhead.decorateSupplier(bh, svc::call);`,
    arch: `[App]\n  → Bulkhead A (10 threads) → [Payment]\n  → Bulkhead B (20 threads) → [Orders]`
  }
];


// ══════════════════════════════════════════════
//  2. DATA  —  15 Performance Metrics
// ══════════════════════════════════════════════

const perfData = [
  { name: "Latency P99",     tag: "Speed",       metric: "42ms",      desc: "Global edge nodes monitoring.",   stat: "Optimized" },
  { name: "Throughput",      tag: "Traffic",     metric: "120k rps",  desc: "Requests handled under stress.",  stat: "Stable"    },
  { name: "Cache Hit Ratio", tag: "Memory",      metric: "94.2%",     desc: "Redis efficiency analysis.",      stat: "High"      },
  { name: "DB Query Time",   tag: "Database",    metric: "12ms",      desc: "Average time for read joins.",    stat: "Healthy"   },
  { name: "Error Rate",      tag: "Stability",   metric: "0.01%",     desc: "HTTP 5xx errors last 24h.",       stat: "Excellent" },
  { name: "CPU Utilization", tag: "Compute",     metric: "65%",       desc: "Load across K8s clusters.",       stat: "Normal"    },
  { name: "Cold Start",      tag: "Lambda",      metric: "180ms",     desc: "Init time for Python runtimes.",  stat: "Warning"   },
  { name: "Network Ingress", tag: "Bandwidth",   metric: "4.2 GB/s",  desc: "Inbound traffic flow.",           stat: "Peak"      },
  { name: "Memory Leak",     tag: "Audit",       metric: "Clean",     desc: "GC efficiency in Go services.",   stat: "Passed"    },
  { name: "Disk I/O",        tag: "Storage",     metric: "15k IOPS",  desc: "SSD write performance.",          stat: "Optimal"   },
  { name: "SSL Handshake",   tag: "Security",    metric: "8ms",       desc: "TLS negotiation speed.",          stat: "Fast"      },
  { name: "Message Lag",     tag: "Kafka",       metric: "25ms",      desc: "Producer/Consumer offset delay.", stat: "Low"       },
  { name: "Hydration Time",  tag: "Frontend",    metric: "1.2s",      desc: "React SSR performance.",          stat: "Slow"      },
  { name: "Goroutine Count", tag: "Concurrency", metric: "5k active", desc: "Concurrent worker scaling.",      stat: "Stable"    },
  { name: "Container Boot",  tag: "Runtime",     metric: "2.5s",      desc: "Cold start to ready state.",      stat: "Healthy"   }
];


// ══════════════════════════════════════════════
//  3. DATA  —  3 Pricing Plans
// ══════════════════════════════════════════════

const pricingData = [
  {
    tier: "Starter",
    color: "#00ffa3",
    price: "₹749",
    badge: null,
    tagline: "Perfect for solo engineers learning system design.",
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
    color: "#38bdf8",
    price: "₹2,449",
    badge: "Most Popular",
    tagline: "For professionals architecting at scale.",
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
    color: "#c084fc",
    price: "₹8,299",
    badge: null,
    tagline: "Team-wide access with private coaching.",
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


// ══════════════════════════════════════════════
//  4. HELPER FUNCTIONS
// ══════════════════════════════════════════════

// Filter patterns array based on search query
// Checks name, scale, latency, tech, tag, pros, cons
function filterPatterns(query) {
  if (!query) return patterns;           // empty query → return all

  const q = query.toLowerCase();        // make search case-insensitive

  return patterns.filter(function(p) {
    return (
      p.name.toLowerCase().includes(q)    ||
      p.scale.toLowerCase().includes(q)   ||
      p.latency.toLowerCase().includes(q) ||
      p.tech.toLowerCase().includes(q)    ||
      p.tag.toLowerCase().includes(q)     ||
      p.pros.toLowerCase().includes(q)    ||
      p.cons.toLowerCase().includes(q)
    );
  });
}

// Escape < > & so code snippets display safely in <pre> tags
function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Wrap matched text in <mark> tags for yellow highlight
function highlight(text, query) {
  if (!query) return text;

  // escape special regex characters in the query
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re   = new RegExp("(" + safe + ")", "gi");

  return text.replace(re, "<mark>$1</mark>");
}


// ══════════════════════════════════════════════
//  5. THEME  —  Dark / Light toggle
// ══════════════════════════════════════════════

// Switch between dark and light mode
function toggleTheme() {
  const current = document.documentElement.dataset.theme;  // "dark" or "light"
  const next    = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;  // apply to <html>
  localStorage.setItem("dd-theme", next);          // remember choice
  syncThemeBtn();                                   // update button label
}

// Update the button text to show what clicking will do
function syncThemeBtn() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  const isDark = document.documentElement.dataset.theme === "dark";
  btn.textContent = isDark ? "☀ Light" : "☾ Dark";
}

// On page load: restore the saved theme from localStorage
(function restoreTheme() {
  const saved = localStorage.getItem("dd-theme");
  if (saved) {
    document.documentElement.dataset.theme = saved;
  }
})();