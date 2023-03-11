import { useRouteError } from "react-router-dom";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className={styles["errorPage"]}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={styles["errorPage_errorMsg"]}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
