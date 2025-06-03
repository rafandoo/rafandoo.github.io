export type ExperienceItem = {
  title: string
  date: string
  description: string
}

export type Experience = {
  title: string
  logo?: string
  items: ExperienceItem[]
}

export type Experiences = {
  [key: string]: Experience
}
