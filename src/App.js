import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Finance from "./pages/Finance/Finance";
import MyOrder from "./pages/Finance/MyOrder";
import Subscriptions from "./pages/Finance/Subscriptions";
import Chats from "./pages/Finance/Chats";
import InsuranceMyOrder from "./pages/Insurance/InsuranceMyOrder";
import Payments from "./pages/Insurance/Payments";
import Insurance from "./pages/Insurance/Insurance";
import InsuranceForm1 from "./pages/Insurance/InsuranceForm1";
import InsuranceForm2 from "./pages/Insurance/InsuranceForm2";
import MechanicDashboard from "./pages/Mechanic/MechanicDashboard";
import MechanicVerifyNow from "./pages/Mechanic/MechanicVerifyNow";
import MechanicVerifyNow2 from "./pages/Mechanic/MechanicVerifyNow2";
import MechanicVerifyNow3 from "./pages/Mechanic/MechanicVerify3";
import Submit from "./pages/Mechanic/Submit";
import RepresentativeDashboard from "./pages/Company Representative/RepresentativeDashboard";
import Appointments from "./pages/Company Representative/Appointments";
import AppointmentsDetails from "./pages/Company Representative/AppointmentsDetails";
import DealerDetailsPage from "./pages/Dealer/DealerDetailsPage";
import DealerAppointments from "./pages/Dealer/DealerAppointments";
import DealerHandoverDetails from "./pages/Dealer/DealerHandoverDetails";
import CustomerDashboard from "./pages/Customer Login/CustomerDashboard";
import MyCarListingCustomer from "./pages/Customer Login/MyCarListingCustomer";
import MyCarListingDetails from "./pages/Customer Login/MyCarListingDetails";
import InsuranceLogin from "./pages/Customer Login/InsuranceLogin";
import Setting from "./pages/Finance/Setting";
import RescheduleDialog from "./pages/Customer Login/RescheduleDialog";
import PaymentProcessMyCarListing from "./pages/Customer Login/PaymentProcessMyCarListing";
import SignUp from "./pages/OnBoarding/Signup";
import Login from "./pages/OnBoarding/Login";
import Home from "./pages/LandingPages/Home";
import Sellyourcar from "./pages/LandingPages/Sellyourcar";
import SellCarForm from "./pages/LandingPages/SellCarForm";
import SellCarFormFindMechanic from "./pages/LandingPages/SellCarFormFindMechanic";
import SellCarFormAppointmentTime from "./pages/LandingPages/SellCarFormAppointmentTime";
import SellCarFormFindDealer from "./pages/LandingPages/SellCarFormFindDealer";
import SellCarFormAppointmentDealer from "./pages/LandingPages/SellCarFormAppointmentDealer";
import SellCarFormAppointmentDealerPaymentProcess from "./pages/LandingPages/SellCarFormAppointmentDealerPaymentProcess";
import SellCarFormVerificationProcess from "./pages/LandingPages/SellCarFormVerificationProcess";
import BuyACar from "./pages/LandingPages/BuyACar";
import AccordionUsage from "./pages/LandingPages/BuyACar";
import Mechanic from "./pages/LandingPages/Mechanic";
import Dealer from "./pages/LandingPages/Dealer";
import InsuranceLandingPage from "./pages/LandingPages/InsuranceLandingPage";
import FinanceLandingPage from "./pages/LandingPages/FinanceLandingPage";
import BuyACarDetails from "./pages/LandingPages/BuyACarDetails";
import DealerDetails from "./pages/LandingPages/DealerDetails";
import BuyACarDetailsDialog from "./pages/LandingPages/BuyACarDetailsDialog";
import { useRoleContext } from "./Context/RoleContext";
import DealerDashboard from "./pages/Dealer/DealerDashboard";
import Selcartopublic from "./pages/LandingPages/Selcartopublic";
import Info from "./pages/Customer Login/Info";
import HandoverAppointment from "./pages/Customer Login/HandoverAppointment";
import MechanicAppointments from "./pages/Mechanic/MechanicAppointments";
import VerficationProfile from "./pages/Company Representative/VerficationProfile";
import UploadDocuments from "./pages/Company Representative/UploadDocuments";
import VerificationInProgress from "./pages/Company Representative/VerificationInProgress";
import Verification from "./pages/Finance/Verification";
import VerificationinProcess from "./pages/Finance/VerificationinProcess";
import ClaimNow from "./pages/Customer Login/ClaimNow";
import MechanicVerification from "./pages/Customer Login/MechanicVerification";
import DealerVerification from "./pages/Customer Login/DealerVerification";
import InsuranceDetails from "./pages/Customer Login/InsuranceDetails";
import Settings from "./pages/Customer Login/Settings";
import MyOrderLogin from "./pages/Customer Login/MyOrdersLogin";
import DealerVerifyNow from "./pages/Dealer/DealerVerifyNow";
import DealerVerifyNow2 from "./pages/Dealer/DealerVerifyNow2";
import DealerVerifyNow3 from "./pages/Dealer/DealerVerify3";
import InsuranceActiveDetail from "./pages/Customer Login/InsuranceActiveDetail";
import InsuranceFormCompany from "./pages/Company Representative/InsuranceFormCompany";
import UploadDocumentsCompany from "./pages/Company Representative/UploadDocumentsCompany";
import DealerDetailsCompany from "./pages/Company Representative/DealerDetailsCompany";
import InsuranceChats from "./pages/Insurance/InsuranceChats";
import InsuranceSubscriptions from "./pages/Insurance/InsuranceSubscriptions";
import NewRequests from "./pages/Insurance/NewRequests";
import InsuranceVerification from "./pages/Insurance/InsuranceVerification";
import VerificationForm from "./pages/Insurance/VerificationForm";
import InsuranceVerificationInProgress from "./pages/Insurance/InsuranceVerificationInProgress";
import MechanicVerificationPage from "./pages/Mechanic/MechanicVerification";
import MechanicVerificationForm from "./pages/Mechanic/MechanicVerificationForm";
import MechanicVerificationInProgress from "./pages/Mechanic/MechanicVerificationInProgress";
import MechanicSubscriptions from "./pages/Mechanic/MechanicSubscriptions";
import MechanicChats from "./pages/Mechanic/MechanicChats";
import MechanicPayments from "./pages/Mechanic/MechanicPayments";
import MechanicNewRequests from "./pages/Mechanic/MechanicNewRequests";
import RepresentativeVerificationPage from "./pages/Company Representative/RepresentativeVerification";
import RepresentativeChats from "./pages/Company Representative/RepresentativeChats";
import RepresentativePayments from "./pages/Company Representative/RepresentativePayments";
import RepresentativeSubscriptions from "./pages/Company Representative/RepresentativeSubscriptions";
import DealerVerificationPage from "./pages/Dealer/DealerVerificationPage";
import DealerVerificationForm from "./pages/Dealer/DealerVerificationForm";
import DealerVerificationInProgress from "./pages/Dealer/DealerVerificationInProgress";
import DealerNewRequests from "./pages/Dealer/DealerNewRequests";
import DealerChats from "./pages/Dealer/DealerChats";
import DealerSubscriptions from "./pages/Dealer/DealerSubscriptions";
import DealerPayments from "./pages/Dealer/DealerPayments";
import CustomerVerificationPage from "./pages/Customer Login/CustomerVerificationPage";
import CustomerVerificationForm from "./pages/Customer Login/CustomerVerificationForm";
import CustomerVerificationInProgress from "./pages/Customer Login/CustomerVerificationInProgress";
import RequireAuth from "./components/RequireAuth";
import Help from "./pages/Finance/Help";
import InsuranceHelp from "./pages/Insurance/Help";
import MechanicHelp from "./pages/Mechanic/Help";
import RepresentativeHelp from "./pages/Company Representative/Help";
import CustomerHelp from "./pages/Customer Login/Help";
import DealerHelp from "./pages/Dealer/Help";
import FinanceSettings from "./pages/Finance/Settings";
import InsuranceSettings from "./pages/Insurance/Settings";
import MechanicSettings from "./pages/Mechanic/Settings";
import RepresentativeSettings from "./pages/Company Representative/Settings";
import DealerSettings from "./pages/Dealer/Settings";
import CustomerChats from "./pages/Customer Login/CustomerChats";
import CustomerPayments from "./pages/Customer Login/CustomerPayments";
import ContactUs from "./pages/LandingPages/ContactUs";
import ForgotPassword from "./pages/OnBoarding/ForgotPassword";
import CreateNewPassword from "./pages/OnBoarding/CreateNewPassword";
import ParentSellCar from "./pages/LandingPages/ParentSellCar";

