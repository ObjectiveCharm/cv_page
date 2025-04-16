import type { CVData } from "@/types/cv-types"

export const cvData: CVData = {
  header: {
    name: "GUANRU CHEN",
    en: {
      title: "Information Engineering Student",
      tags: ["Reliable", "Honest", "Eager to Learn"],
    },
    de: {
      title: "Student der Informationstechnik",
      tags: ["Zuverlässig", "Ehrlich", "Lernbereit"],
    },
  },
  about: {
    en: {
      title: "About Me",
      description:
        "I am an Information Engineering student at the Technical University of Munich, Campus Heilbronn. I am passionate about technology, programming, and problem-solving. I am constantly seeking to expand my knowledge and skills in the field of computer science and engineering.",
    },
    de: {
      title: "Über Mich",
      description:
        "Ich bin Student der Informationstechnik an der Technischen Universität München, Campus Heilbronn. Ich bin begeistert von Technologie, Programmierung und Problemlösung. Ich bin ständig bestrebt, mein Wissen und meine Fähigkeiten im Bereich der Informatik und Ingenieurwissenschaften zu erweitern.",
    },
  },
  education: {
    en: {
      title: "Education",
      items: [
        {
          period: "2024 - Present",
          degree: "B.Sc. Information Engineering",
          institution: "Technical University of Munich, Campus Heilbronn",
          description: "Studying mathematics, programming, computer architecture, computer networks, and IT security.",
          courses: ["Mathematics", "Programming", "Computer Architecture", "Computer Networks", "IT Security"],
        },
        {
          period: "2019 - 2022",
          degree: "Self-study and Side Projects",
          institution: "Homelab",
          description: "Self-learning Swift and writing experimental personal projects.",
        },
      ],
    },
    de: {
      title: "Bildung",
      items: [
        {
          period: "2024 - Heute",
          degree: "B.Sc. Information Engineering",
          institution: "Technische Universität München, Campus Heilbronn",
          description: "Studium der Mathematik, Programmierung, Rechnerarchitektur, Rechnernetze und IT-Sicherheit.",
          courses: ["Mathematik", "Programmierung", "Rechnerarchitektur", "Rechnernetze", "IT-Sicherheit"],
        },
        {
          period: "2019 - 2022",
          degree: "Selbststudium und Nebenprojekte",
          institution: "Homelab",
          description: "Selbstlernen von Swift und Schreiben experimenteller persönlicher Projekte.",
        },
      ],
    },
  },
  skills: {
    en: {
      title: "Skills",
      technical: {
        title: "Technical Skills",
        items: [
          { name: "Swift", level: 4 },
          { name: "Java", level: 3 },
          { name: "Python", level: 4 },
          { name: "Linux", level: 3 },
          { name: "Rust", level: 3 },
          { name: "Data Structures & Algorithms", level: 4 },
        ],
      },
      personal: {
        title: "Personal Skills",
        items: [
          { name: "Reliability", level: 5 },
          { name: "Willingness to Learn", level: 5 },
          { name: "Enthusiasm & Encouragement", level: 4 },
        ],
      },
    },
    de: {
      title: "Fähigkeiten",
      technical: {
        title: "Technische Fähigkeiten",
        items: [
          { name: "Swift", level: 4 },
          { name: "Java", level: 3 },
          { name: "Python", level: 3 },
          { name: "Linux", level: 4 },
          { name: "Rust", level: 4 },
          { name: "Datenstrukturen & Algorithmen", level: 3 },
        ],
      },
      personal: {
        title: "Persönliche Fähigkeiten",
        items: [
          { name: "Zuverlässigkeit", level: 5 },
          { name: "Lernbereitschaft", level: 5 },
          { name: "Begeisterung & Ermutigung", level: 5 },
        ],
      },
    },
  },
  projects: {
    en: {
      title: "Projects",
      items: [
        {
          title: "Compact Prefix Radix",
          organization: "Homelab",
          date: "February 2025",
          description:
            "An implementation of Radix Tree, a compact data structure (Patricia-Trie/Radix Tree) for fast string-based search, with space efficiency.",
          url: "https://github.com/ObjectiveCharm/CompactPrefixRadix",
          technologies: ["Rust", "Data Structures", "Algorithms"],
        },
        {
          title: "CNS Seminar Research",
          organization: "Fachschaft CNS/TUM",
          date: "Winter Semester 2024",
          description:
            "Research in the field of Computer and Network Security. For data collection and processing, I used Python and Bash scripts.",
          url: "https://github.com/ObjectiveCharm/seminar24ws",
          technologies: ["Python", "Bash", "Network Security"],
        },
      ],
    },
    de: {
      title: "Projekte",
      items: [
        {
          title: "Compact Prefix Radix",
          organization: "Homelab",
          date: "Februar 2025",
          description:
            "Eine Umsetzung von Radix Baum, ein Kompakte Datenstruktur (Patricia-Trie/Radix Baum) für schnell Stringbasiert Such, mit Raumeffizienz.",
          url: "https://github.com/ObjectiveCharm/CompactPrefixRadix",
          technologies: ["Rust", "Datenstrukturen", "Algorithmen"],
        },
        {
          title: "CNS Seminar Forschung",
          organization: "Fachschaft CNS/TUM",
          date: "Wintersemester 2024",
          description:
            "Eine Forschung im Bereich Computer- und Netzwerksicherheit. Zur Datenerfassung und -verarbeitung habe ich Python und Bash Script verwendet.",
          url: "https://github.com/ObjectiveCharm/seminar24ws",
          technologies: ["Python", "Bash", "Netzwerksicherheit"],
        },
      ],
    },
  },
  contact: {
    email: "guanru.chen@tum.de",
    phone: "",
    address: "",
    github: "ObjectiveCharm",
    orcid: "0009-0004-0715-910X",
    en: {
      title: "Contact",
    },
    de: {
      title: "Kontakt",
    },
  },
  footer: {
    lastUpdatedDate: "2025-04-16",
    en: {
      copyright: "© 2025 Guanru Chen. All rights reserved.",
      lastUpdated: "Last Updated",
    },
    de: {
      copyright: "© 2025 Guanru Chen. Alle Rechte vorbehalten.",
      lastUpdated: "Zuletzt aktualisiert",
    },
  },
}
