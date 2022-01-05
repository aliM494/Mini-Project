import React from "react";
import swal from "sweetalert";

const withAlert = (MainComponent) => {
  const NewComponent = (props) => {
    const Alert = (
      title = "",
      icon = "info",
      message = "",
      button = "OK",
      dangerMode = false
    ) => {
      return swal({
        title: title,
        text: message,
        icon: icon,
        buttons: button,
        dangerMode: dangerMode,
      });
    };

    return <MainComponent {...props} Alert={Alert} />;
  };

  return NewComponent;
};

export default withAlert;
