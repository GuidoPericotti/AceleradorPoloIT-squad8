import React from 'react';
import FooterNav from './FooterNav';

export const FooterComponent = ({ darkMode }) => {
  const useCasesLinks = [
    { href: '#', text: 'UI design' },
    { href: '#', text: 'UX design' },
    { href: '#', text: 'Wireframing' },
    { href: '#', text: 'Brainstorming' },
    { href: '#', text: 'Online whiteboard' },
    { href: '#', text: 'Team collaboration' },
  ];

  const exploreLinks = [
    { href: '#', text: 'Design' },
    { href: '#', text: 'Prototyping' },
    { href: '#', text: 'Development features' },
    { href: '#', text: 'Design systems' },
    { href: '#', text: 'Collaboration systems' },
    { href: '#', text: 'Design process' },
    { href: '#', text: 'FigJam' },
  ];

  const resourcesLinks = [
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Best practices' },
    { href: '#', text: 'Colors' },
    { href: '#', text: 'Color wheel' },
    { href: '#', text: 'Support' },
    { href: '#', text: 'Developers' },
    { href: '#', text: 'Resource library' },
  ];

  return (
    <footer className={`p-10 dark:bg-dark-primary ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around gap-6">
          <FooterNav title="Use cases" links={useCasesLinks} darkMode={darkMode} />
          <FooterNav title="Explore" links={exploreLinks} darkMode={darkMode} />
          <FooterNav title="Resources" links={resourcesLinks} darkMode={darkMode} />
        </div>
      </div>
    </footer>
  );
};