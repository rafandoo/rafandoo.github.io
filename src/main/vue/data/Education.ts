import type { Education } from '@/types/Education'

const education: Education = [
  {
    id: 'academic',
    title: 'personal.education.academic.title',
    icon: 'graduation',
    items: [
      {
        title: 'personal.education.academic.computer_science.title',
        institution: 'personal.education.academic.computer_science.institution',
        date: 'personal.education.academic.computer_science.date',
        location: 'personal.education.academic.computer_science.location',
        description: 'personal.education.academic.computer_science.description',
        logo: new URL('#/assets/img/education/ifc.webp', import.meta.url).href,
      },
    ],
  },
  {
    id: 'courses',
    title: 'personal.education.courses.title',
    icon: 'award',
    items: [
      {
        title: 'personal.education.courses.quarkus_workshop_instructor.title',
        issuer: 'personal.education.courses.quarkus_workshop_instructor.issuer',
        issuerLogo: new URL('#/assets/img/education/ifc.svg', import.meta.url).href,
        date: 'personal.education.courses.quarkus_workshop_instructor.date',
        credentialUrl:
          'https://docs.rafandoo.dev/share/sMrzsDYZmgzHoEUgPbkFGwgbgP9B6k7TU8uZaE6Z03TtpK5Gm3',
      },
      {
        title: 'personal.education.courses.binary_search_algorithm.title',
        issuer: 'personal.education.courses.binary_search_algorithm.issuer',
        issuerLogo: new URL('#/assets/img/education/ifc.svg', import.meta.url).href,
        date: 'personal.education.courses.binary_search_algorithm.date',
        credentialUrl:
          'https://docs.rafandoo.dev/share/nAwB0V4wGZVbOZRJDZcGbhf8BsJFWTlEEcxm07mv0WxI8y5WFQ',
      },
    ],
  },
]

export default education
