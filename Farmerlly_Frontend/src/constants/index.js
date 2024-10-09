import images from '../assets/images'

import {faFacebookF, faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'

export const navLinks = [
  
    
  {
    id: "features",
    title: "Features",
  },
  {
    id: "Team",
    title: "Team",
  },
  {
    id: "Sign In",
    title: "Sign In",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: images.AccessIcon,
    title: "Buy and Sell Anytime, Anywhere",
    content:
      "Access our platform from any device, anytime, and connect with buyers or sellers effortlessly, no matter where you are.",
  },
  {
    id: "feature-2",
    icon: images.Iconsecurity,
    title: "Security you can trust",
    content:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your transactions.",
  },
  {
    id: "feature-3",
    icon: images.CollabrationIcon,
    title: "Real-time collaboration",
    content:
      "Collaborate in real-time with buyers and sellers, making instant decisions and streamlining transactions for a more efficient marketplace experience.",
  },
  {
    id: "feature-4",
    icon: images.AnyfileIcon,
    title: "Select the Best Option for You",
    content:
      "Explore multiple choices and select the best option that meets your needs, ensuring a personalized and rewarding experience.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Our platform 'Farmerlly' streamlines the process of buying and selling crops, saving time and reducing costs for farmers and retailers alike.",
    name: "Shivank Pratap Singh",
    title: "Founder & CEO, Farmerlly",
    img: images.Profile,
  },
  {
    id: "feedback-2",
    content:
      "We provide farmers with valuable market insights and data, enabling them to make informed decisions and optimize their harvests.",
    name: "Shivank Pratap Singh",
    title: "Founder & CEO, Farmerly",
    img: images.Profile,
  },
  {
    id: "feedback-3",
    content:
    "By connecting farmers directly with retailers, we enhance transparency in pricing, ensuring fair compensation for quality produce..",
    name: "Shivank Pratap Singh",
    title: "Founder & CEO, Farmerly",
    img: images.Profile,
  },
];

export const contactInfo = [
  {
    id: "Phone",
    icon: images.iconPhone,
    link: "#",
    text:"+91 - 9454******",
  },
  {
    id: "Email",
    icon: images.iconEmail,
    link: "#",
    text:" farmerlly@gmail.com",
  },
 ]




export const footerLinks = [
    {
        links: [
      {
        name: "About Us",
        link: "/About",
      },
      {
        name: "Jobs",
        link: "#",
      },
      {
        name: "Press",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
          ],
  },
  {
       links: [
      {
        name: "Contact Us",
        link: "/Contact",
      },
      {
        name: "Terms",
        link: "#",
      },
      {
        name: "Privacy",
        link: "#",
      },
       ],
  },
  ];


  export const socialMedia = [
    {
      id: "facebook",
     img: faFacebookF,
    },
    {
      id: "twitter",
   img:faTwitter,
    },
    {
      id: "intsgram",
      img: faInstagram,
    },
  ];
  
