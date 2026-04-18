import CPP from '@/components/technologies/CPP';
import Docker from '@/components/technologies/Docker';
import Linux from '@/components/technologies/Linux';
import Python from '@/components/technologies/Python';
import ROS from '@/components/technologies/ROS';
import Sklearn from '@/components/technologies/Sklearn';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import { Project } from '@/types/project';

export const roboticsProjects: Project[] = [
  {
    title: 'Drone-Dex: Counter Autonomous Drone (Kamikaze UAV)',
    description:
      'Autonomous counter-drone system with dual detection (camera AI + RF signals) using Pixhawk, Raspberry Pi 4, and custom-trained YOLOv5 achieving 95% accuracy for real-time UAV threat identification. Built comprehensive ROS2 node architecture with obstacle avoidance, GPS/GNSS positioning, sensor fusion, and zero-latency MAVLink telemetry.',
    image: '/notewrite.png',
    link: '#',
    technologies: [
      { name: 'ROS2', icon: <ROS key="ros2" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'C++', icon: <CPP key="cpp" /> },
      { name: 'OpenCV / ML', icon: <Sklearn key="sklearn" /> },
      { name: 'Linux', icon: <Linux key="linux" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Mini FPV Autonomous Drone',
    description:
      'Configured and programmed a mini FPV drone for autonomous reconnaissance missions. Implemented PID tuning, autonomous waypoint navigation, and real-time telemetry using ArduPilot and MAVLink protocol on Pixhawk. Integrated camera feed with onboard processing for obstacle detection during autonomous flight.',
    image: '/notewrite.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'ROS2', icon: <ROS key="ros2" /> },
      { name: 'C++', icon: <CPP key="cpp" /> },
      { name: 'Linux', icon: <Linux key="linux" /> },
      { name: 'OpenCV / ML', icon: <Sklearn key="sklearn" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: false,
  },
  {
    title: 'Procurement Management System — IIT Bombay',
    description:
      'Full-stack procurement system for the IIT Bombay Aerospace Department, streamlining component inventory tracking for drone R&D projects. Built with React.js, TypeScript, and PostgreSQL, containerized with Docker.',
    image: '/notewrite.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: false,
  },
];
