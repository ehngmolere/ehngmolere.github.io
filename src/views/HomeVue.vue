<template>
  <main class="home-page container">
      <section class="home-hero">
        <div class="home-intro">
          <p class="home-eyebrow">CI/CD Automation · Infrastructure · Reliability</p>
          <h1>Emeric Molère</h1>
          <h2>DevOps Engineer</h2>
          <p class="home-description">I build reliable CI/CD workflows, automate infrastructure and improve developer productivity.</p>
          <p class="home-specialties"><strong>Main focus:</strong> Azure DevOps · Python · Ansible · CI/CD</p>
          <p class="home-background">I earned a Master's degree in Software Development at Toulouse University in 2023. After discovering DevOps during my apprenticeship at Capgemini, I joined Ansys to deepen my expertise in automation, observability and reliable delivery.</p>
          <p class="home-availability"><i class="fa-solid fa-circle" aria-hidden="true"></i> Open to DevOps, SRE and platform engineering opportunities.</p>
          <div class="home-actions">
            <a class="btn btn-outline-secondary" href="mailto:emeric.molere@master-developpement-logiciel.com"><i class="fa-regular fa-envelope" aria-hidden="true"></i> Contact</a>
            <a class="btn btn-outline-secondary" :href="cvPath" download="Emeric-Molere-CV.pdf"><i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download CV</a>
          </div>
        </div>
        <div class="home-profile">
          <img :src="imagePath" alt="Portrait of Emeric Molère" class="home-image">
          <div class="home-profile-caption">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            Toulon, France · Remote
          </div>
        </div>
      </section>

      <section class="home-focus" aria-label="Areas of focus">
        <article>
          <i class="fa-solid fa-gears" aria-hidden="true"></i>
          <h3>Automation</h3>
          <p>Reusable pipelines and tools that reduce repetitive work.</p>
        </article>
        <article>
          <i class="fa-solid fa-server" aria-hidden="true"></i>
          <h3>Infrastructure</h3>
          <p>Consistent environments across Windows and Linux systems.</p>
        </article>
        <article>
          <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
          <h3>Reliability</h3>
          <p>Observability and operational practices for dependable services.</p>
        </article>
      </section>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  computed: {
    imagePath() {
      return require('@/img/emolere.jpg');
    },
    cvPath() {
      return `${process.env.BASE_URL}EMolere_Resume.pdf`;
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home-page {
  max-width: 1080px;
  padding-bottom: 3rem;
  padding-top: 2.5rem;
}

.home-hero {
  align-items: center;
  display: grid;
  gap: 4rem;
  grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.65fr);
  min-height: 470px;
}

.home-eyebrow {
  color: #526579;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.home-intro h1 {
  color: #123b5d;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.home-intro h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.home-description {
  font-size: 1.3rem;
  line-height: 1.5;
  max-width: 620px;
}

.home-specialties {
  color: #123b5d;
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
}

.home-availability {
  color: #526579;
  font-size: 0.9rem;
  margin-top: 1.25rem;
}

.home-availability i {
  color: #198754;
  font-size: 0.55rem;
  margin-right: 0.4rem;
  vertical-align: middle;
}

.home-background {
  color: #526579;
  line-height: 1.7;
  max-width: 680px;
}

.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.home-actions i {
  margin-right: 0.4rem;
}

.home-profile {
  text-align: center;
}

.home-image {
  border: 10px solid #e8f0f5;
  border-radius: 50%;
  height: 240px;
  object-fit: cover;
  width: 240px;
}

.home-profile-caption {
  color: #526579;
  margin-top: 1rem;
}

.home-profile-caption i {
  color: #123b5d;
  margin-right: 0.35rem;
}

.home-focus {
  border-top: 1px solid #d8e3eb;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2rem;
}

.home-focus article {
  padding: 0.5rem;
}

.home-focus i {
  color: #123b5d;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}

.home-focus h3 {
  font-size: 1.1rem;
}

.home-focus p {
  color: #526579;
  line-height: 1.5;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .home-page {
    padding-top: 1.5rem;
  }

  .home-hero {
    gap: 2rem;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .home-actions {
    justify-content: center;
  }

  .home-profile {
    grid-row: 1;
  }

  .home-focus {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>

