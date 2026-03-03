import { useEffect, useState } from 'react';

//Import CSS
import '../styles/Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
            if (window.scrollY > 80) setIsExpanded(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sneaky-nav ${isScrolled ? 'scrolled' : ''} ${isExpanded ? 'expanded' : ''}`}>
            <NavItem icon='fas fa-th-large' label='Home' isScrolled={isScrolled}/>
            <NavItem icon='fas fa-paw' label='Pet Gallery' isScrolled={isScrolled}/>
            <NavItem icon='fas fa-heart' label='Favorites' isScrolled={isScrolled}/>
            <NavItem icon='fas fa-envelope' label='About Us' isScrolled={isScrolled}/>

            <div className='divider'></div>
            
            <NavItem icon='fas fa-cog' label='Settings' isScrolled={isScrolled}/>

        </div>
    )
}

function NavItem({ icon, label, isScrolled }) {
  return (
    <div className='nav-item'>
      <div className='icon-wrapper'>
        <i className={`${icon} nav-icon ${isScrolled ? 'spin-on-hover' : ''}`}></i>
      </div>
      <span className='nav-label'>{label}</span>
    </div>
  );
}

export default Navbar;