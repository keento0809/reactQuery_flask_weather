import { useRouteError } from "react-router-dom";
import BasicButton from "../components/buttons/BasicButton";
import styles from "./styles/errorPage.module.scss";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  const handleBackToMainPage = () => {
    console.log("jumping to main page");
    // TODO: add route to main page here
    navigate("/");
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
      </div>
    </div>
  );
};

export default ErrorPage;
