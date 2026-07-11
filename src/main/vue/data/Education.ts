import type { Education } from '@/types/Education'

const education: Education = [
  {
    id: 'academic',
    title: 'me.education.academic.title',
    icon: 'graduation',
    items: [
      {
        title: 'me.education.academic.computer_science.title',
        institution: 'me.education.academic.computer_science.institution',
        date: 'me.education.academic.computer_science.date',
        location: 'me.education.academic.computer_science.location',
        description: 'me.education.academic.computer_science.description',
        logo: new URL('#/assets/img/education/ifc.webp', import.meta.url).href,
      },
    ],
  },
  {
    id: 'courses',
    title: 'me.education.courses.title',
    icon: 'award',
    items: [
      {
        title: 'me.education.courses.quarkus_workshop_instructor.title',
        issuer: 'me.education.courses.quarkus_workshop_instructor.issuer',
        issuerLogo: new URL('#/assets/img/education/ifc.svg', import.meta.url).href,
        date: 'me.education.courses.quarkus_workshop_instructor.date',
        credentialUrl:
          'https://docs.rafandoo.dev/share/sMrzsDYZmgzHoEUgPbkFGwgbP9B6k7TU8uZaE6Z03TtpK5Gm3',
        visibleOnCv: true,
      },
      {
        title: 'me.education.courses.binary_search_algorithm.title',
        issuer: 'me.education.courses.binary_search_algorithm.issuer',
        issuerLogo: new URL('#/assets/img/education/ifc.svg', import.meta.url).href,
        date: 'me.education.courses.binary_search_algorithm.date',
        credentialUrl:
          'https://docs.rafandoo.dev/share/nAwB0V4wGZVbOZRJDZcGbhf8BsJFWTlEEcxm07mv0WxI8y5WFQ',
        visibleOnCv: false,
      },
    ],
  },
]

export default education
