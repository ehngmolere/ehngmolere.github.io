<template>
  <section class="experience-card">
    <img v-if="logoVisible" class="company-logo" :src="logo" :alt="`${company} logo`" @error="logoVisible = false">
    <div v-else class="company-mark" aria-hidden="true">{{ initials }}</div>
    <h2>{{ role }}</h2>
    <h4>{{ company }} · {{ contract }}</h4>
    <p class="text-muted">{{ period }} · {{ location }}</p>
    <ul>
      <li v-for="mission in missions" :key="mission">{{ mission }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    initials: { type: String, required: true },
    logo: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    contract: { type: String, required: true },
    period: { type: String, required: true },
    location: { type: String, required: true },
    missions: { type: Array, required: true }
  },
  data() {
    return { logoVisible: true }
  }
}
</script>

<style scoped>
.experience-card { margin-bottom: 3rem; }
.company-logo { border-radius: var(--radius-md); height: 64px; margin-bottom: 1rem; object-fit: contain; width: 64px; }
.company-mark { align-items: center; background: var(--color-primary); border-radius: var(--radius-md); color: #fff; display: inline-flex; font-size: 1.1rem; font-weight: 700; height: 64px; justify-content: center; margin-bottom: 1rem; width: 64px; }
.experience-card h2 { font-size: 1.5rem; }
.experience-card h4 { font-size: 1.05rem; }
.experience-card ul { padding-left: 1.25rem; }
</style>
