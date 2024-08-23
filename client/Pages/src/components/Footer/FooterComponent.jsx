import React from 'react';

export const FooterComponent = ({darkMode}) => {
  return (
    <>
      <footer className={`bg-white text-gray-800 p-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>

        <div className="flex justify-around">
          <nav>
            <h6 className="text-lg font-semibold mb-4">Use cases</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">UI design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UX design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wireframing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brainstorming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online whiteboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team collaboration</a></li>
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-semibold mb-4">Explore</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prototyping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collaboration systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FigJam</a></li>
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-semibold mb-4">Resources</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Color wheel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resource library</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
