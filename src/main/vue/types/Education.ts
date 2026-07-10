export type AcademicItem = {
  title: string
  institution: string
  date: string
  location: string
  description: string
  logo?: string
}

export type CourseItem = {
  title: string
  issuer: string
  issuerLogo?: string
  date: string
  credentialUrl?: string
  visibleOnCv: boolean
}

export type EducationSection = {
  id: string
  title: string
  icon: 'graduation' | 'award'
  items: AcademicItem[] | CourseItem[]
}

export type Education = EducationSection[]
