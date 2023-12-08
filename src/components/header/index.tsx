import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import { PATH_NAME } from "~/routers/pathName";
import { Switch } from "antd";
import IconDarkMode from "~/assets/icons/dark-mode.png";
import IconDarkModeWhite from "~/assets/icons/light_dark-mode.png";

const Header = () => {
  const [isDarkMode, setIdDarkMode] = useState<boolean>(false);

  const onDarkModeChange = (checked: boolean) => {
    setIdDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <header>
      <nav className="bg-white shadow border-b-[1px] border-[#ccc]  px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={PATH_NAME.HOME} className="flex items-center">
            <img src={Logo} className="w-[76px] h-auto" alt="Kana Cute" />
          </Link>

          <div className="flex items-center lg:order-2">
            <div className="flex items-center gap-[2px]">
              <Switch
                checked={isDarkMode}
                onChange={onDarkModeChange}
                className="mt-1"
              />
              {isDarkMode ? (
                <img src={IconDarkMode} className="w-[36px]" />
              ) : (
                <img src={IconDarkModeWhite} className="w-[36px]" />
              )}
            </div>
            <Link
              to={PATH_NAME.LOGIN}
              className="text-gray-800 dark:text-white hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Đăng nhập
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
