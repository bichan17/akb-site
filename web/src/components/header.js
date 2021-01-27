import React, { useContext } from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { SectionContext } from "../lib/SectionContext";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const { currentSection, setCurrentSection } = useContext(SectionContext);
  console.log(currentSection);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <a href="#intro">{siteTitle}</a>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <a href="#clients" className={currentSection == "clients" ? styles.linkActive : null}>
                Clients
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={currentSection == "services" ? styles.linkActive : null}
              >
                Services
              </a>
            </li>
            <li>
              <a href="#work" className={currentSection == "work" ? styles.linkActive : null}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className={currentSection == "contact" ? styles.linkActive : null}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
