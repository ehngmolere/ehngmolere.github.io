<template>
  <nav class="site-navbar" aria-label="Main navigation">
    <div class="navbar-inner">
      <router-link class="brand" to="/">
        <span class="brand-mark"><i class="fa-solid fa-code" aria-hidden="true"></i></span>
        <span>Emeric Molère</span>
      </router-link>

      <div class="main-links">
        <router-link class="nav-link" to="/" exact-active-class="nav-link-active">
          <i class="fa-solid fa-house" aria-hidden="true"></i>
          <span>Home</span>
        </router-link>
        <router-link class="nav-link" to="/experiences" active-class="nav-link-active">
          <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
          <span>Experiences</span>
        </router-link>
        <router-link class="nav-link" to="/skills" active-class="nav-link-active">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          <span>Skills</span>
        </router-link>
        <router-link class="nav-link" to="/interests" active-class="nav-link-active">
          <i class="fa-solid fa-book-open" aria-hidden="true"></i>
          <span>Interests</span>
        </router-link>
      </div>

      <div class="social-links">
        <a class="social-link" href="https://github.com/ehngmolere" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
          <i class="devicon-github-original" aria-hidden="true"></i>
        </a>
        <a class="social-link" href="https://www.linkedin.com/in/molere-emeric/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <i class="devicon-linkedin-plain colored" aria-hidden="true"></i>
        </a>
        <a class="social-link" href="mailto:emeric.molere@master-developpement-logiciel.com" title="Email" aria-label="Email">
          <i class="fa-regular fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.site-navbar {
  background: #123b5d;
  box-shadow: 0 2px 12px rgba(18, 59, 93, 0.18);
  position: relative;
  z-index: 10;
}

.navbar-inner {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  min-height: 68px;
  padding: 0.75rem 1.5rem;
}

.brand {
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-shrink: 0;
  font-size: 1.05rem;
  font-weight: 700;
  gap: 0.65rem;
  text-decoration: none;
}

.brand-mark {
  align-items: center;
  background: #ffffff;
  border-radius: 0.4rem;
  color: #123b5d;
  display: inline-flex;
  height: 34px;
  justify-content: center;
  width: 34px;
}

.main-links {
  align-items: center;
  display: flex;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-link,
.social-link {
  color: #dce9f2;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link {
  align-items: center;
  border-radius: 0.4rem;
  display: flex;
  font-size: 0.9rem;
  gap: 0.45rem;
  padding: 0.55rem 0.7rem;
}

.nav-link:hover,
.nav-link-active {
  background: #ffffff;
  color: #123b5d;
}

.social-links {
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  gap: 0.35rem;
  padding-left: 1rem;
}

.social-link {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  font-size: 1.2rem;
  height: 36px;
  justify-content: center;
  width: 36px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

@media (max-width: 768px) {
  .navbar-inner {
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
  }

  .brand {
    flex: 1 0 auto;
  }

  .main-links {
    flex: 1 0 100%;
    justify-content: space-between;
    margin-left: 0;
    order: 3;
  }

  .nav-link {
    flex: 1;
    justify-content: center;
  }

  .nav-link span {
    font-size: 0.8rem;
  }

  .social-links {
    border-left: 0;
    padding-left: 0;
  }
}
</style>
