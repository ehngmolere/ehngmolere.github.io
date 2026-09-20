<template>
  <main class="experiences-page container col-md-8">
    <h1 class="text-center my-4">Experiences</h1>
    <ExperienceCard v-for="experience in experiences" :key="experience.company + experience.period" v-bind="experience" />
  </main>
</template>

<script>
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
  components: { ExperienceCard },
  data() {
    return {
      experiences: [
        {
          initials: 'AN', logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGkaE0mS-7vWg/company-logo_100_100/B4EZgYjvqKHgAc-/0/1752758680540/ansys_inc_logo?e=1791417600&v=beta&t=TC3ybN59TQsigFt1zkVp_Sndd-m5NnfkHl7a3CH8lK4', role: 'DevOps Engineer', company: 'Ansys · Part of Synopsys', contract: 'Permanent contract', period: 'Jan. 2024 - Present', location: 'Toulon, France · Remote',
          missions: [
            'Managed and supervised Windows and Linux virtual and physical machines used as ADO agents, using Ansible playbooks to ensure configuration consistency.',
            'Centralized pipeline code from multiple repositories into a new ProjectTools repository, with Python utilities to access ADO, JFrog Artifactory, Prometheus and Thanos.',
            'Created reusable DevOps templates to centralize common pipeline code, including run-python-venv.yml and sonarq-analysis.yml.',
            'Implemented an automated build artifact cleanup system that removes artifacts older than 10 days and artifacts associated with completed pull requests.',
            'Migrated Bamboo pipelines to Azure DevOps.'
          ]
        },
        {
          initials: 'CG', logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHIL3HctxNfvg/company-logo_100_100/B4EZokv7VQIUAQ-/0/1761553135376/capgemini_logo?e=1791417600&v=beta&t=Sx1MiaRtropV50XeJDFnteWWGn5Jkk0dOF1LnHwvMZU', role: 'Site Reliability Engineer', company: 'Capgemini', contract: 'Work-study contract', period: 'Dec. 2021 - Jun. 2023', location: 'Toulouse, France · Hybrid',
          missions: [
            'Maintained a microservices platform in operational condition using Prometheus, Grafana, Elasticsearch and Kibana.',
            'Automated alerts and operational processes with Alertmanager, Ansible, Groovy, Jenkins and Oracle Database.',
            'Built a proof of concept to automate data exports from the production schema to the validation environment.',
            'Presented project progress to the client.'
          ]
        },
        {
          initials: 'TU', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFWx2NarV3c-g/company-logo_100_100/B4DZbEP28lG0AQ-/0/1747049214225/universite_paul_sabatier_toulouse_iii_logo?e=1791417600&v=beta&t=89-y-kERl0ff8M4c_k7BeCvitDQwRqHw_gyDSscewzM', role: 'Tutor', company: 'Toulouse University', contract: 'Fixed-term contract', period: 'Oct. 2021 - Dec. 2021', location: 'Toulouse, France',
          missions: ['Teaching computer science, discrete mathematics and digital science.']
        },
        {
          initials: 'UB', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGXZPFarym18w/company-logo_100_100/company-logo_100_100/0/1642678074294/universite_de_bordeaux_logo?e=1791417600&v=beta&t=IztpApkFee0Bvv4Yh-oJCeYpSRCwusTh9xpXNH2ZOZg', role: 'Tutor', company: 'University of Bordeaux', contract: 'Fixed-term contract', period: 'Sep. 2020 - Dec. 2020', location: 'Bordeaux, France',
          missions: ['Teaching Python.']
        }
      ]
    }
  }
}
</script>
