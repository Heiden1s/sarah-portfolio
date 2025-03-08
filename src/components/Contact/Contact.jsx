import React from 'react';
import Section from '../common/Section';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import SectionTitle from '../common/SectionTitle';

const IMAGES = {
  instagram: './images/instagram-icon.svg',
  dribbble: './images/dribbble-icon.svg',
  telegram: './images/telegram-icon.svg',
  pinterest: './images/pinterest-icon.svg',
  linkedin: './images/linkedin-icon.svg'
};

const Contact = () => {
  const socialLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/poorlydrawnsarah'
    },
    {
      platform: 'Dribbble',
      url: 'https://dribbble.com/sarahjafari'
    },
    {
      platform: 'Behance',
      url: 'https://www.behance.net/sarahjafari'
    },
    {
      platform: 'Telegram',
      url: 'https://t.me/poorlydrawnsarah'
    },
    {
      platform: 'Pinterest',
      url: 'https://www.pinterest.com/poorlydrawnsarah'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sarah-jafari24/'
    }
  ];

  return (
    <Section isGray={false} id="contact">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <SectionTitle title="contact" subtitle="Contact me!" />

          {/* Contact Card */}
          <div className="bg-card-dark rounded-lg p-6 backdrop-blur-sm">
            <ContactForm />

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-main-teal/30">
              <ContactInfo 
                phone="+98993865382"
                email="sarahjafari1382@gmail.com"
              />

              {/* Social Links */}
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact; 