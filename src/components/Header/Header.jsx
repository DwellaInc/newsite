import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo/dwella-logo.svg';
import Button from '../Button/Button';
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close-icon.svg';

export default function Header() {
  const [openDropdown, setOpenDrowpdown] = useState(false);
  const [dropdownClass, setDropdownClass] = useState('hidden');

  const links = [
    { title: 'About Us', anchor: 'about-us' },
    {
      title: 'Survey',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSc9hDSxlPlLgRJtrbpSH1lLi8Bn-WA78Zyf2ZSDb-8ikMCjfA/viewform',
    },
  ];

  const handleOpenDropdown = () => {
    setOpenDrowpdown(!openDropdown);

    if (dropdownClass === 'hidden') {
      setDropdownClass('header-dropdown');
    } else {
      setDropdownClass('hidden');
    }
  };

  return (
    <section className="header">
      <div className="header-container">
        <img
          className="logo header-logo"
          src={logo}
          alt="Dwella Logo"
          onClick={() =>
            document.getElementById('hero').scrollIntoView({
              behavior: 'smooth',
            })
          }
        />
        <div className="button-container">
          {links.map((link) => {
            console.log(link.anchor);
            return (
              <>
                <Button
                  className="btn-nav"
                  text={link.title}
                  link={link && link.link}
                  onClick={() => {
                    if (link.anchor) {
                      document.getElementById(link.anchor).scrollIntoView({
                        behavior: 'smooth',
                      });
                    }
                  }}
                />
              </>
            );
          })}
          <div className="button-wrap">
            <Button
              className="btn-primary"
              text="Register"
              onClick={() => {
                document.getElementById('hero').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            />
          </div>
        </div>
        <img
          className="header-hamburger"
          src={openDropdown ? close : hamburger}
          alt="Hamburger menu"
          onClick={() => handleOpenDropdown()}
        />
      </div>
      <div className={dropdownClass}>
        {links.map((link) => {
          return (
            <>
              <Button className="btn-nav" text={link.title} link={link.link} />
            </>
          );
        })}
        <div className="button-wrap">
          <Button
            className="btn-primary"
            text="Register"
            onClick={() => {
              document.getElementById('hero').scrollIntoView({
                behavior: 'smooth',
              });
            }}
          />
        </div>
      </div>
    </section>
  );
}
