import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavBar from '../NavBar/NavBar';
import style from './Header.module.css';
import Burger from '../Burger/Burger';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={!open ? style.header : style.headerBurger}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <a href="/" className={style.logo}>
            <svg
              width="112"
              height="39"
              viewBox="0 0 112 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.1185 26H63.5105L59.2385 19.976C61.9025 19.304 63.1265 17.264 63.1265 14.936C63.1265 12.2 61.3985 9.46399 57.5585 9.46399H50.7905V26H54.5585V20.192H55.3025L59.1185 26ZM54.5585 12.752H57.0545C58.5905 12.752 59.3345 13.928 59.3345 15.032C59.3345 16.136 58.6145 17.216 56.9585 17.216H54.5585V12.752Z"
                fill="black"
              />
              <path
                d="M70.619 26.216C73.811 26.216 76.715 23.912 76.715 20.384C76.715 16.832 73.811 14.528 70.619 14.528C67.427 14.528 64.547 16.832 64.547 20.384C64.547 23.912 67.427 26.216 70.619 26.216ZM70.619 22.928C69.251 22.928 68.147 21.92 68.147 20.384C68.147 18.848 69.251 17.816 70.619 17.816C71.987 17.816 73.091 18.848 73.091 20.384C73.091 21.92 71.987 22.928 70.619 22.928Z"
                fill="black"
              />
              <path
                d="M84.4472 26.216C87.6392 26.216 90.5432 23.912 90.5432 20.384C90.5432 16.832 87.6392 14.528 84.4472 14.528C81.2551 14.528 78.3752 16.832 78.3752 20.384C78.3752 23.912 81.2551 26.216 84.4472 26.216ZM84.4472 22.928C83.0792 22.928 81.9752 21.92 81.9752 20.384C81.9752 18.848 83.0792 17.816 84.4472 17.816C85.8152 17.816 86.9192 18.848 86.9192 20.384C86.9192 21.92 85.8152 22.928 84.4472 22.928Z"
                fill="black"
              />
              <path
                d="M99.6963 14.816H97.3443V10.784H93.7923V14.816H91.7523V17.48H93.7923V26H97.3443V17.48H99.6963V14.816Z"
                fill="black"
              />
              <path
                d="M111.264 14.816H101.424V18.104H106.08L101.112 23.384V26H111.264V22.712H106.224L111.264 17.456V14.816Z"
                fill="black"
              />
              <path className={style.blueLeaf}
                d="M9.0712 32.1278C9.0712 32.1278 16.3525 24.5862 15.723 15.9868C15.0935 7.3873 6.79149 0.98645 6.79149 0.98645C6.79149 0.98645 -0.48986 8.52808 0.139662 17.1275C0.769185 25.727 9.0712 32.1278 9.0712 32.1278Z"
                fill="#7675FD"
              />
              <path className={style.redLeaf}
                d="M8.96908 32.3486C8.96908 32.3486 18.4287 31.3444 23.0943 24.9753C27.76 18.6062 25.8649 9.28411 25.8649 9.28411C25.8649 9.28411 16.4053 10.2883 11.7396 16.6574C7.07397 23.0265 8.96908 32.3486 8.96908 32.3486Z"
                fill="#F26C74"
              />
              <path className={style.yellowLeaf}
                d="M9.53696 32.477C9.53696 32.477 17.4608 36.0352 24.9543 33.5491C32.4478 31.063 36.6734 23.474 36.6734 23.474C36.6734 23.474 28.7495 19.9158 21.256 22.4019C13.7625 24.888 9.53696 32.477 9.53696 32.477Z"
                fill="#FAA881"
              />
            </svg>
          </a>
          <NavBar
            onClick={handleClose}
            style={
              !open
                ? style.navWrapper
                : `${style.navWrapperActive} ${style.navWrapper}`
            }
          />
          <Link
            onClick={handleClose}
            to="getStarted"
            spy={true}
            smooth={true}
            offset={-300}
            duration={1000}
            className={!open ? style.apply : style.applyBurger}
          >
            Apply
          </Link>
          <Burger onClick={handleToggle} open={open} />
        </div>
      </div>
    </div>
  );
};

export default Header;
