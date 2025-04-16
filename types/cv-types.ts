export interface HeaderData {
  name: string
  en: {
    title: string
    tags: string[]
  }
  de: {
    title: string
    tags: string[]
  }
}

export interface AboutData {
  en: {
    title: string
    description: string
  }
  de: {
    title: string
    description: string
  }
}

export interface EducationItem {
  period: string
  degree: string
  institution: string
  description: string
  courses?: string[]
}

export interface EducationData {
  en: {
    title: string
    items: EducationItem[]
  }
  de: {
    title: string
    items: EducationItem[]
  }
}

export interface SkillItem {
  name: string
  level: number
}

export interface SkillsData {
  en: {
    title: string
    technical: {
      title: string
      items: SkillItem[]
    }
    personal: {
      title: string
      items: SkillItem[]
    }
  }
  de: {
    title: string
    technical: {
      title: string
      items: SkillItem[]
    }
    personal: {
      title: string
      items: SkillItem[]
    }
  }
}

export interface ProjectItem {
  title: string
  organization: string
  date: string
  description: string
  url?: string
  technologies?: string[]
}

export interface ProjectsData {
  en: {
    title: string
    items: ProjectItem[]
  }
  de: {
    title: string
    items: ProjectItem[]
  }
}

export interface LinkItem {
  name: string
  url: string
}

export interface ContactData {
  email: string
  phone?: string // Make optional with ?
  address?: string // Make optional with ?
  github: string
  orcid?: string
  links?: LinkItem[]
  en: {
    title: string
  }
  de: {
    title: string
  }
}

export interface FooterData {
  lastUpdatedDate: string
  en: {
    copyright: string
    lastUpdated: string
  }
  de: {
    copyright: string
    lastUpdated: string
  }
}

export interface CVData {
  header: HeaderData
  about: AboutData
  education: EducationData
  skills: SkillsData
  projects: ProjectsData
  contact: ContactData
  footer: FooterData
}
