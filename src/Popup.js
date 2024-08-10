import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./Popup.css";

function Popup({ show, onClose }) {
  const footer = (
    <div>
      {/* Submit and delete buttons */}
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={onClose}
        className="p-button-secondary"
      />
      <Button label="Submit" icon="pi pi-check" className="p-button-primary" />
    </div>
  );

  return (
    // Title of the popup
    <Dialog
      header="Account Information"
      visible={show}
      style={{ width: "50vw" }}
      footer={footer}
      onHide={onClose}
    >
      {/* Here are all of the fields to be entered */}
      <div className="form-group">
        <span className="p-float-label">
          <InputText id="username" />
          <label htmlFor="username">Email</label>
        </span>
      </div>
      <div className="form-group">
        <span className="p-float-label">
          <InputText id="password" type="password" />
          <label htmlFor="password">Password</label>
        </span>
      </div>
      <div className="form-group">
        <span className="p-float-label">
          <InputText id="Address" type="Address" />
          <label htmlFor="Address">Address</label>
        </span>
      </div>
      <div className="form-group">
        <span className="p-float-label">
          <InputText id="Card #" type="Card #" />
          <label htmlFor="Card #">Card #</label>
        </span>
      </div>
    </Dialog>
  );
}

export default Popup;