// export const Layout = () => {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div className='w-full flex flex-col xl:grid xl:grid-cols-12'>
//       <div className='w-full xl:col-span-12 flex flex-col'>
//         <Navbar2 />
//       </div>
//       <div className='xl:hidden px-5'>
//         <DropdownSidebar />
//       </div>
//       <div className='hidden xl:block xl:col-span-2 '>
//         <Sidebar />
//       </div>
//       <main className='col-span-10 p-4'>
//         <Outlet />
//       </main>
//     </div>
//   )
// }

function App() {
  const { role } = useRoleContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: '/create-new-password',
      element: <CreateNewPassword/>
    },

    // Financeeeeeeeeeeeeeeeeeeee
    {
      path: "/finance",
      element: <RequireAuth allowedRoles={"FINANCE"} />,
      children: [
        {
          path: "verification",
          element: <Verification />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "verification-process",
          element: <VerificationinProcess />,
        },
        {
          path: "finance",
          element: <Finance />, //Dashboard
        },
        {
          path: "my-orders",
          element: <MyOrder />,
        },
        {
          path: "subscriptions",
          element: <Subscriptions />,
        },

        {
          path: "chats",
          element: <Chats />,
        },
        {
          path: 'finance-help',
          element: <Help/>
        },
        {
          path: 'finance-setting',
          element: <FinanceSettings/>
        }
      ],
    },

    // Insuranceeeeeeeeeeeeeeeeeeeeeeeeeeeee
    {
      path: "/insurance",
      element: <RequireAuth allowedRoles={"INSURANCE"} />,
      children: [
        {
          path: "verification",
          element: <InsuranceVerification />,
        },
        {
          path: "verification-form",
          element: <VerificationForm />,
        },
        {
          path: "verification-in-progress",
          element: <InsuranceVerificationInProgress />,
        },
        {
          path: "insurance",
          element: <Insurance />, //Dashboard
        },
        {
          path: "insurance-my-order",
          element: <InsuranceMyOrder />,
        },
        {
          path: "new-requests",
          element: <NewRequests />,
        },
        {
          path: "insurance-form1",
          element: <InsuranceForm1 />,
        },
        {
          path: "insurance-form2",
          element: <InsuranceForm2 />,
        },
        {
          path: "insurance-payments",
          element: <Payments />,
        },
        {
          path: "insurance-chat",
          element: <InsuranceChats />,
        },
        {
          path: "insurance-subscriptions",
          element: <InsuranceSubscriptions />,
        },
        {
          path: 'insurance-help',
          element: <InsuranceHelp/>
        },
        {
          path: 'insurance-setting',
          element: <InsuranceSettings/>
        }
      ],
    },
    //  Mechaniccccccccccccccccccccccccccccccc
    {
      path: "/mechanic",
      element: <RequireAuth allowedRoles={"MECHANIC"} />,
      children: [
        {
          path: "verification",
          element: <MechanicVerificationPage />,
        },
        {
          path: "verification-form",
          element: <MechanicVerificationForm />,
        },
        {
          path: "verification-in-progress",
          element: <MechanicVerificationInProgress />,
        },
        {
          path: "mechanic-dashboard",
          element: <MechanicDashboard />,  //Dashboard
        },
        {
          path: "mechanic-verify-now",
          element: <MechanicVerifyNow />,
        },
        {
          path: "mechanic-verify-now2",
          element: <MechanicVerifyNow2 />,
        },
        {
          path: "mechanic-verify-now3",
          element: <MechanicVerifyNow3 />,
        },
        {
          path: "mechanic-appointments",
          element: <MechanicAppointments />,
        },
        {
          path: "mechanic-new-requests",
          element: <MechanicNewRequests />,
        },
        {
          path: "mechanic-subscriptions",
          element: <MechanicSubscriptions />,
        },
        {
          path: "mechanic-chats",
          element: <MechanicChats />,
        },
        {
          path: "mechanic-payments",
          element: <MechanicPayments />,
        },
        {
          path: 'mechanic-setting',
          element: <MechanicSettings/>
        },
        {
          path: "submit",
          element: <Submit />,
        },
        {
          path: 'mechanic-help',
          element: <MechanicHelp/>
        }
      ],
    },

    // Representativeeeeeeeeeeeeeeeeeeeeeeeeeeee
    {
      path: "/representative",
      element: <RequireAuth allowedRoles={"REPRESENTATIVE"} />,
      children: [
        {
          path: "verification",
          element: <RepresentativeVerificationPage />,
        },
        {
          path: "verification-profile",
          element: <VerficationProfile />,
        },
        {
          path: "upload-documents",
          element: <UploadDocuments />,
        },
        {
          path: "verification-in-progress",
          element: <VerificationInProgress />,
        },
        {
          path: "representative-dashboard",
          element: <RepresentativeDashboard />,  //Dashboard
        },
        {
          path: "appointments",
          element: <Appointments />,
        },
        {
          path: "representative-chats",
          element: <RepresentativeChats />,
        },
        {
          path: "appointments-details",
          element: <AppointmentsDetails />,
        },
        {
          path: "dealer-details-company",
          element: <DealerDetailsCompany />,
        },
        {
          path: "insurance-form-company",
          element: <InsuranceFormCompany />,
        },
        {
          path: "upload-documents-company",
          element: <UploadDocumentsCompany />,
        },
        {
          path: "representative-payments",
          element: <RepresentativePayments />,
        },
        {
          path: 'representative-setting',
          element: <RepresentativeSettings/>
        },
        {
          path: "representative-subscriptions",
          element: <RepresentativeSubscriptions />,
        },
        {
          path: 'representative-help',
          element: <RepresentativeHelp/>
        }
      ],
    },

    // Dealerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    {
      path: "/dealer",
      element: <RequireAuth allowedRoles={"DEALER"} />,
      children: [
        {
          path: "verification",
          element: <DealerVerificationPage />,
        },
        {
          path: "verification-form",
          element: <DealerVerificationForm />,
        },
        {
          path: "verification-in-progress",
          element: <DealerVerificationInProgress />,
        },
        {
          path: "dealer-dashboard",
          element: <DealerDashboard />,  //Dashboard
        },
        {
          path: "dealer-detail-page",
          element: <DealerDetailsPage />,
        },
        {
          path: "dealer-appointments",
          element: <DealerAppointments />,
        },
        {
          path: "dealer-new-requests",
          element: <DealerNewRequests />,
        },
        {
          path: "dealer-chats",
          element: <DealerChats />,
        },
        {
          path: "dealer-subscriptions",
          element: <DealerSubscriptions />,
        },
        {
          path: "dealer-payments",
          element: <DealerPayments />,
        },
        {
          path: "dealer-handover-details",
          element: <DealerHandoverDetails />,
        },
        {
          path: "dealer-verify",
          element: <DealerVerifyNow />,
        },
        {
          path: "dealer-verify2",
          element: <DealerVerifyNow2 />,
        },
        {
          path: "dealer-verify3",
          element: <DealerVerifyNow3 />,
        },
        {
          path: 'dealer-help',
          element: <DealerHelp/>
        },
        {
          path: 'dealer-setting',
          element: <DealerSettings/>
        }
      ],
    },

    // CustomerLoginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
    {
      path: "/customer",
      element: <RequireAuth allowedRoles={"INDIVIDUAL"} />,
      children: [
        {
          path: "customer-verification-page",
          element: <CustomerVerificationPage />,
        },
        {
          path: "customer-verification-form",
          element: <CustomerVerificationForm />,
        },
        {
          path: "customer-verification-in-progress",
          element: <CustomerVerificationInProgress />,
        },
        {
          path: "customer-dashboard",
          element: <CustomerDashboard />,   //Dashboard
        },
        {
          path: "customer-myorders-login",
          element: <MyOrderLogin />,
        },
        {
          path: "customer-myCar-listing",
          element: <MyCarListingCustomer />,
        },
        {
          path: 'customer-chats',
          element: <CustomerChats/>
        },
        {
          path: 'customer-payments',
          element: <CustomerPayments/>
        },
        {
          path: "mycar-listing-details",
          element: <MyCarListingDetails />,
        },
        {
          path: "claim-now",
          element: <ClaimNow />,
        },
        {
          path: "insurance-login",
          element: <InsuranceLogin />,
        },
        {
          path: "insurance-details",
          element: <InsuranceDetails />,
        },
        {
          path: "insurance-active-detail",
          element: <InsuranceActiveDetail />,
        },
        {
          path: "customer-setting",
          element: <Settings />,
        },
        {
          path: "reschedule-dialog",
          element: <RescheduleDialog />,
        },
        {
          path: "payment-process-mycar-listing",
          element: <PaymentProcessMyCarListing />,
        },
        {
          path: "mechanic-verification",
          element: <MechanicVerification />,
        },
        {
          path: "dealer-verification",
          element: <DealerVerification />,
        },
        {
          path: 'customer-help',
          element: <CustomerHelp/>
        }
      ],
    },



    {
      path: "/sellyourcar",
      children: [
        {
          path: "",
          element: <Sellyourcar />,
        },
        {
          path: "form",
          element: <SellCarForm />, // Wheel Hub
        },
        {
          path: "sel-car-to-public",
          element: <Selcartopublic />, // Public Place
        },
        {
          path: "find-mechanic",
          element: <SellCarFormFindMechanic />,
        },
        {
          path: "find-dealer",
          element: <SellCarFormFindDealer />,
        },
        {
          path: "appointment",
          element: <SellCarFormAppointmentTime />,
        },
        {
          path: "dealer-appointment-form",
          element: <SellCarFormAppointmentDealer />,
        },
        {
          path: "appointment-payment-process",
          element: <SellCarFormAppointmentDealerPaymentProcess />,
        },
        {
          path: "verification-process",
          element: <SellCarFormVerificationProcess />,
        },
      ],
    },


    {
      path: "buy-a-car",
      element: <AccordionUsage />,
    },
    {
      path: "mechanic-page",
      element: <Mechanic />,
    },
    {
      path: "dealer-page",
      element: <Dealer />,
    },
    {
      path: "insurance-landing-page",
      element: <InsuranceLandingPage />,
    },
    {
      path: "finances",
      element: <FinanceLandingPage />,
    },
    {
      path: 'contact-us',
      element: <ContactUs/>
    },
    {
      path: "buy-a-car-details",
      element: <BuyACarDetails />,
    },
    {
      path: "details",
      element: <DealerDetails />,
    },
    {
      path: "buy-a-car-details-dialog",
      element: <BuyACarDetailsDialog />,
    },

    {
      path: "info",
      element: <Info />,
    },
    {
      path: "handover-appointment",
      element: <HandoverAppointment />,
    },

    // for individual
    // {
    //   path: "/dashboard",
    //   // element: <Layout />,
    //   children: [
    //     {
    //       path: "",

    //       element:
    //         role === "Individual" ? (
    //           <CustomerDashboard />
    //         ) : role === "Dealer" ? (
    //           <DealerDashboard />
    //         ) : role === "Mechanic" ? (
    //           <MechanicDashboard />
    //         ) : role === "Insurance" ? (
    //           <Insurance />
    //         ) : role === "Company Representative" ? (
    //           <RepresentativeDashboard />
    //         ) : role === "Finance" ? (
    //           <Verification />
    //         ) : (
    //           ""
    //         ),
    //     },

    //     {
    //       path:
    //         role === "Individual"
    //           ? "myorder"
    //           : role === "Dealer"
    //           ? "myorder"
    //           : role === "Mechanic"
    //           ? "appointments"
    //           : role === "Insurance"
    //           ? "myorder"
    //           : role === "Finance"
    //           ? "myorder"
    //           : "",
    //       element:
    //         role === "Individual" ? (
    //           <MyOrder />
    //         ) : role === "Dealer" ? (
    //           <MyOrder />
    //         ) : role === "Mechanic" ? (
    //           <MyOrder />
    //         ) : role === "Insurance" ? (
    //           <InsuranceMyOrder />
    //         ) : role === "Finance" ? (
    //           <MyOrder />
    //         ) : (
    //           ""
    //         ),
    //     },
    //     {
    //       path:
    //         role === "Individual"
    //           ? "carListings"
    //           : role === "Dealer"
    //           ? "newRequest"
    //           : role === "Mechanic"
    //           ? "newRequest"
    //           : role === "Insurance"
    //           ? "newRequest"
    //           : role === "Finance"
    //           ? "newRequest"
    //           : "",
    //       element:
    //         role === "Individual" ? (
    //           <MyCarListingCustomer />
    //         ) : role === "Dealer" ? (
    //           <DealerAppointments />
    //         ) : role === "Mechanic" ? (
    //           <MyOrder />
    //         ) : role === "Insurance" ? (
    //           <MyOrder />
    //         ) : role === "Finance" ? (
    //           <Finance />
    //         ) : (
    //           ""
    //         ),
    //     },
    //   ],
    // },


  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
