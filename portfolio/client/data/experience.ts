export interface Experience {
  id: number;
  role: string;
  org: string;
  type: 'Internship' | 'Full-time' | 'Volunteer' | 'Freelance';
  start: string;
  end: string;
  description: string;
  skills: string[];
  verified: boolean;
  link?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Junior Data Analyst',
    org: 'Yuva Intern by Henry Harvin',
    type: 'Internship',
    start: 'Oct 2025',
    end: 'Jan 2026',
    description: 'Executed complex data workflows, performed statistical analysis, and generated visual insights using Python and SQL for cross-departmental utility.',
    skills: ['Python', 'SQL', 'Data Analysis', 'Pandas', 'Matplotlib'],
    verified: true
  },
  {
    id: 2,
    role: 'Frontend Web Developer',
    org: 'Yuva Intern',
    type: 'Internship',
    start: 'Sep 2025',
    end: 'Jan 2026',
    description: 'Architected responsive, high-performance web components using React and modern CSS. Collaborated on UI/UX optimization for internal tooling.',
    skills: ['React', 'CSS3', 'JavaScript', 'HTML5', 'Responsive Design'],
    verified: true
  },
  {
    id: 3,
    role: 'Data Science with Python Intern',
    org: 'Yuva Intern',
    type: 'Internship',
    start: 'Sep 2025',
    end: 'Jan 2026',
    description: 'Developed ML prototypes and performed exploratory data analysis (EDA) on enterprise-scale datasets.',
    skills: ['Python', 'Scikit-learn', 'EDA', 'NumPy'],
    verified: true
  },
  {
    id: 4,
    role: 'Spaceborn Intern',
    org: 'Spaceborn',
    type: 'Internship',
    start: 'Oct 2025',
    end: 'Dec 2025',
    description: 'Specialized in processing satellite imagery and computer vision tasks for aerospace data modeling.',
    skills: ['Computer Vision', 'Deep Learning', 'PyTorch', 'Satellite Data'],
    verified: true
  },
  {
    id: 5,
    role: 'Spacelance Intern',
    org: 'Spacelance',
    type: 'Internship',
    start: 'Dec 2025',
    end: 'Jan 2026',
    description: 'Data analytics for aerospace applications. Focused on sensor data telemetry and predictive maintenance models.',
    skills: ['Analytics', 'Sensor Fusion', 'Time-series', 'Python'],
    verified: true
  },
  {
    id: 6,
    role: 'E-Cell Campus Ambassador',
    org: 'Delhi Technological University (DTU)',
    type: 'Volunteer',
    start: 'Oct 2025',
    end: 'Jan 2026',
    description: 'Represented DTU Entrepreneurship Cell, facilitated startup workshops, and spearheaded campus outreach programs.',
    skills: ['Leadership', 'Event Management', 'Public Speaking', 'Networking'],
    verified: true
  },
  {
    id: 7,
    role: 'Member',
    org: 'Nilgiri House, IIT Madras',
    type: 'Volunteer',
    start: 'Sep 2025',
    end: 'Present',
    description: 'Active participant in house technical and cultural events. Collaborating on internal student projects.',
    skills: ['Collaboration', 'Teamwork', 'Productivity'],
    verified: true
  }
];
