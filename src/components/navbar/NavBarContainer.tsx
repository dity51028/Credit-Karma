import { FC, useEffect, useState } from "react";
import { TextInput } from "..";
import { useTheme } from "../../hooks";
import { ImageDarkIcon, ImageLightIcon } from "../../constants/image-index";

const NavBarContainer: FC = () => {
  const ThemeContext = useTheme();
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (search.length === 0) return;
    console.log(search);
  }, [search]);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Credit-Karma</a>
        </div>
        <div className="flex-none navbar-end gap-x-2">
          <TextInput onStateChange={() => {}} placeHolder="Search Here" />
          <div>
            <img
              src={ThemeContext.theme ? ImageDarkIcon : ImageLightIcon}
              alt="themeIcon"
              width={42}
              height={42}
              onClick={() => {
                localStorage.setItem("theme", !ThemeContext.theme + "");
                ThemeContext.toggleTheme();
              }}
            />
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarContainer;
