export type PersonalInfo = {
  name: string
  subTitle: string
  email: string
  whatsappMessage: string
  phone: string
  location: string
  social: SocialNetwork[]
  pageClip: string
}

export type SocialNetwork = {
  name: string
  link: string
}
