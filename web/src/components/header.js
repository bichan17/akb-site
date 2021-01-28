import React, { useContext } from "react";
import Icon from "./icon";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { cn } from "../lib/helpers";
import { SectionContext } from "../lib/SectionContext";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const { currentSection, setCurrentSection } = useContext(SectionContext);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <a href="#intro">{siteTitle}</a>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <AiOutlineMenu />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <button className={styles.closeNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <IoMdClose />
          </button>
          <ul className={styles.linksList}>
            <li>
              <a
                href="#clients"
                className={currentSection == "clients" ? styles.linkActive : null}
                onClick={showNav ? onHideNav : onShowNav}
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={currentSection == "services" ? styles.linkActive : null}
                onClick={showNav ? onHideNav : onShowNav}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={currentSection == "work" ? styles.linkActive : null}
                onClick={showNav ? onHideNav : onShowNav}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={currentSection == "contact" ? styles.linkActive : null}
                onClick={showNav ? onHideNav : onShowNav}
              >
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
