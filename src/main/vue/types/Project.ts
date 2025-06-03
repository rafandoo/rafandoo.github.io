export type Project = {
  title: string
  subtitle: string
  category: string[]
  img: string
  link: string
}

export type Projects = Record<string, Project>
