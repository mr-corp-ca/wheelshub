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
import Setting from "./pages/Customer Login/Setting";
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
import { Navbar } from "./components/Navbar"
import { Sidebar } from './components/Sidebar'
import { useEffect } from "react";
import { DropdownSidebar } from "./components/DropdownSidebar";
import Navbar2 from "./components/Navbar2";
import { useRoleContext } from "./Context/RoleContext";
import DealerDashboard from "./pages/Dealer/DealerDashboard";
import Employees from "./pages/Insurance/Employees";


export const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='w-full flex flex-col xl:grid xl:grid-cols-12'>
      <div className='w-full xl:col-span-12 flex flex-col'>
        <Navbar2 />
      </div>
      <div className='xl:hidden'>
        <DropdownSidebar />
      </div>
      <div className='hidden xl:block xl:col-span-3 lg:ml-[10%] lg:mr-20'>
        <Sidebar />
      </div>
      <main className='col-span-9 p-4'>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  const { role } = useRoleContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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
      path: "sellyourcar",
      children: [
        {
          path: "",
          element: <Sellyourcar />,
        },
        {
          path: "form",
          element: <SellCarForm />,
        },
        {
          path: "mechanic",
          element: <SellCarFormFindMechanic />
        },
        {
          path: "appointment",
          element: <SellCarFormAppointmentTime />
        },
        {
          path: "findDealer",
          element: <SellCarFormFindDealer />
        },
        {
          path: "dealerAppointmentForm",
          element: <SellCarFormAppointmentDealer />
        },
        {
          path: "appointmentPaymentProcess",
          element: <SellCarFormAppointmentDealerPaymentProcess />
        },
        {
          path: "verificationProcess",
          element: <SellCarFormVerificationProcess />
        },
      ]
    },
    {
      path: "buyacar",
      element: <AccordionUsage />
    },
    {
      path: "mechanic",
      element: <Mechanic />
    },
    {
      path: "dealer",
      element: <Dealer />
    },
    {
      path: "insurance",
      element: <InsuranceLandingPage />
    },
    {
      path: "finances",
      element: <FinanceLandingPage />
    },
    {
      path: "buyacardetails",
      element: <BuyACarDetails />
    },
    {
      path: "details",
      element: <DealerDetails />
    },
    {
      path: "buyacardetailsdialog",
      element: <BuyACarDetailsDialog />
    },
    // for individual
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          path: "",
          element:
            role === "Individual" ? <CustomerDashboard /> :
              role === "Dealer" ? <DealerDashboard /> :
                role === "Mechanic" ? <MechanicDashboard /> :
                  role === "Insurance" ? <Insurance /> :
                    role === "Finance" ? <Finance /> : ""
        },

        {
          path:
            role === "Individual" ? "myorder" :
              role === "Dealer" ? "myorder" :
                role === "Mechanic" ? "appointments" :
                  role === "Insurance" ? "myorder" :
                    role === "Finance" ? "myorder" : "",
          element:
            role === "Individual" ? <MyOrder /> :
              role === "Dealer" ? <DealerHandoverDetails /> :
                role === "Mechanic" ? <MyOrder /> :
                  role === "Insurance" ? <InsuranceMyOrder /> :
                    role === "Finance" ? <MyOrder /> : "",
        },
        {
          path:
            role === "Individual" ? "carListings" :
              role === "Dealer" ? "newRequest" :
                role === "Mechanic" ? "newRequest" :
                  role === "Insurance" ? "newRequest" :
                    role === "Finance" ? "newRequest" : "",
          element:
            role === "Individual" ? <MyCarListingCustomer /> :
              role === "Dealer" ? <DealerAppointments /> :
                role === "Mechanic" ? <MyOrder /> :
                  role === "Insurance" ? <MyOrder /> :
                    role === "Finance" ? <Finance /> : ""
        },
        {
          path: "subscriptions",
          element: <Subscriptions />
        },
        {
          path: "chats",
          element: <Chats />
        },
        {
          path: "insurancemyorder",
          element: <InsuranceMyOrder />
        },
        {
          path: "payments",
          element: <Payments />
        },
        {
          path: "settings",
          element: <Setting />
        },


        // For 
        {
          path: "insurance",
          element: <Insurance />
        },
        {
          path: "insuranceform1",
          element: <InsuranceForm1 />
        },
        {
          path: "insuranceform2",
          element: <InsuranceForm2 />
        },
        {
          path: "mechanicdashboard",
          element: <MechanicDashboard />
        },
        {
          path: "mechanicverifynow",
          element: <MechanicVerifyNow />
        },
        {
          path: "mechanicverifynow2",
          element: <MechanicVerifyNow2 />
        },
        {
          path: "mechanicverifynow3",
          element: <MechanicVerifyNow3 />
        },
        {
          path: "submit",
          element: <Submit />
        },
        {
          path: "representativedashboard",
          element: <RepresentativeDashboard />
        },
        {
          path: "appointments",
          element: <Appointments />
        },
        {
          path: "appointmentsdetails",
          element: <AppointmentsDetails />
        },
        {
          path: "dealerdetailpage",
          element: <DealerDetailsPage />
        },
        {
          path: "dealerappointments",
          element: <DealerAppointments />
        },
        {
          path: "dealerhandoverdetails",
          element: <DealerHandoverDetails />
        },
        {
          path: "customerdashboard",
          element: <CustomerDashboard />
        },
        {
          path: "myCarlistingcustomer",
          element: <MyCarListingCustomer />
        },
        {
          path: "mycarlistingdetails",
          element: <MyCarListingDetails />
        },
        {
          path: "insurancelogin",
          element: <InsuranceLogin />
        },
        {
          path: "settinglogin",
          element: <Setting />
        },
        {
          path: "rescheduledialog",
          element: <RescheduleDialog />
        },
        {
          path: "paymentprocessmycarlisting",
          element: <PaymentProcessMyCarListing />
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
