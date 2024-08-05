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
import Setting from './pages/Finance/Setting'
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
import Sellcar from "./pages/LandingPages/Sellcar";
import InsuranceFormCompany from "./pages/Company Representative/InsuranceFormCompany";
import UploadDocumentsCompany from "./pages/Company Representative/UploadDocumentsCompany";
import DealerDetailsCompany from "./pages/Company Representative/DealerDetailsCompany";

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
      <div className='xl:hidden px-5'>
        <DropdownSidebar />
      </div>
      <div className='hidden xl:block xl:col-span-2 '>
        <Sidebar />
      </div>
      <main className='col-span-10 p-4'>
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
      path: "/sellyourcar",
      children: [
        {
          path: "",
          element: <Sellyourcar />,
        },
        {
          path: "form",
          element: <SellCarForm />,  // Wheel Hub
        },
        {
          path: "selcartopublic",
          element: <Selcartopublic/> // Public Place
        },
        {
          path: "findmechanic",
          element: <SellCarFormFindMechanic />
        },
        {
          path: "findDealer",
          element: <SellCarFormFindDealer />
        },
        {
          path: "appointment",
          element: <SellCarFormAppointmentTime />
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
      path: "mechanicpage",
      element: <Mechanic />
    },
    {
      path: "dealerpage",
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
   
    {
      path: "info",
      element: <Info/>
    },
    {
      path: "handoverappointment",
      element: <HandoverAppointment/>
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
                  role === "Company Representative" ? <RepresentativeDashboard/> :
                    role === "Finance" ? <Verification/> : ""
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
              role === "Dealer" ? <MyOrder /> :
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
          path: "finance",
          element: <Finance/>
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
          path: "setting",
          element: <Setting/>
        },
        {
          path: "verificationprocess",
          element: <VerificationinProcess/>
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
          path: "mechanicappointments",
          element: <MechanicAppointments/>
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
          path: "verificationprofile",
          element: <VerficationProfile/>
        },
        {
          path: "uploaddocuments",
          element: <UploadDocuments/>
        },
        {
          path: "verificationinprogress",
          element: <VerificationInProgress/>
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
          path: 'dealerdetailscompany',
          element: <DealerDetailsCompany/>
        },
        {
          path: 'insuranceformcompany',
          element: <InsuranceFormCompany/>
        },
        {
          path: 'uploaddocumentscompany',
          element: <UploadDocumentsCompany/>
        },
        {
          path: 'delaerdashboard',
          element: <DealerDashboard/>
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
          path: 'dealerverify',
          element:<DealerVerifyNow/>
        },
        {
          path: 'dealerverify2',
          element:<DealerVerifyNow2/>
        },
        {
          path: 'dealerverify3',
          element:<DealerVerifyNow3/>
        },
        {
          path: "customerdashboard",
          element: <CustomerDashboard />
        },
        {
          path: 'myorderslogin',
          element: <MyOrderLogin/>
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
          path: 'claimnow',
          element: <ClaimNow/>
        },
        {
          path: "insurancelogin",
          element: <InsuranceLogin />
        },
        {
          path: 'insurancedetails',
          element: <InsuranceDetails/>
        },
        {
          path: 'insuranceactivedetail',
          element: <InsuranceActiveDetail/>
        },
        {
          path: "settinglogin",
          element: <Settings />
        },
        {
          path: "rescheduledialog",
          element: <RescheduleDialog />
        },
        {
          path: "paymentprocessmycarlisting",
          element: <PaymentProcessMyCarListing />
        },
        {
          path: 'mechanicverification',
          element: <MechanicVerification/>
        },
        {
          path: 'dealerverification',
          element: <DealerVerification/>
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
