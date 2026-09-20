<template>
  <article class="hiking-card">
    <i :class="['fa-solid', icon, 'hiking-card-icon']" aria-hidden="true"></i>
    <img class="hiking-photo" :src="photo" :alt="photoAlt">
    <div>
      <h3>{{ title }}</h3>
      <p class="hike-date"><span><i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ date }}</span><span><i class="fa-regular fa-clock" aria-hidden="true"></i> {{ duration }}</span></p>
      <p class="hike-stats"><span><i class="fa-solid fa-route" aria-hidden="true"></i> Approximately {{ distance }} km</span><span><i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i> +{{ elevationGain }} m</span><span><i class="fa-solid fa-arrow-trend-down" aria-hidden="true"></i> -{{ elevationLoss }} m</span></p>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    photo: { type: String, required: true },
    photoAlt: { type: String, required: true },
    date: { type: String, required: true },
    duration: { type: String, required: true },
    distance: { type: Number, required: true },
    elevationGain: { type: String, required: true },
    elevationLoss: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>

<style scoped>
.hiking-card {
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #d8e3eb;
  border-left: 5px solid #198754;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  min-height: 82px;
  padding: 1rem 1.15rem;
}

.hiking-card h3,
.hiking-card p { margin: 0; }
.hiking-card h3 { font-size: 1.05rem; }
.hiking-card p { color: #526579; margin-top: 0.25rem; }
.hiking-card-icon { color: #198754; flex: 0 0 2.5rem; font-size: 2rem; width: 2.5rem; }
.hiking-photo { border-radius: 0.4rem; flex: 0 0 128px; height: 92px; object-fit: cover; width: 128px; }
.hike-date { color: #198754 !important; display: flex; flex-wrap: wrap; font-size: 0.8rem; font-weight: 700; gap: 0.75rem; text-transform: uppercase; }
.hike-date i, .hike-stats i { margin-right: 0.2rem; }
.hike-stats { display: flex; flex-wrap: wrap; font-size: 0.8rem; gap: 0.65rem; margin-top: 0.45rem !important; }
.hike-stats i { color: #198754; }

@media (max-width: 576px) {
  .hiking-photo { flex-basis: 104px; height: 80px; width: 104px; }
}
</style>
