<template>
  <main class="interest-page container">
    <header class="interest-header">
      <p class="interest-eyebrow">Beyond technology</p>
      <h1>Interests</h1>
      <p>Books, ideas and time spent outdoors.</p>
    </header>

    <section class="interest-section">
      <div class="section-heading">
        <span class="section-icon section-icon-hiking"><i class="fa-solid fa-person-hiking" aria-hidden="true"></i></span>
        <div>
          <h2>Hiking</h2>
          <p>Time outdoors and trail exploration</p>
        </div>
      </div>
      <div class="hiking-grid">
        <HikingCard v-for="hike in hikes" :key="hike.title" v-bind="hike" />
      </div>
    </section>

    <section class="interest-section">
      <div class="section-heading">
        <span class="section-icon section-icon-books"><i class="fa-solid fa-book-open" aria-hidden="true"></i></span>
        <div>
          <h2>Books</h2>
          <p>Recent reading</p>
        </div>
      </div>
      <div class="interest-grid">
        <InterestCard v-for="book in books" :key="book.title" v-bind="book" />
      </div>
    </section>

  </main>
</template>

<script>
import HikingCard from '@/components/HikingCard.vue'
import InterestCard from '@/components/InterestCard.vue'

export default {
  components: { HikingCard, InterestCard },
  data() {
    return {
      hikes: [
        { title: 'Lourdes', icon: 'fa-route', photo: '/Lourdes.jpg', photoAlt: 'Landscape near Lourdes', date: 'July 2025', duration: '7 days', distance: 153, elevationGain: '1,600', elevationLoss: '1,600', description: "A pilgrimage starting from my grandfather's home, undertaken in his memory and as a personal tribute to him." },
        { title: 'GR20 · Pointe de Bavella variant', icon: 'fa-mountain', photo: '/gr-20.jpg', photoAlt: 'GR20 trail in Corsica', date: 'September 2025', duration: '7 days', distance: 90, elevationGain: '5,000', elevationLoss: '5,000', description: 'A mountain trek through Corsica via the Pointe de Bavella variant, combining preparation, endurance and adaptability in a demanding natural environment.' },
        { title: 'GR34 · Crozon Peninsula', icon: 'fa-water', photo: '/gr34.jpg', photoAlt: 'GR34 coastal trail on the Crozon Peninsula', date: 'September 2026', duration: '7 days', distance: 158, elevationGain: '4,000', elevationLoss: '4,000', description: 'A coastal hike focused on discovering the landscapes, paths and maritime heritage of Brittany.' }
      ],
      books: [
        { title: 'Totem', author: 'Thomas Villatte' },
        { title: 'Totem 2.0', author: 'Thomas Villatte' },
        { title: 'Totem 3.0', author: 'Thomas Villatte' },
        { title: 'The Corsican Brothers', author: 'Alexandre Dumas' },
        { title: 'A Hymn to Life: Shame Has to Change Sides', author: 'Gisèle Pelicot' }
      ]
    }
  }
}
</script>

<style scoped>
.interest-page {
  max-width: 980px;
  padding-bottom: 3rem;
  padding-top: 2.5rem;
}

.interest-header {
  border-bottom: 1px solid #d8e3eb;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
}

.interest-eyebrow {
  color: #123b5d;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.interest-header h1 {
  color: #123b5d;
  font-size: clamp(2.25rem, 5vw, 4rem);
  margin-bottom: 0.75rem;
}

.interest-header p:last-child,
.section-heading p {
  color: #526579;
}

.interest-section {
  margin-bottom: 3rem;
}

.section-heading {
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
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

.section-icon {
  align-items: center;
  border-radius: 0.5rem;
  display: inline-flex;
  font-size: 1.25rem;
  height: 42px;
  justify-content: center;
  width: 42px;
}

.section-icon-books {
  background: #e8f0f5;
  color: #123b5d;
}

.section-icon-hiking {
  background: #e8f3ed;
  color: #198754;
}

.interest-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.hiking-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 576px) {
  .interest-page {
    padding-top: 1.5rem;
  }

  .interest-grid {
    grid-template-columns: 1fr;
  }

  .hiking-grid {
    grid-template-columns: 1fr;
  }

}
</style>
