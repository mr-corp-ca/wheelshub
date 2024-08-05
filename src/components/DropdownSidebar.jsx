import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  AdsIcon,
  AuctionIcon,
  ClaimIcon,
  DashboardIcon,
  InvestmentsIcon,
  LogoutIcon,
  MyBidsIcon,
  SettingsIcon,
  SupportIcon,
  WalletIcon,
  MyOrders,
  NewRequests,
  Subscriptions,
  Insurance,
} from "../assets/svgs/SidebarSvg";
import { useRoleContext } from "../Context/RoleContext";
import IMAGES from "../assets/IMAGES";

export const DropdownSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();
  const { pathname } = useLocation();
  const { role } = useRoleContext();

  const dropdownData = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "My orders",
      icon: <MyOrders />,
      navigate: "/auction",
    },
    {
      name: "My Bids",
      icon: <MyBidsIcon />,
      navigate: "/mybids",
    },
    {
      name: "Investments",
      icon: <InvestmentsIcon />,
      navigate: "/investments",
    },
    {
      name: "Ads",
      icon: <AdsIcon />,
      navigate: "/ads",
    },
    {
      name: "Claim",
      icon: <ClaimIcon />,
      navigate: "/claim",
    },
    {
      name: "Wallet",
      icon: <WalletIcon />,
      navigate: "/wallet",
    },
    {
      name: "Help & Support",
      icon: <SupportIcon />,
      navigate: "/helpAndSupport",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/settings",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const individualSideBarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "My orders",
      icon: <MyOrders />,
      navigate: "/dashboard/myorderslogin",
    },
    {
      name:
        role === "Individual"
          ? "Car Listing"
          : role === "Dealer"
            ? "New requests"
            : role === "Mechanic"
              ? "New requests"
              : role === "Insurance"
                ? "New requests"
                : role === "Finance"
                  ? "New requests"
                  : "",
      icon: <NewRequests />,
      navigate:
        role === "Dealer" ? "/dashboard/newRequest" : "/dashboard/carListings",
    },
    {
      name: "Insurance",
      icon: <Insurance />,
      navigate: "/dashboard/insurancelogin",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },

    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settinglogin",
    },

    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const dealerSideBarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "Appointments",
      icon: <MyOrders />,
      navigate: "/dashboard/newRequest",
    },

    {
      name: "New requests",
      icon: <NewRequests />,
      navigate: "/dashboard/myorder",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },

    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settings",
    },

    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const mechanicSideBarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "Appointments",
      icon: <MyOrders />,
      navigate: "/dashboard/mechanicappointments",
    },
    {
      name: "New requests",
      icon: <NewRequests />,
      navigate: "/dashboard/newRequest",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },

    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settings",
    },

    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const insuranceSideBarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "My orders",
      icon: <MyOrders />,
      navigate: "/dashboard/myorder",
    },
    {
      name: "New Requests",
      icon: <NewRequests />,
      navigate: "/dashboard/newRequest",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },
    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settings",
    },

    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const financeSideBarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "My orders",
      icon: <MyOrders />,
      navigate: "/dashboard/myorder",
    },
    {
      name: "New Requests",
      icon: <NewRequests />,
      navigate: "/dashboard/newRequest",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },

    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settings",
    },

    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  const companyRepresentativeSidebarData = [
    {

      name: "Dashboard",
      icon: <DashboardIcon />,
      navigate: "/dashboard",
    },
    {
      name: "Appointments",
      icon: <MyOrders />,
      navigate: "/dashboard/appointments",
    },
    {
      name: "Subscriptions",
      icon: <Subscriptions />,
      navigate: "/dashboard/subscriptions",
    },
    {
      name: "Chats",
      icon: <AdsIcon />,
      navigate: "/dashboard/chats",
    },
    {
      name: "Payments",
      icon: <ClaimIcon />,
      navigate: "/dashboard/payments",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      navigate: "/dashboard/settinglogin",
    },
    {
      name: "Help",
      icon: <SupportIcon />,
      navigate: "/",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      navigate: "/",
    },
  ];

  return (
    <div className="w-full bg-white py-2 xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`!text-custom-blue w-full bg-custom-blue bg-opacity-10 border border-custom-blue focus:ring-1 focus:outline-none focus:ring-custom-blue font-base-2 rounded-xl text-base px-4 py-4 text-center  items-center justify-between inline-flex xl:hidden  `}
        type="button"
      >
        <div className="flex flex-row gap-2 items-center text-base ">
          {React.cloneElement(
            (role === "Individual"
              ? individualSideBarData
              : role === "Dealer"
                ? dealerSideBarData
                : role === "Mechanic"
                  ? mechanicSideBarData
                  : role === "Insurance"
                    ? insuranceSideBarData
                    : role === "Company Representative"
                      ? companyRepresentativeSidebarData
                      : role === "Finance"
                        ? financeSideBarData
                        : individualSideBarData
            ).filter((item) => location.pathname.includes(item.navigate))[0]
              ?.icon,
            { color: "#6F9CFF" }
          )}
          {
            (role === "Individual"
              ? individualSideBarData
              : role === "Dealer"
                ? dealerSideBarData
                : role === "Mechanic"
                  ? mechanicSideBarData
                  : role === "Insurance"
                    ? insuranceSideBarData
                    : role === "Company Representative"
                      ? companyRepresentativeSidebarData
                      : role === "Finance"
                        ? financeSideBarData
                        : individualSideBarData
            ).filter((item) => location.pathname.includes(item.navigate))[0]
              ?.name
          }
        </div>
        <svg
          className="w-2.5 h-2.5 ms-3 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* <!-- Dropdown menu-- > */}
      <div
        id="dropdown"
        className={`z-10 ${isOpen ? " " : " hidden "
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute`}
      >
        <ul
          className="py-2 text-base text-gray-4 space-y-2 "
          aria-labelledby="dropdownDefaultButton"
        >
          {(role === "Individual"
            ? individualSideBarData
            : role === "Dealer"
              ? dealerSideBarData
              : role === "Mechanic"
                ? mechanicSideBarData
                : role === "Insurance"
                  ? insuranceSideBarData
                  : role === "Company Representative"
                    ? companyRepresentativeSidebarData
                    : role === "Finance"
                      ? financeSideBarData
                      : individualSideBarData
          ).map((item, index) => (
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={item?.navigate}
                className={({ isActive }) =>
                  `  ${isActive
                    ? " text-custom-blue font-semibold bg-custom-blue bg-opacity-10 "
                    : " text-gray-4  "
                  } block px-4 py-2 hover:bg-custom-blue hover:bg-opacity-10  items-center text-base font-poppins`
                }
              >
                {({ isActive }) => (
                  <div className="flex flex-row gap-4 items-center">
                    {React.cloneElement(item.icon, {
                      color: isActive ? "#6F9CFF" : "#828282",
                    })}
                    {item?.name}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
