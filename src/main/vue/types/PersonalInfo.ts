export type PersonalInfo = {
  name: string
  subtitle: string
  contact: Contact
  social: Social[]
}

export type Contact = {
  email: string
  phone: string
  whatsappMessage: string
  location: string
}

export type Social = {
  name: string
  link: string
}
