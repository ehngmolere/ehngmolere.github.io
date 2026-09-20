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
  background: #f8fafc;
  border: 1px solid #d8e3eb;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  min-height: 82px;
  padding: 1rem 1.15rem;
}

.interest-card-icon {
  color: #123b5d;
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
  color: #526579;
  margin-top: 0.25rem;
}
</style>
