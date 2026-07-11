export type ExperienceItem = {
  title: string
  date: string
  description: string
  startDate: string
}

export type Experience = {
  title: string
  logo?: string
  items: ExperienceItem[]
}

export type Experiences = {
  [key: string]: Experience
}
