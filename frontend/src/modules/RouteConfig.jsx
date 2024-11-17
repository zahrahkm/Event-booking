import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { LazyLoadRoute } from "../components/LazyLoadRoute";
import { useLoginContext } from "./useLoginContext";

const AuthPage = lazy(() =>
  import("../pages/Auth").then((module) => ({ default: module.AuthPage }))
);
const EventsPage = lazy(() =>
  import("../pages/Events").then((module) => ({ default: module.EventsPage }))
);
const BookingsPage = lazy(() =>
  import("../pages/Bookings").then((module) => ({
    default: module.BookingsPage,
  }))
);

export const RouteConfig = () => {
  const { token, isUserLoggedIn } = useLoginContext();
  console.log(isUserLoggedIn);
  return (
    <Routes>
      {!token && <Route path="/" element={<Navigate to="/auth" />} />}
      <Route path="/auth" element={LazyLoadRoute(AuthPage)} />
      <Route path="/events" element={LazyLoadRoute(EventsPage)} />
      <Route path="/bookings" element={LazyLoadRoute(BookingsPage)} />
    </Routes>
  );
};
console.log(AuthPage);
