import type { PersonalInfo } from '@/types/PersonalInfo'

const personalInfo: PersonalInfo = {
  name: 'Rafael Camargo',
  me: {
    headline: 'me.about.headline',
    bio: 'me.about.bio',
    summary: 'me.about.summary',
  },
  contact: {
    email: 'rafaelcamargo.inf@gmail.com',
    phone: '+55 (47) 99166-4002',
    whatsappMessage: 'Ol%C3%A1!',
    location: 'Santa Catarina, Brasil',
  },
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/rafandoo',
      visibleOnCv: false,
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/rafaelcamargob',
      visibleOnCv: true,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rafandoo',
      visibleOnCv: false,
    },
  ],
}

export default personalInfo
