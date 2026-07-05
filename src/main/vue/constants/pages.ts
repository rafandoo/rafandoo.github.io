export interface NavTab {
  id: string
  label: string
}

export const PAGE_ABOUT_ME = {
  id: 'about-me',
  label: 'nav.about',
}

export const PAGE_EXPERIENCE = {
  id: 'experience',
  label: 'nav.experience',
}

export const PAGE_EDUCATION = {
  id: 'education',
  label: 'nav.education',
}

export const PAGE_PROJECTS = {
  id: 'projects',
  label: 'nav.portfolio',
}

export const PAGE_SKILLS = {
  id: 'skills',
  label: 'nav.skills',
}

export const NAV_TABS: NavTab[] = [
  PAGE_ABOUT_ME,
  PAGE_EXPERIENCE,
  PAGE_EDUCATION,
  PAGE_PROJECTS,
  PAGE_SKILLS,
]
