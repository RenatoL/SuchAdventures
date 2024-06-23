export const siteConfig = {
  author: 'Renato Lourinho',
  title: 'Adventures',
  subtitle: 'On Two Wheels, Hikes, and More',
  description: 'A compact blog for some of my adventures',
  image: {
    src: '/src/assets/NatureTattoo.png',
    alt: 'Website Main Image',
  },
  email: 'renato@lourinho.com',
  emailIcon: 'i-carbon-email',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/RenatoL',
      icon: 'i-ri-github-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/renato-lourinho/',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/natolourinho/',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: 'https://www.youtube.com/@SuchAdventures',
      icon: 'i-simple-icons-youtube',
    },
  ],
  header: {
    logo: {
      src: '/src/assets/NatureTattoo.png',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Content',
        href: '/stories',
      },
      {
        text: 'Gear',
        href: '/gear',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Stories',
        href: '/stories',
      },
      {
        text: 'Videos',
        href: '/stories/videos',
      },
    ],
  },
  footer: {
    navLinks: [
    ],
  },
}

export default siteConfig
