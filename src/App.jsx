import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import Graph from "./pages/graph/Graph";
import Table from "./pages/table/Table";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/login/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchUpdateData,
  fetchUpdate2Data,
  fetchUpdate3Data,
  fetchUpdate4Data,
  fetchUpdate5Data,
  fetchUpdate6Data,
  fetchUpdate7Data,
  fetchUpdate8Data,
  fetchUpdate9Data,
  fetchUpdate10Data,
} from "../src/redux/update/update.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUpdateData());
      dispatch(fetchUpdate2Data());
      dispatch(fetchUpdate3Data());
      dispatch(fetchUpdate4Data());
      dispatch(fetchUpdate5Data());
      dispatch(fetchUpdate6Data());
      dispatch(fetchUpdate7Data());
      dispatch(fetchUpdate8Data());
      dispatch(fetchUpdate9Data());
      dispatch(fetchUpdate10Data());
    };

    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

//   console.log("BusBar1 : ", busbar1);
//   console.log("BusBar2 : ", busbar2);
//   console.log("BusBar3 : ", busbar3);
//   console.log("BusBar4 : ", busbar4);
//   console.log("BusBar5 : ", busbar5);
//   console.log("BusBar6 : ", busbar6);
//   console.log("BusBar7 : ", busbar7);
//   console.log("BusBar8 : ", busbar8);
//   console.log("BusBar9 : ", busbar9);
//   console.log("BusBar10 : ", busbar10);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="graph" element={<Graph />} />
            <Route path="table" element={<Table />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
