<template>
  <article class="interest-card">
    <i class="fa-solid fa-book interest-card-icon" aria-hidden="true"></i>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ author }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true }
  }
}
</script>

<style scoped>
.interest-card {
  align-items: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  gap: 1rem;
  min-height: 82px;
  padding: 1rem 1.15rem;
}

.interest-card-icon {
  color: var(--color-primary);
  font-size: 1.45rem;
  width: 2rem;
}

.interest-card h3,
.interest-card p {
  margin: 0;
}

.interest-card h3 {
  font-size: 1.05rem;
}

.interest-card p {
  color: var(--color-muted);
  margin-top: 0.25rem;
}
</style>
