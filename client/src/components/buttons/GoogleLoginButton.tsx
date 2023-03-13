import GoogleButton from "react-google-button";

const GoogleLoginButton = () => {
  return (
    <>
      <GoogleButton
        type="light" // can be light or dark
        style={{
          background: "#e6effa",
          color: "#2d3542",
        }}
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </>
  );
};

export default GoogleLoginButton;
