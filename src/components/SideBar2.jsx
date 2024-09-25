import React from "react";
import { useNavigate } from "react-router-dom";
import Svgs from "../assets/svgs/index.js";
import { useUserContext } from "../Context/UserProvider.jsx";




export const SideBar2 = ({ active }) => {


  const { user } = useUserContext();
  const navigate = useNavigate();



  const financeSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/finance/verification",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "My orders",
      icon: (
        <Svgs.MyOrders
          color={active === "My orders" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/finance/my-orders",
      active: active === "My orders" ? true : false,
    },
    {
      name: "Subscriptions",
      icon: (
        <Svgs.Subscriptions
          color={active === "Subscriptions" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/finance/subscriptions",
      active: active === "Subscriptions" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/finance/chats",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/finance/finance-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/finance/finance-help",
      active: active === "Help" ? true : false,
    },
  ];
  const insuranceSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/verification",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "My orders",
      icon: (
        <Svgs.MyOrders
          color={active === "My orders" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/insurance-my-order",
      active: active === "My orders" ? true : false,
    },
    {
      name: "New Requests",
      icon: (
        <Svgs.NewRequests
          color={active === "New Requests" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/new-requests",
      active: active === "New Requests" ? true : false,
    },
    {
      name: "Subscriptions",
      icon: (
        <Svgs.Subscriptions
          color={active === "Subscriptions" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/insurance-subscriptions",
      active: active === "Subscriptions" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/insurance-chat",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Payments",
      icon: (
        <Svgs.PaymentIcon
          color={active === "Payments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/insurance-payments",
      active: active === "Payments" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/insurance/insurance-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/insurance/insurance-help",
      active: active === "Help" ? true : false,
    },
  ];
  const mechanicSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/verification",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "Appointments",
      icon: (
        <Svgs.AppointmentIcon
          color={active === "Appointments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-appointments",
      active: active === "Appointments" ? true : false,
    },
    {
      name: "New Requests",
      icon: (
        <Svgs.NewRequests
          color={active === "New Requests" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-new-requests",
      active: active === "New Requests" ? true : false,
    },
    {
      name: "Subscriptions",
      icon: (
        <Svgs.Subscriptions
          color={active === "Subscriptions" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-subscriptions",
      active: active === "Subscriptions" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-chats",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Payments",
      icon: (
        <Svgs.PaymentIcon
          color={active === "Payments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-payments",
      active: active === "Payments" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/mechanic/mechanic-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/mechanic/mechanic-help",
      active: active === "Help" ? true : false,
    },
  ];
  const representativeSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/representative/verification",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "Appointments",
      icon: (
        <Svgs.AppointmentIcon
          color={active === "Appointments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/representative/appointments",
      active: active === "Appointments" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/representative/representative-chats",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Payments",
      icon: (
        <Svgs.PaymentIcon
          color={active === "Payments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/representative/representative-payments",
      active: active === "Payments" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/representative/representative-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/representative/representative-help",
      active: active === "Help" ? true : false,
    },
  ];
  const dealerSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/verification",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "Appointments",
      icon: (
        <Svgs.AppointmentIcon
          color={active === "Appointments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-appointments",
      active: active === "Appointments" ? true : false,
    },
    {
      name: "New Requests",
      icon: (
        <Svgs.NewRequests
          color={active === "New Requests" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-new-requests",
      active: active === "New Requests" ? true : false,
    },
    {
      name: "Subscriptions",
      icon: (
        <Svgs.Subscriptions
          color={active === "Subscriptions" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-subscriptions",
      active: active === "Subscriptions" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-chats",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Payments",
      icon: (
        <Svgs.PaymentIcon
          color={active === "Payments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-payments",
      active: active === "Payments" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/dealer/dealer-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/dealer/dealer-help",
      active: active === "Help" ? true : false,
    },
  ];
  const customerSideBarData = [
    {
      name: "Dashboard",
      icon: (
        <Svgs.DashboardIcon
          color={active === "Dashboard" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-dashboard",
      active: active === "Dashboard" ? true : false,
    },
    {
      name: "My orders",
      icon: (
        <Svgs.MyOrders
          color={active === "My orders" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-myorders-login",
      active: active === "My orders" ? true : false,
    },
    {
      name: "My Car listings",
      icon: (
        <Svgs.MyCarListing
          color={active === "My Car listings" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-myCar-listing",
      active: active === "My Car listings" ? true : false,
    },
    {
      name: "Insurance",
      icon: (
        <Svgs.Insurance
          color={active === "Insurance" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/insurance-login",
      active: active === "Insurance" ? true : false,
    },
    {
      name: "Chats",
      icon: (
        <Svgs.ChatIcon
          color={active === "Chats" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-chats",
      active: active === "Chats" ? true : false,
    },
    {
      name: "Payments",
      icon: (
        <Svgs.PaymentIcon
          color={active === "Payments" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-payments",
      active: active === "Payments" ? true : false,
    },
    {
      name: "Setting",
      icon: (
        <Svgs.SettingsIcon
          color={active === "Setting" ? "#6F9CFF" : "#828282"}
        />
      ),
      navigate: "/customer/customer-setting",
      active: active === "Setting" ? true : false,
    },
    {
      name: "Help",
      icon: (
        <Svgs.SupportIcon color={active === "Help" ? "#6F9CFF" : "#828282"} />
      ),
      navigate: "/customer/customer-help",
      active: active === "Help" ? true : false,
    },
  ];

  const sideBarData =
    user.role === "FINANCE"
      ? financeSideBarData
      : user.role === "INSURANCE"
      ? insuranceSideBarData
      : user.role === "MECHANIC"
      ? mechanicSideBarData
      : user.role === "REPRESENTATIVE"
      ? representativeSideBarData
      : user.role === "DEALER"
      ? dealerSideBarData
      : user.role === "INDIVIDUAL"
      ? customerSideBarData
      : "";

  const handleSideBarClick = (path) => {
    navigate(path);
  };


  return (
    <div className="flex flex-col  bg-white border-r-2 w-full h-full items-center ">
      <div className="w-full flex flex-col">
        {sideBarData.map(
          (value, index) => (
            <div
              key={index}
              onClick={() => {
                handleSideBarClick(value.navigate);
              }}
              className={`${
                value.active === true ? " bg-[#f0f4fe] border-r-2 border-custom-blue" : "bg-white"
              } py-[28px] pl-[32px] flex items-center flex-row space-x-6 w-full cursor-pointer`}
            >
              <p>{value.icon}</p>
              <p
                className={`${
                  value?.active === true
                    ? "text-custom-blue text-xl font-semibold font-poppins "
                    : "text-gray-4 text-xl font-semibold font-poppins"
                }`}
              >
                {value.name}
              </p>
            </div>
          )
        )}
      </div>

      <div
        onClick={() => {
          navigate("/");
          user.isLoggedIn = false
        }}
        className={`bg-white  cursor-pointer rounded-lg flex items-center flex-row space-x-6 pl-[32px] py-[28px] text-[#828282] w-full`}
      >
        <Svgs.Logout />
        <p className={` text-xl font-semibold font-poppins text-gray-4`}>Logout</p>
      </div>
    </div>
  );
};
