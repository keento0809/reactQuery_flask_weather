import { useRouteError } from "react-router-dom";
import BasicButton from "../components/buttons/BasicButton";
import GoogleLoginButton from "../components/buttons/GoogleLoginButton";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  const error: any = useRouteError();

  const handleBackToMainPage = () => {
    console.log("jumping to main page");
    // TODO: add route to main page here
  };

  return (
    <div className={styles["errorPage"]}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={styles["errorPage_errorMsg"]}>
          <i>{error.statusText || error.message}</i>
        </p>
        <BasicButton onClick={handleBackToMainPage} />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default ErrorPage;
