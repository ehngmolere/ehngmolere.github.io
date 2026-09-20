<template>
  <main class="skills-page container">
      <header class="skills-header">
        <p class="skills-eyebrow">Technical toolkit</p>
        <h1>My Skills</h1>
        <p>Tools and technologies I use to build, automate and maintain reliable software systems.</p>
      </header>

      <section class="skills-section">
        <div class="section-heading">
          <i class="fa-solid fa-infinity" aria-hidden="true"></i>
          <div>
            <h2>DevOps</h2>
            <p>Delivery, automation and collaboration</p>
          </div>
        </div>
        <div class="skills-grid">
          <article class="skill-card"><i class="devicon-azuredevops-plain colored skill-icon"></i><span>Azure DevOps</span></article>
          <article class="skill-card"><i class="devicon-amazonwebservices-plain colored skill-icon"></i><span>AWS</span></article>
          <article class="skill-card"><i class="devicon-jenkins-line skill-icon"></i><span>Jenkins</span></article>
          <article class="skill-card"><i class="devicon-ansible-plain colored skill-icon"></i><span>Ansible</span></article>
          <article class="skill-card"><i class="devicon-gitlab-plain colored skill-icon"></i><span>GitLab</span></article>
          <article class="skill-card"><i class="devicon-github-original skill-icon"></i><span>GitHub</span></article>
        </div>
      </section>

      <section class="skills-section">
        <div class="section-heading">
          <i class="fa-solid fa-terminal" aria-hidden="true"></i>
          <div>
            <h2>Backend</h2>
            <p>Languages, scripting and application development</p>
          </div>
        </div>
        <div class="skills-grid">
          <article class="skill-card"><i class="devicon-groovy-plain colored skill-icon"></i><span>Groovy</span></article>
          <article class="skill-card"><i class="devicon-bash-plain skill-icon"></i><span>Bash</span></article>
          <article class="skill-card"><i class="devicon-java-plain colored skill-icon"></i><span>Java</span></article>
          <article class="skill-card"><i class="devicon-kotlin-plain colored skill-icon"></i><span>Kotlin</span></article>
          <article class="skill-card"><i class="devicon-python-plain colored skill-icon"></i><span>Python</span></article>
          <article class="skill-card"><i class="devicon-powershell-plain colored skill-icon"></i><span>PowerShell</span></article>
          <article class="skill-card"><i class="devicon-c-line-wordmark colored skill-icon"></i><span>C</span></article>
          <article class="skill-card"><i class="devicon-ocaml-plain colored skill-icon"></i><span>OCaml</span></article>
        </div>
      </section>

      <div class="skills-columns">
        <section class="skills-section compact-section">
          <div class="section-heading">
            <i class="fa-solid fa-display" aria-hidden="true"></i>
            <div>
              <h2>Front-end</h2>
              <p>Web technologies</p>
            </div>
          </div>
          <div class="skills-grid">
            <article class="skill-card"><i class="devicon-html5-plain colored skill-icon"></i><span>HTML</span></article>
            <article class="skill-card"><i class="devicon-css3-plain colored skill-icon"></i><span>CSS</span></article>
            <article class="skill-card"><i class="devicon-javascript-plain colored skill-icon"></i><span>JavaScript</span></article>
          </div>
        </section>

        <section class="skills-section compact-section">
          <div class="section-heading">
            <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
            <div>
              <h2>Operating systems</h2>
              <p>Platforms and environments</p>
            </div>
          </div>
          <div class="skills-grid">
            <article class="skill-card"><i class="devicon-android-plain colored skill-icon"></i><span>Android</span></article>
            <article class="skill-card"><i class="devicon-linux-plain colored skill-icon"></i><span>Linux</span></article>
            <article class="skill-card"><i class="devicon-windows8-original colored skill-icon"></i><span>Windows</span></article>
            <article class="skill-card"><i class="devicon-apple-original colored skill-icon"></i><span>macOS</span></article>
          </div>
        </section>
      </div>

      <section class="skills-section">
        <div class="section-heading">
          <i class="fa-solid fa-list-check" aria-hidden="true"></i>
          <div>
            <h2>Project management</h2>
            <p>Planning, documentation and team coordination</p>
          </div>
        </div>
        <div class="skills-grid management-grid">
          <article class="skill-card"><i class="devicon-azure-plain colored skill-icon"></i><span>Azure Boards</span></article>
          <article class="skill-card"><i class="devicon-confluence-plain colored skill-icon"></i><span>Confluence</span></article>
          <article class="skill-card"><i class="devicon-jira-plain colored skill-icon"></i><span>Jira</span></article>
        </div>
      </section>
  </main>
</template>

<style scoped>
.skills-page {
  max-width: 1120px;
  padding-bottom: 3rem;
  padding-top: 2.5rem;
}

.skills-header {
  border-bottom: 1px solid #d8e3eb;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
}

.skills-eyebrow {
  color: #123b5d;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.skills-header h1 {
  color: #123b5d;
  font-size: clamp(2.25rem, 5vw, 4rem);
  margin-bottom: 0.75rem;
}

.skills-header p:last-child,
.section-heading p {
  color: #526579;
}

.skills-section {
  margin-bottom: 3rem;
}

.section-heading {
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.section-heading > i {
  color: #123b5d;
  font-size: 1.5rem;
  width: 2rem;
}

.section-heading h2,
.section-heading p {
  margin: 0;
}

.section-heading h2 {
  font-size: 1.35rem;
}

.section-heading p {
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.skills-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
}

.skill-card {
  align-items: center;
  background: #f1f6fa;
  border: 1px solid #cbdde8;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;
  min-height: 72px;
  padding: 0.9rem;
}

.skill-card:hover {
  border-color: #123b5d;
}

.skill-icon {
  flex: 0 0 2rem;
  font-size: 2rem;
  text-align: center;
}

.skill-card span {
  font-weight: 600;
}

.skills-columns {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.compact-section {
  margin-bottom: 3rem;
}

.management-grid {
  grid-template-columns: repeat(3, minmax(145px, 1fr));
}

@media (max-width: 768px) {
  .skills-page {
    padding-top: 1.5rem;
  }

  .skills-columns {
    gap: 0;
    grid-template-columns: 1fr;
  }
}
</style>
