import React, { useState } from "react";

const SidebarMenu = () => {
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <div className="main-sidebar-menu">
      <h3>MENU</h3>
      <ul>
        <li>Home</li>
        <li>watch list</li>
        <li>comming soon</li>
      </ul>
      <h3>Social</h3>
      <ul>
        <li>Parties</li>
      </ul>
      <h3>General</h3>
      <ul>
        <li>
          <p
            onClick={() => {
              setOpenSetting(!openSetting);
            }}
          >
            Setting
          </p>
          {openSetting ? (
            <ul>
              <li>Manage Profile</li>
              <li>Account</li>
              <li>Help center</li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li>log out</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
