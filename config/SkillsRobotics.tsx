import CPP from '@/components/technologies/CPP';
import Docker from '@/components/technologies/Docker';
import Linux from '@/components/technologies/Linux';
import Python from '@/components/technologies/Python';
import ROS from '@/components/technologies/ROS';
import Sklearn from '@/components/technologies/Sklearn';
import TypeScript from '@/components/technologies/TypeScript';
import ReactIcon from '@/components/technologies/ReactIcon';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import JavaScript from '@/components/technologies/JavaScript';
import GCP from '@/components/technologies/GCP';
import Azure from '@/components/technologies/Azure';

import { type Skill } from './Skills';

function TextIcon({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        fontSize: '9px',
        fontWeight: 700,
        fontFamily: 'monospace',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        color: 'currentColor',
        opacity: 0.7,
      }}
    >
      {label}
    </span>
  );
}

export const roboticsSkillsRow1: Skill[] = [
  { name: 'Python', icon: <Python />, href: 'https://www.python.org/' },
  { name: 'C++', icon: <CPP />, href: 'https://isocpp.org/' },
  { name: 'Linux', icon: <Linux />, href: 'https://www.linux.org/' },
  { name: 'ROS2', icon: <ROS />, href: 'https://docs.ros.org/' },
  { name: 'OpenCV / ML', icon: <Sklearn />, href: 'https://opencv.org/' },
  { name: 'Gazebo', icon: <TextIcon label="GZB" />, href: 'https://gazebosim.org/' },
  { name: 'RViz', icon: <TextIcon label="RVZ" />, href: 'https://wiki.ros.org/rviz' },
  { name: 'SLAM', icon: <TextIcon label="SLAM" />, href: 'https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping' },
  { name: 'Arduino IDE', icon: <TextIcon label="ARD" />, href: 'https://www.arduino.cc/' },
  { name: 'Mission Planner', icon: <TextIcon label="MP" />, href: 'https://ardupilot.org/planner/' },
  { name: 'Betaflight', icon: <TextIcon label="BF" />, href: 'https://betaflight.com/' },
  { name: 'iNav', icon: <TextIcon label="iNAV" />, href: 'https://github.com/iNavFlight/inav' },
  { name: 'Raspberry Pi', icon: <TextIcon label="RPi" />, href: 'https://www.raspberrypi.org/' },
  { name: 'RF Detection', icon: <TextIcon label="RF" />, href: 'https://en.wikipedia.org/wiki/Radio_frequency' },
  { name: 'Docker', icon: <Docker />, href: 'https://www.docker.com/' },
];

export const roboticsSkillsRow2: Skill[] = [
  { name: 'TypeScript', icon: <TypeScript />, href: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', icon: <JavaScript />, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <ReactIcon />, href: 'https://react.dev/' },
  { name: 'Node.js', icon: <NodeJs />, href: 'https://nodejs.org/' },
  { name: 'PostgreSQL', icon: <PostgreSQL />, href: 'https://www.postgresql.org/' },
  { name: 'GCP', icon: <GCP />, href: 'https://cloud.google.com/' },
  { name: 'Azure', icon: <Azure />, href: 'https://azure.microsoft.com/' },
  { name: 'ROS2', icon: <ROS />, href: 'https://docs.ros.org/' },
  { name: 'Python', icon: <Python />, href: 'https://www.python.org/' },
  { name: 'Mission Planner', icon: <TextIcon label="MP" />, href: 'https://ardupilot.org/planner/' },
  { name: 'SLAM', icon: <TextIcon label="SLAM" />, href: 'https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping' },
  { name: 'Raspberry Pi', icon: <TextIcon label="RPi" />, href: 'https://www.raspberrypi.org/' },
  { name: 'Betaflight', icon: <TextIcon label="BF" />, href: 'https://betaflight.com/' },
  { name: 'Gazebo', icon: <TextIcon label="GZB" />, href: 'https://gazebosim.org/' },
];
