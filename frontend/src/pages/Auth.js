import { lazy, Suspense } from "react";
import { LoadingPage } from "./LoadingPage";

// Lazy load the LoginForm component
const LoginForm = lazy(() => import("../components/LoginForm"));

export const AuthPage = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <LoginForm />
    </Suspense>
  );
};
