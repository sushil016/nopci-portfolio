import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sushil Sahani — Portfolio',
    short_name: 'Sushil Sahani',
    description: 'Full Stack Developer & Cloud/DevOps Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}
