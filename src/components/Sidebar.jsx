import React from 'react'
import { AdsIcon, AuctionIcon, ClaimIcon, DashboardIcon, InvestmentsIcon, LogoutIcon, MyBidsIcon, SettingsIcon, SupportIcon, WalletIcon, MyOrders, NewRequests, Subscriptions, Insurance } from '../assets/svgs/SidebarSvg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import IMAGES from '../assets/IMAGES';
import { useRoleContext } from '../Context/RoleContext';

export const Sidebar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { role } = useRoleContext()

    const individualSideBarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "My orders",
            icon: MyOrders,
            navigate: "/dashboard/myorderslogin"
        },
        {
            name:
                role === "Individual" ? "Car Listing" :
                    role === "Dealer" ? "New requests" :
                        role === "Mechanic" ? "New requests" :
                            role === "Insurance" ? "New requests" :
                                role === "Finance" ? "New requests" : "",
            icon: NewRequests,
            navigate:
                role === "Dealer" ? "/dashboard/newRequest" : "/dashboard/carListings"
        },
        {
            name: "Insurance",
            icon: Insurance,
            navigate: '/dashboard/insurancelogin'
        },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },


        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]

    const dealerSideBarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "Appointments",
            icon: MyOrders,
            navigate: "/dashboard/newRequest"
        },
      
        {
            name: "New requests",
            icon: NewRequests,
            navigate: "/dashboard/myorder"
        },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },


        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]

    const mechanicSideBarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "Appointments",
            icon: MyOrders,
            navigate: "/dashboard/mechanicappointments"
        },
        {
            name: "New requests",
            icon: NewRequests,
            navigate: "/dashboard/newRequest"
        },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },


        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]

    const insuranceSideBarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "My orders",
            icon: MyOrders,
            navigate: "/dashboard/myorder"
        },
        {
            name: "New Requests",
            icon: NewRequests,
            navigate: "/dashboard/newRequest"
        },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },
        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]

    const financeSideBarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "My orders",
            icon: MyOrders,
            navigate: "/dashboard/myorder"
        },
        {
            name: "New Requests",
            icon: NewRequests,
            navigate: "/dashboard/newRequest"
        },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },


        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]
    const companyRepresentativeSidebarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "Appointments",
            icon: MyOrders,
            navigate: "/dashboard/appointments"
        },
        // {
        //     name: "New Requests",
        //     icon: NewRequests,
        //     navigate: "/dashboard/newRequest"
        // },
        {
            name: "Subscriptions",
            icon: Subscriptions,
            navigate: "/dashboard/subscriptions"
        },


        {
            name: "Chats",
            icon: AdsIcon,
            navigate: "/dashboard/chats"
        },
        {
            name: "Payments",
            icon: ClaimIcon,
            navigate: "/dashboard/payments"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/dashboard/settinglogin"
        },

        {
            name: "Help",
            icon: SupportIcon,
            navigate: "/"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]


    return (
        <div className='xl:flex hidden flex-col w-full  justify-start border-r'>
            {/* <div className='p-6 cursor-pointer' onClick={() => navigate("/")} >
                <img src={IMAGES.logo} alt="" className=' h-10 object-contain' />
            </div> */}

            <div className='flex flex-col  space-y-4'>
                {(role === "Individual" ? individualSideBarData :
                    role === "Dealer" ? dealerSideBarData :
                        role === "Mechanic" ? mechanicSideBarData :
                            role === "Insurance" ? insuranceSideBarData :
                            role === "Company Representative" ? companyRepresentativeSidebarData:
                                role === "Finance" ? financeSideBarData : individualSideBarData)
                    ?.map((data, index) => {
                        const IconComponent = data.icon;
                        return (
                            <NavLink
                                end
                                to={data?.navigate}
                                className={({ isActive }) => ` w-full flex lg:flex-row flex-col items-center lg:justify-start justify-center space-x-4 py-4 px-6 hover:bg-custom-blue hover:bg-opacity-10 outline-none ${isActive ? "bg-custom-blue bg-opacity-10 border-r-2 border-custom-blue" : " bg-white"}`}>
                                {({ isActive }) => (
                                    <>
                                        <IconComponent color={isActive ? "#6F9CFF" : "#828282"} />
                                        <p
                                            className={`${isActive ? "text-custom-blue" : "text-gray-4"} font-poppins font-semibold xl:text-lg text-base`}>
                                            {data?.name}
                                        </p>
                                    </>

                                )}
                            </NavLink>
                        )
                    })}

            </div>


        </div>
    )
}
