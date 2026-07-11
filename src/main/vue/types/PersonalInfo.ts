export type PersonalInfo = {
  name: string
  me: AboutMe
  contact: Contact
  socialLinks: SocialLink[]
}

export type AboutMe = {
  headline: string
  bio: string
  summary: string
}

export type Contact = {
  email: string
  phone: string
  whatsappMessage: string
  location: string
}

export type SocialLink = {
  name: string
  url: string
  visibleOnCv: boolean
}
