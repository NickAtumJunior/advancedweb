import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DealerPortal from "./Pages/Product/DealerPortal";
import AssesmentPortal from './Pages/Product/AssesmentPortal';
import BarcodeApplication from './Pages/Product/BarcodeApplication';
import DispatchPlanner from './Pages/Product/DispatchPlanner';
import EProcurement from './Pages/Product/EProcurement';
import HiringApplication from './Pages/Product/HiringApplication';
import SupplierPortal from './Pages/Product/SupplierPortal';
import TenderManagement from './Pages/Product/TenderManagement';
import TicketManagement from './Pages/Product/TicketManagement';
import TimesheetApplication from "./Pages/Product/TimesheetApplication";
import ERP from './Pages/Services/ERP';
import Api from "./Pages/Services/Api";
import Outsourcing from "./Pages/Services/Outsourcing";
import Customercentric from "./Pages/Services/Customercentric";
import DataQualityMdm from "./Pages/Solutions/DataQualityMdm";
import Ecommerce from "./Pages/Solutions/Ecommerce";
import ITmanagedService from "./Pages/Solutions/ITmanagedService";
import ApplicationMigration from "./Pages/Solutions/ApplicationMigration";
import Oracle from "./Pages/Platforms/Oracle";
import ProductDevelopment from "./Pages/Platforms/ProductDevelopment";
import Cloud from "./Pages/Platforms/Cloud";
import SAP from "./Pages/Platforms/SAP";
import AerospaceAndDefense from "./Pages/Verticals/AerospaceAndDefense";
import Automative from "./Pages/Verticals/Automotive";
import BankingAndCapitalMarkets from "./Pages/Verticals/BankingAndCapitalMarkets";
import EnergyAndUtilities from "./Pages/Verticals/EnergyAndUtilities";
import Healthcare from "./Pages/Verticals/Healthcare";
import HospitalityAndTravel from "./Pages/Verticals/HospitalityAndTravel";
import Insurance from "./Pages/Verticals/Insurance";
import Manufacturing from "./Pages/Verticals/Manufacturing";
import MediaAndentertainment from "./Pages/Verticals/MediaAndentertainment";
import Publicsector from "./Pages/Verticals/Publicsector";
import Realestate from "./Pages/Verticals/Realestate";
import RetailorconsumerProd from "./Pages/Verticals/ReatilorconsumerProd";
import Company from "./Pages/Company";


function App() {
  return (
    <BrowserRouter basename="/FocusR">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/dealerportal" element={<DealerPortal />} />
        <Route path="/products/assessmentportal" element={<AssesmentPortal />} />
        <Route path="/products/barcodeapplication" element={<BarcodeApplication />} />
        <Route path="/products/dispatchplanner" element={<DispatchPlanner />} />
        <Route path="/products/eprocurement" element={<EProcurement />} />
        <Route path="/products/hiringapplication" element={<HiringApplication />} />
        <Route path="/products/supplierportal" element={<SupplierPortal />} />
        <Route path="/products/tendermanagement" element={<TenderManagement />} />
        <Route path="/products/ticketmanagement" element={<TicketManagement />} />
        <Route path="/products/timehseetapplication" element={<TimesheetApplication />} />
        <Route path="/services/ERP-Service" element={<ERP />} />
        <Route path="/services/API-Service" element={<Api />} />
        <Route path="/services/Out-Sourcing" element={<Outsourcing />} />
        <Route path="/services/Customer-centric" element={<Customercentric />} />
        <Route path="/solutions/Dataquality and MDM" element={<DataQualityMdm />} />
        <Route path="/solutions/ECommerce(B2B,B2C)" element={<Ecommerce />} />
        <Route path="/solutions/IT-Managed Services" element={<ITmanagedService />} />
        <Route path="/solutions/Application Migration" element={<ApplicationMigration />} />
        <Route path="/platforms/Oracle" element={<Oracle />} />
        <Route path="/platforms/SAP" element={<SAP />} />
        <Route path="/platforms/Cloud" element={<Cloud />} />
        <Route path="/platforms/Product Development" element={<ProductDevelopment />} />
        <Route path="/verticals/Aerospace And Defense" element={<AerospaceAndDefense />} />
        <Route path="/verticals/Automative" element={<Automative />} />
        <Route path="/verticals/Banking And Capital Markets" element={<BankingAndCapitalMarkets />} />
        <Route path="/verticals/Energy And Utilities" element={<EnergyAndUtilities />} />
        <Route path="/verticals/Healthcare" element={<Healthcare />} />
        <Route path="/verticals/Hospitality And Travel" element={<HospitalityAndTravel />} />
        <Route path="/verticals/Insurance" element={<Insurance />} />
        <Route path="/verticals/Manufacturing" element={<Manufacturing />} />
        <Route path="/verticals/Media And Entertainment" element={<MediaAndentertainment />} />
        <Route path="/verticals/Publicsector" element={<Publicsector />} />
        <Route path="/verticals/Realestate" element={<Realestate />} />
        <Route path="/verticals/Retail Or Consumer Products" element={<RetailorconsumerProd />} />
        <Route path="/about/Company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;