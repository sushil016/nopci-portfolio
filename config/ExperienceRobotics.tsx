import CPP from '@/components/technologies/CPP';
import Docker from '@/components/technologies/Docker';
import Linux from '@/components/technologies/Linux';
import Python from '@/components/technologies/Python';
import ROS from '@/components/technologies/ROS';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sklearn from '@/components/technologies/Sklearn';
import TypeScript from '@/components/technologies/TypeScript';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import NodeJs from '@/components/technologies/NodeJs';

import { type Experience } from './Experience';

export const roboticsExperiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Innovation and Robotics Lab of BVCOE',
    position: 'Vice President',
    location: 'Navi Mumbai, Maharashtra, India · On-site',
    image: '/company/bvcoe-irl.png',
    description: [
      'Overseeing all club operations, member recruitment, inter-college robotics competitions, and strategic initiatives for the lab.',
      'Representing the college at national-level robotics and autonomous systems competitions.',
      'Driving cross-team collaboration between electronics, programming, and mechanical divisions.',
    ],
    startDate: 'March 2026',
    endDate: 'Present',
    technologies: [
      { name: 'ROS2', href: 'https://docs.ros.org/', icon: <ROS /> },
      { name: 'Python', href: 'https://www.python.org/', icon: <Python /> },
      { name: 'C++', href: 'https://isocpp.org/', icon: <CPP /> },
      { name: 'Linux', href: 'https://www.linux.org/', icon: <Linux /> },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Innovation and Robotics Lab of BVCOE',
    position: 'Programming Head & Autonomous Lead',
    location: 'Navi Mumbai, Maharashtra, India · On-site',
    image: '/company/bvcoe-irl.png',
    description: [
      'Led a team of 15+ programming members in autonomous systems development, establishing curriculum for drone programming, ROS2, and embedded systems.',
      'Developed autonomous navigation stack with obstacle avoidance, GPS waypoint following, and fail-safe mechanisms using ROS2, Python, and MAVLink protocol on Pixhawk.',
      'Rebuilt 2 UAV platforms: hexacopter (high payload, stability) and mini FPV drone (reconnaissance), optimizing flight dynamics and PID tuning.',
      'Coordinated E-Yantra 2025 Robotics Competition (Lead Coordinator) and Arduino IoT Workshop (50+ participants).',
    ],
    startDate: 'April 2025',
    endDate: 'March 2026',
    technologies: [
      { name: 'ROS2', href: 'https://docs.ros.org/', icon: <ROS /> },
      { name: 'Python', href: 'https://www.python.org/', icon: <Python /> },
      { name: 'C++', href: 'https://isocpp.org/', icon: <CPP /> },
      { name: 'Linux', href: 'https://www.linux.org/', icon: <Linux /> },
      { name: 'OpenCV / ML', href: 'https://opencv.org/', icon: <Sklearn /> },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Innovation and Robotics Lab of BVCOE',
    position: 'Electronics Head',
    location: 'Navi Mumbai, Maharashtra, India · On-site',
    image: '/company/bvcoe-irl.png',
    description: [
      'Led the electronics division, overseeing hardware design, sensor integration, and flight controller configuration for the lab\'s drone projects.',
      'Configured Pixhawk flight controllers, tuned ESCs, and integrated GPS/GNSS and telemetry modules across multiple UAV builds.',
      'Mentored members on hardware communication protocols (I2C, SPI, UART) and sensor fusion techniques.',
    ],
    startDate: 'April 2024',
    endDate: 'March 2025',
    technologies: [
      { name: 'Python', href: 'https://www.python.org/', icon: <Python /> },
      { name: 'C++', href: 'https://isocpp.org/', icon: <CPP /> },
      { name: 'Linux', href: 'https://www.linux.org/', icon: <Linux /> },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Innovation and Robotics Lab of BVCOE',
    position: 'Robotics & Programming Member',
    location: 'Navi Mumbai, Maharashtra, India · On-site',
    image: '/company/bvcoe-irl.png',
    description: [
      'Joined the lab as a core member, contributing to robotics projects, embedded programming, and autonomous systems exploration.',
      'Participated in Robowars (Robonauts Competition) — achieved 3rd place in the 5kg category.',
      'Built foundational skills in drone programming, ROS, Python, and hardware integration.',
    ],
    startDate: 'January 2024',
    endDate: 'March 2024',
    technologies: [
      { name: 'Python', href: 'https://www.python.org/', icon: <Python /> },
      { name: 'C++', href: 'https://isocpp.org/', icon: <CPP /> },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'IIT Bombay — Maharashtra Drone Project',
    position: 'Software Engineer Intern',
    location: 'On-Site — IITB, Mumbai',
    image: '/company/iitb.png',
    description: [
      'Developed Procurement Management System (React.js, TypeScript) for the aerospace department, streamlining component inventory tracking for drone R&D projects.',
      'Researched Android mobile application for drone with autonomous waypoint navigation and real-time data visualization using ArduPilot integration.',
      'Worked directly with the drone R&D team on telemetry data pipelines and mission planning tooling.',
    ],
    startDate: 'October 2024',
    endDate: 'January 2025',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <Docker /> },
    ],
    website: 'https://www.iitb.ac.in',
  },
];
