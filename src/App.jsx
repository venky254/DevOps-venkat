import "./App.css";

const LINKS = {
  github: "https://github.com/venky254",
  linkedin: "https://www.linkedin.com/in/y-venkataramana-devops",
  sujitha: "http://venkatdevops.shop/sujitha/",
  flower: "http://venkatdevops.shop/flower/",
  travel: "http://venkatdevops.shop/travel/",
};

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

const experience = [
  {
    icon: "⚡",
    title: "Application Layer",
    text: "Worked with Node.js, Express.js and modern web application deployment workflows.",
  },
  {
    icon: "☁",
    title: "AWS Infrastructure",
    text: "Hands-on experience deploying and managing applications using AWS cloud infrastructure.",
  },
  {
    icon: "🏗",
    title: "Infrastructure as Code",
    text: "Provisioning and managing cloud infrastructure using Terraform and Infrastructure as Code practices.",
  },
  {
    icon: "🐳",
    title: "Containerization",
    text: "Building Docker images, managing containers, networks, volumes and Docker Compose environments.",
  },
  {
    icon: "☸",
    title: "Kubernetes & EKS",
    text: "Deploying containerized applications using Kubernetes and Amazon Elastic Kubernetes Service.",
  },
  {
    icon: "⚙",
    title: "CI/CD Automation",
    text: "Automating build, test and deployment workflows using Jenkins and GitHub Actions.",
  },
  {
    icon: "📊",
    title: "Monitoring",
    text: "Monitoring infrastructure and applications using Prometheus and Grafana.",
  },
  {
    icon: "🔧",
    title: "Troubleshooting",
    text: "Finding root causes across containers, networking, cloud infrastructure and application deployments.",
  },
];

const deploymentModels = [
  {
    number: "01",
    title: "AWS EC2",
    text: "Traditional cloud deployment using EC2, Linux, Nginx, Docker and DNS.",
  },
  {
    number: "02",
    title: "Docker",
    text: "Containerized application deployment using Docker, Compose, networks and volumes.",
  },
  {
    number: "03",
    title: "Kubernetes / EKS",
    text: "Orchestrated deployment for scalable and highly available container workloads.",
  },
  {
    number: "04",
    title: "AWS Lambda",
    text: "Serverless deployment approach for event-driven and lightweight workloads.",
  },
];

