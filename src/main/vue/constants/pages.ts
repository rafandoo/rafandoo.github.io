export interface NavTab {
  id: string
  label: string
}

export const PAGE_ABOUT_ME = {
  id: 'about-me',
  label: 'main.about',
}

export const PAGE_EXPERIENCE = {
  id: 'experience',
  label: 'main.experience',
}

export const PAGE_EDUCATION = {
  id: 'education',
  label: 'main.education',
}

export const PAGE_PROJECTS = {
  id: 'projects',
  label: 'main.portfolio',
}

export const PAGE_SKILLS = {
  id: 'skills',
  label: 'main.skills',
}

export const NAV_TABS: NavTab[] = [
  PAGE_ABOUT_ME,
  PAGE_EXPERIENCE,
  PAGE_EDUCATION,
  PAGE_PROJECTS,
  PAGE_SKILLS,
]
