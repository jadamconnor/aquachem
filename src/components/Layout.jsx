import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Layout = ({ children }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const footerContactList = t('footer.contact', {
    returnObjects: true,
  });

  return (
    <>
      <header className="w-full h-[120px] absolute z-50">
        <div
          className={`${
            mobileNav && 'bg-white'
          } flex justify-between font-sans-system container h-full items-center px-5 xl:px-0`}
        >
          <div className="flex-1 justify-start">
            <div className="xl:w-72">
              <a href="/">
                <img src="AquachemLogoWhite.png" />
              </a>
            </div>
          </div>
          <nav className={`${!isHomePage && 'hidden'} flex-1 flex justify-end`}>
            <ul className="hidden w-full xl:flex xl:justify-between xl:text-lg 2xl:text-2xl text-white font-bold">
              <li
                className="h-[40px]"
                onMouseEnter={() => setHoveredComponent('1')}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <a href="#about">{t('mainNav.about')}</a>
                {hoveredComponent === '1' && (
                  <MdKeyboardArrowDown className="text-aqua-blue mx-auto -mt-1" />
                )}
              </li>
              <li
                className="h-[40px]"
                onMouseEnter={() => setHoveredComponent('2')}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <a href="#products-and-services">
                  {t('mainNav.productsAndServices')}
                </a>
                {hoveredComponent === '2' && (
                  <MdKeyboardArrowDown className="text-aqua-blue mx-auto -mt-1" />
                )}
              </li>
              <li
                className="h-[40px]"
                onMouseEnter={() => setHoveredComponent('2')}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <a href="/sds-downloads">{t('mainNav.sdsDownloads')}</a>
              </li>
              <li
                className="h-[40px]"
                onMouseEnter={() => setHoveredComponent('3')}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <a href="#contact">{t('mainNav.contact')}</a>
                {hoveredComponent === '3' && (
                  <MdKeyboardArrowDown className="text-aqua-blue mx-auto -mt-1" />
                )}
              </li>
            </ul>

            {!mobileNav && (
              <div
                onClick={toggleMobileNav}
                className="flex xl:hidden w-fit text-3xl gap-5 h-fit text-white mr-5"
              >
                <FaBars />
              </div>
            )}
            {mobileNav && (
              <div
                onClick={toggleMobileNav}
                className="flex xl:hidden w-fit text-3xl gap-5 h-fit text-aqua-blue mr-5"
              >
                <FaTimes />
              </div>
            )}
          </nav>
        </div>
        <div
          className={`bg-white transition-all ease-in-out duration-300 ${
            mobileNav ? 'h-fit' : 'h-0'
          } z-50`}
        >
          <div className={`'h-fit' ${mobileNav ? 'block' : 'hidden'}`}>
            <nav className="pb-10">
              <ul className="text-aqua-blue font-bold text-lg text-center">
                <li>
                  <a onClick={toggleMobileNav} href="#about">
                    {t('mainNav.about')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleMobileNav} href="#products-and-services">
                    {t('mainNav.productsAndServices')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleMobileNav} href="/sds-downloads">
                    {t('mainNav.sdsDownloads')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleMobileNav} href="#contact">
                    {t('mainNav.contact')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer
        className="bg-left-top pb-40"
        style={{
          backgroundImage: 'url(FooterBKGD.gif)',
        }}
      >
        <div className="container px-5 xl:px-0 xl:flex py-16">
          <div className="xl:w-1/2 xl:flex justify-between">
            <div className="col-span-1 mb-5 xl:mb-0">
              {Object.entries(footerContactList).map((item, i) => (
                <div className="flex gap-3 items-center" key={item[0]}>
                  <h4
                    className={`${
                      i === 0 && 'self-start mt-1'
                    } text-aqua-blue font-bold text-[8px]`}
                  >
                    {item[0]}:
                  </h4>
                  <p className="text-white text-lg text-[13px]">
                    <Trans
                      components={{
                        p: <p className="leading-normal"></p>,
                        a: <a></a>,
                      }}
                    >
                      {item[1]}
                    </Trans>
                  </p>
                </div>
              ))}
            </div>
            <div className="xl:w-1/2 xl:text-right mb-5 xl:mb-0">
              <a
                className="text-white text-[13px] flex items-center xl:justify-center"
                href="#"
              >
                {t('footer.downloadLink')}
                <MdKeyboardArrowDown className="text-2xl text-aqua-blue" />
              </a>
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:text-right text-white text-[13px]">
            <Trans
              components={{ span: <span className="text-aqua-blue"></span> }}
            >
              {t('footer.copyRight', {
                year: new Date().getFullYear(),
              })}
            </Trans>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
