export type PersonalInfo = {
  name: string
  subTitle: string
  email: string
  whatsappMessage: string
  phone: string
  location: string
  social: SocialNetwork[]
}

export type SocialNetwork = {
  name: string
  link: string
}
