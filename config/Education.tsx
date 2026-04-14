export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  logo: string;
  location: string;
  description?: string;
}

export const educationList: Education[] = [
  {
    institution: 'Bharati Vidyapeeth College of Engineering, Navi Mumbai',
    degree: 'Bachelor of Engineering — BE',
    field: 'Electronics and Telecommunications Engineering',
    startDate: 'Aug 2023',
    endDate: 'May 2027',
    isCurrent: true,
    logo: '/company/bvcoe.png',
    location: 'Navi Mumbai, Maharashtra, India',
    description: 'Studying core electronics, embedded systems, signal processing, and telecommunications alongside electives in robotics and AI.',
  },
];
