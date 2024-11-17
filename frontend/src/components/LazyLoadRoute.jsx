import { Suspense } from "react";
import { LoadingPage } from "../pages/LoadingPage";

// A helper function to wrap a lazy component with React.Suspense
export const LazyLoadRoute = (Component) => (
  <Suspense fallback={<LoadingPage />}>
    <Component />
  </Suspense>
);