const stack = [
  {
    title: "Application",
    items: ["Node.js", "Express.js", "Next.js"],
  },
  {
    title: "AWS",
    items: ["EC2", "VPC", "IAM", "EKS", "S3", "Route 53", "Lambda"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation"],
  },
  {
    title: "Containers",
    items: ["Docker", "Docker Compose", "Docker Hub"],
  },
  {
    title: "Orchestration",
    items: ["Kubernetes", "Amazon EKS", "Helm", "ArgoCD"],
  },
  {
    title: "CI/CD",
    items: ["Jenkins", "GitHub Actions"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "Loki"],
  },
  {
    title: "Networking",
    items: ["Nginx", "DNS", "Load Balancing", "Reverse Proxy"],
  },
  {
    title: "DevOps Tools",
    items: ["Git", "GitHub", "SonarQube", "Ansible"],
  },
];

const capabilities = [
  "AWS Cloud Deployment",
  "Infrastructure Provisioning",
  "Docker Containerization",
  "Kubernetes Deployment",
  "CI/CD Automation",
  "Nginx & DNS",
  "Monitoring & Observability",
  "Deployment Troubleshooting",
];

const projects = [
  {
    title: "AWS Application Deployment",
    text: "Deploying web applications on AWS infrastructure with Linux, networking, DNS and Nginx.",
    tags: ["AWS", "EC2", "Linux", "Nginx"],
  },
  {
    title: "Dockerized Applications",
    text: "Containerizing applications and managing multi-container deployments using Docker Compose.",
    tags: ["Docker", "Compose", "MongoDB"],
  },
  {
    title: "Kubernetes & Amazon EKS",
    text: "Deploying containerized applications using Kubernetes workloads, services and Amazon EKS.",
    tags: ["Kubernetes", "EKS", "AWS"],
  },
  {
    title: "Terraform Infrastructure",
    text: "Provisioning repeatable cloud infrastructure using Terraform and Infrastructure as Code.",
    tags: ["Terraform", "AWS", "IaC"],
  },
  {
    title: "CI/CD Automation",
    text: "Building automated pipelines for application build, quality checks and deployment.",
    tags: ["Jenkins", "GitHub Actions", "SonarQube"],
  },
  {
    title: "Monitoring & Observability",
    text: "Monitoring infrastructure, containers and application health with observability tools.",
    tags: ["Prometheus", "Grafana", "Loki"],
  },
];

const liveApps = [
  {
    title: "Sujitha Application",
    text: "Application deployed on AWS using Docker and exposed through Nginx reverse proxy.",
    tags: ["AWS", "Docker", "Nginx", "Cloud"],
    url: LINKS.sujitha,
  },
  {
    title: "Flower Application",
    text: "Node.js application deployed using Docker with MongoDB and Nginx routing.",
    tags: ["AWS", "Docker", "Nginx", "MongoDB"],
    url: LINKS.flower,
  },
  {
    title: "Travel Booking Application",
    text: "Travel booking system deployed using Docker Compose with MongoDB and Nginx.",
    tags: ["AWS", "Docker Compose", "MongoDB", "Nginx"],
    url: LINKS.travel,
  },
];

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            VENKAT.<span>DEVOPS</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#projects">Projects</a>
            <a href="#live-apps">Live Apps</a>
            <a href="#mentor">Mentor</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}

        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-left">
              <p className="hero-label">
                DEVOPS • CLOUD • AUTOMATION • SRE
              </p>

              <h1>
                Hi, I'm <span>Venkataramana</span>
              </h1>

              <h2>DevOps & Cloud Engineer</h2>

              <p className="hero-description">
                DevOps Engineer with one year of hands-on experience deploying
                applications through different architectures using AWS,
                Terraform, Docker, Kubernetes, CI/CD and cloud-native
                technologies.
              </p>

              <div className="hero-tech">
                <span>AWS</span>
                <span>Terraform</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>EKS</span>
                <span>Jenkins</span>
                <span>GitHub Actions</span>
                <span>Prometheus</span>
                <span>Grafana</span>
              </div>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Projects
                </a>

                <a href="#live-apps" className="btn btn-outline">
                  Live Applications
                </a>

                <ExternalLink
                  href={LINKS.github}
                  className="btn btn-outline"
                >
                  GitHub ↗
                </ExternalLink>

                <ExternalLink
                  href={LINKS.linkedin}
                  className="btn btn-outline"
                >
                  LinkedIn ↗
                </ExternalLink>
              </div>
            </div>

            <div className="hero-right">
              <div className="profile-glow"></div>

              <div className="profile-frame">
                <img
                  src="/images/venkat-profile.png"
                  alt="Venkataramana - DevOps and Cloud Engineer"
                  className="profile-image"
                />
              </div>
            </div>
          </div>

          <div className="hero-quote">
            <span>$</span>
            Errors don't stop me — I find the cause, fix it, and deploy again.
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="section" id="about">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>More Than Just Learning Tools</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a DevOps & Cloud Engineer with one year of hands-on
                experience working with application deployment, cloud
                infrastructure, containerization, orchestration, CI/CD and
                monitoring.
              </p>

              <p>
                I have worked with different deployment approaches including
                AWS infrastructure, Docker, Kubernetes, Amazon EKS, Terraform
                and serverless concepts.
              </p>

              <p>
                My focus is not only on learning individual DevOps tools. I
                focus on understanding the application first and selecting the
                right deployment architecture based on scalability,
                availability, security, maintainability, observability and
                cost.
              </p>
            </div>

            <div className="terminal-card">
              <div className="terminal-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="terminal-body">
                <p>
                  <b>$ whoami</b>
                  <span>→ DevOps & Cloud Engineer</span>
                </p>

                <p>
                  <b>$ experience</b>
                  <span>→ 1 Year Hands-On DevOps</span>
                </p>

                <p>
                  <b>$ deployment</b>
                  <span>→ AWS • Docker • Kubernetes • EKS</span>
                </p>

                <p>
                  <b>$ infrastructure</b>
                  <span>→ Terraform • AWS</span>
                </p>

                <p>
                  <b>$ automation</b>
                  <span>→ Jenkins • GitHub Actions</span>
                </p>

                <p>
                  <b>$ observability</b>
                  <span>→ Prometheus • Grafana</span>
                </p>

                <p>
                  <b>$ mindset</b>
                  <span>→ Understand → Design → Automate → Deploy</span>
                </p>

                <p>
                  <b>$ status</b>
                  <span className="terminal-status">
                    → ● Exploring Production-Ready Architecture
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section className="section section-alt">
          <div className="section-heading">
            <p>HANDS-ON EXPERIENCE</p>
            <h2>What I Work With</h2>
          </div>

          <div className="card-grid experience-grid">
            {experience.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= DEPLOYMENT ================= */}

        <section className="section">
          <div className="section-heading">
            <p>DEPLOYMENT APPROACH</p>
            <h2>Different Applications Need Different Architectures</h2>
          </div>

          <p className="section-intro">
            There is no single deployment method for every application. The
            architecture should be selected based on the application's actual
            requirements.
          </p>

          <div className="deployment-grid">
            {deploymentModels.map((item) => (
              <article className="deployment-card" key={item.title}>
                <span className="deployment-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="decision-flow">
            <div>
              <span>01</span>
              <strong>Understand</strong>
              <small>Application Requirements</small>
            </div>

            <b>→</b>

            <div>
              <span>02</span>
              <strong>Design</strong>
              <small>Deployment Architecture</small>
            </div>

            <b>→</b>

            <div>
              <span>03</span>
              <strong>Provision</strong>
              <small>Cloud Infrastructure</small>
            </div>

            <b>→</b>

            <div>
              <span>04</span>
              <strong>Deploy</strong>
              <small>Application Workloads</small>
            </div>

            <b>→</b>

            <div>
              <span>05</span>
              <strong>Observe</strong>
              <small>Monitor & Improve</small>
            </div>
          </div>
        </section>

        {/* ================= STACK ================= */}

        <section className="section section-alt" id="stack">
          <div className="section-heading">
            <p>TECHNOLOGY STACK</p>
            <h2>Tools & Technologies</h2>
          </div>

          <div className="stack-grid">
            {stack.map((group) => (
              <article className="stack-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="stack-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CAPABILITIES ================= */}

        <section className="section" id="capabilities">
          <div className="section-heading">
            <p>CAPABILITIES</p>
            <h2>What I Can Do</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <div className="capability-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section className="section section-alt" id="projects">
          <div className="section-heading">
            <p>PROJECTS</p>
            <h2>Hands-On DevOps Work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>PROJECT</span>
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= LIVE APPLICATIONS ================= */}

        <section className="section" id="live-apps">
          <div className="section-heading">
            <p>LIVE APPLICATIONS</p>
            <h2>Applications Running in the Cloud</h2>
          </div>

          <p className="section-intro">
            These applications are deployed and accessible through my cloud
            environment.
          </p>

          <div className="live-grid">
            {liveApps.map((app) => (
              <article className="live-card" key={app.title}>
                <div className="live-status">
                  <span></span>
                  LIVE
                </div>

                <h3>{app.title}</h3>
                <p>{app.text}</p>

                <div className="project-tags">
                  {app.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <ExternalLink href={app.url} className="live-link">
                  Open Live Application ↗
                </ExternalLink>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CURRENT FOCUS ================= */}

        <section className="focus-section">
          <div className="focus-container">
            <p>CURRENT FOCUS</p>

            <h2>
              From <span>“How Can I Deploy It?”</span>
              <br />
              to{" "}
              <span>
                “What Is the Right Way to Deploy It?”
              </span>
            </h2>

            <p className="focus-description">
              Building deeper knowledge in production-ready DevOps
              architecture, automation, scalability, reliability and
              observability.
            </p>
          </div>
        </section>

        {/* ================= MENTOR ================= */}

        <section className="mentor-page" id="mentor">
          <div className="mentor-page-container">
            <div className="mentor-heading">
              <p>MY MENTOR</p>
              <h2>
                A Special Tribute to <span>Murali Mohan Sir</span>
              </h2>
              <p className="mentor-heading-description">
                The mentor who helped me find direction, develop a problem-solving
                mindset, and begin my DevOps journey.
              </p>
            </div>

            <div className="mentor-center-photo">
              <div className="mentor-photo-glow"></div>
              <div className="mentor-photo-frame">
                <div className="mentor-photo-crop">
                  <img
                    src="/images/murali-profile.jpeg"
                    alt="Murali Mohan Sir - My DevOps Mentor"
                    className="mentor-photo"
                  />
                </div>
              </div>
              <div className="mentor-name-card">
                <h3>Murali Mohan Sir</h3>
                <p>My DevOps Mentor</p>
              </div>
            </div>

            <div className="mentor-learning-heading">
              <p>WHAT I LEARNED FROM MY MENTOR</p>
              <h2>Lessons That Stay With Me</h2>
            </div>

            <div className="mentor-lessons mentor-lessons-six">
              <article className="mentor-lesson">
                <span>01</span>
                <h3>Right Direction</h3>
                <p>He guided me in the right direction when I was unsure about which path to take in my career.</p>
              </article>
              <article className="mentor-lesson">
                <span>02</span>
                <h3>Problem-Solving Mindset</h3>
                <p>He taught me to understand the problem, analyze what is happening, and work step by step toward the right solution.</p>
              </article>
              <article className="mentor-lesson">
                <span>03</span>
                <h3>Practical Learning</h3>
                <p>His practical explanations helped me understand concepts clearly and encouraged me to explore technologies by myself.</p>
              </article>
              <article className="mentor-lesson">
                <span>04</span>
                <h3>Find the Root Cause</h3>
                <p>Instead of only fixing the visible error, he taught me to understand why the problem happened and find its root cause.</p>
              </article>
              <article className="mentor-lesson">
                <span>05</span>
                <h3>DevOps Foundation</h3>
                <p>His guidance helped me build a strong foundation in DevOps, cloud, deployment, automation and troubleshooting.</p>
              </article>
              <article className="mentor-lesson">
                <span>06</span>
                <h3>Support & Motivation</h3>
                <p>Whenever I faced difficulties, his motivation encouraged me to continue learning, practicing and moving forward.</p>
              </article>
            </div>

            <div className="mentor-journey">
              <div className="mentor-quote-mark">“</div>
              <h3>
                From not knowing which direction to take after graduation to building,
                deploying, automating, monitoring and troubleshooting applications today —
                <span>{" "}your guidance has been an important part of my journey.</span>
              </h3>
              <p>
                Your practical explanations, motivation, patience and way of teaching
                helped me understand that DevOps is not simply about learning tools.
                It is about understanding problems, thinking logically, choosing the
                right approach, learning from failures and continuously improving.
              </p>
            </div>

            <div className="mentor-gratitude">
              <div className="mentor-gratitude-line"></div>
              <p className="mentor-gratitude-label">FOREVER GRATEFUL</p>
              <h2>Thank You, <span>Murali Mohan Sir.</span></h2>
              <p className="mentor-thanks-message">
                I will always be grateful for your guidance, support, knowledge,
                encouragement and motivation throughout my journey.
              </p>
              <p className="mentor-final-message">
                Thank you for helping me find my direction and for being an important
                part of my DevOps journey.
              </p>
              <div className="mentor-signature">
                <span></span>
                <div>
                  <strong>With respect and gratitude,</strong>
                  <small>— Venkataramana</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="section contact-section"
          id="contact"
        >
          <div className="section-heading">
            <p>CONTACT</p>
            <h2>Let's Connect</h2>
          </div>

          <p className="contact-text">
            Interested in DevOps, cloud infrastructure, automation and
            application deployment opportunities.
          </p>

          <div className="contact-buttons">
            <ExternalLink
              href={LINKS.github}
              className="btn btn-primary"
            >
              GitHub ↗
            </ExternalLink>

            <ExternalLink
              href={LINKS.linkedin}
              className="btn btn-outline"
            >
              LinkedIn ↗
            </ExternalLink>

            <a
              href="#live-apps"
              className="btn btn-outline"
            >
              Live Applications
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div>
          <strong>
            VENKAT.<span>DEVOPS</span>
          </strong>

          <p>
            DevOps • Cloud • Automation • Reliability
          </p>
        </div>

        <p>Built with React & DevOps mindset.</p>
      </footer>
    </>
  );
}

export default App;