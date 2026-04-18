import CPP from '@/components/technologies/CPP';
import Linux from '@/components/technologies/Linux';
import Python from '@/components/technologies/Python';
import ROS from '@/components/technologies/ROS';
import Sklearn from '@/components/technologies/Sklearn';
import Discord from '@/components/svgs/Discord';
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import YouTube from '@/components/svgs/YouTube';

export const roboticsSkillComponents = {
  Python: Python,
  ROS: ROS,
  CPP: CPP,
  Linux: Linux,
  Sklearn: Sklearn,
};

export const roboticsHeroConfig = {
  name: 'Sushil Sahani',
  title: 'Robotics Engineer with 2+ years of experience',
  avatar: '/favicon.jpeg',

  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'ROS2',
      href: 'https://docs.ros.org/',
      component: 'ROS',
    },
    {
      name: 'C++',
      href: 'https://isocpp.org/',
      component: 'CPP',
    },
    {
      name: 'Linux',
      href: 'https://www.linux.org/',
      component: 'Linux',
    },
    {
      name: 'OpenCV / ML',
      href: 'https://opencv.org/',
      component: 'Sklearn',
    },
  ],

  description: {
    template:
      'Building autonomous UAV systems and counter-drone solutions. Expertise in <b>ROS2</b>, <b>Pixhawk</b> and <b>MAVLink Protocol</b>I co-founded <b>Robomaniac</b> — an Ed-tech <b>STEM, AI & Robotics startup</b> delivering hands-on education to students.I also run autonomous navigation research and write about embedded systems on my <b>blog</b> and <b>YouTube channel</b>.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/sushil_resume_r1.pdf',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'My journey',
      href: '/journey',
      icon: 'Chat',
    },
  ],
};

export const roboticsSocialLinks = [
  {
    name: 'X',
    href: 'https://x.com/not_aspirant',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sushil-sahani-46235527b/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/sushil016',
    icon: <Github />,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/sushilz16',
    icon: <Discord />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCKhgnThKZcPt6Nw2oPJm6tg',
    icon: <YouTube />,
  },
  {
    name: 'Email',
    href: 'mailto:sahanisushil325@gmail.com',
    icon: <Mail />,
  },
];
