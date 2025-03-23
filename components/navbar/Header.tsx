"use client";
import Link from "next/link";
import { usePathname  } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the div element
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button element
  const righMenuToggle = useRef<HTMLDivElement>(null); // Ref for the div element
  const buttonRight = useRef<HTMLDivElement>(null); // Ref for the button element
  const dropdownRef = useRef<HTMLLIElement>(null);
  const socialMenuToggle = useRef<HTMLUListElement>(null); // Ref for the div element
  const socialToggleButton = useRef<HTMLDivElement>(null); // Ref for the button element
  const [isStuck, setIsStuck] = useState(false);
  const pathname  = usePathname();
  const [isMounted, setIsMounted] = useState(false); 
  const [isSubmenuOpen, setisSubmenuOpen]= useState(false as boolean)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      socialMenuToggle.current &&
      socialToggleButton.current &&
      !socialMenuToggle.current.contains(event.target as Node) &&
      !socialToggleButton.current.contains(event.target as Node)
    ) {
      // Click was outside the element
      console.log(
        "socialMenuToggle.current.contains(event.target as Node)",
        !socialMenuToggle?.current
      );
      socialMenuToggle.current.classList.remove("active");
      socialToggleButton.current.classList.remove("active");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsStuck(true);
    } else {
      setIsStuck(false);
    }
  };


  const handleSubmenu= () => {
    if (window.innerWidth < 1200) {
      setisSubmenuOpen((prev)=>!prev);
    } else {
      setisSubmenuOpen(false);
    }
  }



  useEffect(() => {
  
    window.addEventListener('scroll', handleScroll);
      
    const handleResize = () => {
      if (divRef.current) {
        if (window.innerWidth <= 1199) {
          divRef.current.classList.add("rd-navbar-fixed");
          divRef.current.classList.remove("rd-navbar-static");
        } else {
          divRef.current.classList.remove("rd-navbar-fixed");
          divRef.current.classList.add("rd-navbar-static");
        }
      }
    };
    // Add the resize listener
    window.addEventListener("resize", handleResize);
    // Initial check on component mount
    handleResize();
    // Clean up the event listener
    return () => {
   
      window.removeEventListener("resize", handleResize);
    } 
  },);

  useEffect(() => {

    const handleMouseEnter = () => {
      if (dropdownRef.current && window.innerWidth > 1200) {
        dropdownRef.current.classList.add("opened"); // Add 'focus' class on hover
      }
    };

    const handleMouseLeave = () => {
      if (dropdownRef.current &&  window.innerWidth > 1200) {
        dropdownRef.current.classList.remove("opened"); // Remove 'focus' class on mouse leave
      }
    };

    // Attach event listeners for mouse enter and leave
    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      dropdownElement.addEventListener("mouseenter", handleMouseEnter);
      dropdownElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
        dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleToggle = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("active"); // Toggle 'active' class on the div
    }

    if (buttonRef.current) {
      buttonRef.current.classList.toggle("active"); // Optionally toggle class on button
    }
  };

  const removeActiveClass = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove('active');
    }
    if (buttonRef.current) {
      buttonRef.current.classList.remove('active');
    }
  };

  useEffect(() => {
    // Remove active class when pathname changes
    removeActiveClass();
  }, [pathname]); // Trigger effect whenever the path changes

  const handleToggleRight = () => {
    if (righMenuToggle.current) {
      righMenuToggle.current.classList.toggle("active"); // Toggle 'active' class on the div
    }

    if (buttonRight.current) {
      buttonRight.current.classList.toggle("active"); // Optionally toggle class on button
    }
  };

  const socialToggleRight = () => {
    if (socialMenuToggle.current) {
      socialMenuToggle.current.classList.toggle("active"); // Toggle 'active' class on the div
    }

    if (socialToggleButton.current) {
      socialToggleButton.current.classList.toggle("active"); // Optionally toggle class on button
    }
  };

  return (
    <header className="section page-header">
      <div className="rd-navbar-wrap">
        <nav
          ref={divRef}
          className={`rd-navbar rd-navbar-classic rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static rd-navbar-fixed ${isStuck&&'rd-navbar--is-stuck !z-50'}`}
        >
          <div
            ref={buttonRight}
            onClick={handleToggleRight}
            className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
            data-rd-navbar-toggle=".rd-navbar-collapse"
          >
            <span></span>
          </div>

          <div className="rd-navbar-panel">
            <button
              ref={buttonRef}
              onClick={handleToggle}
              className="rd-navbar-toggle"
              data-rd-navbar-toggle=".rd-navbar-nav-wrap"
            >
              <span></span>
            </button>

            <div className="rd-navbar-brand">
              <Link className="brand" href="/">
                <img
                  className="brand-logo-dark"
                  src="/logo.png"
                  alt=""
                  width="196"
                  height="114"
                />
              </Link>
            </div>
          </div>
          <div className="rd-navbar-right">
            <div
              ref={menuRef}
              className="rd-navbar-main rd-navbar-nav-wrap toggle-original-elements"
            >
              <div className="rd-navbar-main-right">
                <ul className="rd-navbar-contacts">
                  <li>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <span className="icon mdi mdi-phone"></span>
                      </div>

                      <div className="unit-body">
                        <Link className="phone" href="tel:+917080302793">
                          +91 7080302793
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <span className="icon mdi mdi-email"></span>
                      </div>

                      <div className="unit-body">
                        <Link className="address" href="mailto:info@lookaroma.com">
                          info@lookaroma.com
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rd-navbar-main-left">
                <ul className="rd-navbar-nav">
                  <li className="rd-nav-item">
                    <Link className="rd-nav-link" href="/">
                      Home
                    </Link>
                  </li>

                  <li
                    ref={dropdownRef}
                    className={`rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu ${isSubmenuOpen?'opened':''}`}
                    onClick={handleSubmenu}
                  >
                    <Link className="rd-nav-link" href="#">
                      Products
                    </Link>
                    <span className={`rd-navbar-submenu-toggle`}></span>
                    <ul className="rd-menu rd-navbar-dropdown">
                      <li className="rd-dropdown-item">
                        <Link
                          className="rd-dropdown-link"
                          href="/essential-oil"
                        >
                          Essential Oil
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link className="rd-dropdown-link" href="/oleoresin">
                          Oleoresin
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link
                          className="rd-dropdown-link"
                          href="/aromatic-chemicals"
                        >
                          Aromatic Chemicals
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link
                          className="rd-dropdown-link"
                          href="/fragrance-compound"
                        >
                          Fragrance Compound
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link
                          className="rd-dropdown-link"
                          href="/absolute-oil"
                        >
                          Absolute Oil
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link
                          className="rd-dropdown-link"
                          href="/floral-water"
                        >
                          Floral Water
                        </Link>
                      </li>

                      <li className="rd-dropdown-item">
                        <Link className="rd-dropdown-link" href="/carrier-oil">
                          Carrier Oil
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="rd-nav-item">
                    <Link className="rd-nav-link" href="/project">
                      Projects
                    </Link>
                  </li>

                  <li className="rd-nav-item">
                    <Link className="rd-nav-link" href="/about-us">
                      About Us
                    </Link>
                  </li>

                  <li className="rd-nav-item">
                    <Link className="rd-nav-link" href="/faq">
                      FAQs
                    </Link>
                  </li>

                  <li className="rd-nav-item">
                    <Link className="rd-nav-link" href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              ref={righMenuToggle}
              className="rd-navbar-aside rd-navbar-collapse toggle-original-elements"
            >
              <div className="rd-navbar-info">
                <article className="box-icon-minimal">
                  <div className="unit align-items-center unit-spacing-sm">
                    <div className="unit-left">
                      <div className="icon linearicons-trophy2"></div>
                    </div>

                    <div className="unit-body">
                      <div className="box-icon-minimal-title">
                        Leading Provider
                      </div>

                      <p className="box-icon-minimal-text">
                        Of Industrial Solutions
                      </p>
                    </div>
                  </div>
                </article>

                <article className="box-icon-minimal">
                  <div className="unit align-items-center unit-spacing-xxs">
                    <div className="unit-left">
                      <div className="icon linearicons-medal-empty"></div>
                    </div>

                    <div className="unit-body">
                      <div className="box-icon-minimal-title">Certified</div>

                      <p className="box-icon-minimal-text">ISO 9001:2015</p>
                    </div>
                  </div>
                </article>

                <article className="box-icon-minimal">
                  <div className="unit align-items-center unit-spacing-xs">
                    <div className="unit-left">
                      <div className="icon linearicons-map-marker"></div>
                    </div>

                    <div className="unit-body">
                      <div className="box-icon-minimal-title">Export with</div>

                      <p className="box-icon-minimal-text"> 9+ countries</p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="button-share">
                <div
                  ref={socialToggleButton}
                  onClick={socialToggleRight}
                  className="button-share-icon linearicons-share2 text-center"
                  data-rd-navbar-toggle=".list-share"
                ></div>

                <ul className="list-share" ref={socialMenuToggle}>
                  <li className="list-share-item">
                    <Link className="icon mdi mdi-facebook" href="#"></Link>
                  </li>

                  <li className="list-share-item">
                    <Link className="icon mdi mdi-twitter" href="#"></Link>
                  </li>

                  <li className="list-share-item">
                    <Link className="icon mdi mdi-instagram" href="#"></Link>
                  </li>

                  <li className="list-share-item">
                    <Link className="icon mdi mdi-google-plus" href="#"></Link>
                  </li>
                </ul>
              </div>
              <Link
                className="button button-icon button-icon-left button-white button-winona"
                href="pdf/Company_Profile.pdf"
                download="download"
              >
                <span className="icon mdi mdi-download"></span>
                <span>Download brochure</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
