import React from "react";
import Modal from "react-modal";
import { Button } from "@material-ui/core";

function PaymentModal(props) {
  const modalStyle = {
    content: {
      height: "50%",
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "3rem",
      borderRadius: "1.5rem",
    },
  };

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={props.toggle}
        onRequestClose={props.handleToggle}
        style={modalStyle}
      >
        <h4 style={{ marginBottom: "2rem" }}>
          Total Price : <b>{props.totalPrice}</b>{" "}
        </h4>
        <h3 style={{ marginBottom: "1.5rem" }}>Card Detail</h3>
        <div>
          <input
            style={{
              minWidth: "10rem",
              width: "100%",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              height: "2rem",
              background: "#d4d4d4",
              outline: "none",
              border: "none",
              borderRadius: "0.5rem",
            }}
            placeholder={"Card Number"}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{
              minWidth: "10rem",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              height: "2rem",
              background: "#d4d4d4",
              outline: "none",
              border: "none",
              borderRadius: "0.5rem",
            }}
            placeholder={"MM"}
          />
          <input
            style={{
              minWidth: "10rem",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              height: "2rem",
              background: "#d4d4d4",
              outline: "none",
              border: "none",
              borderRadius: "0.5rem",
            }}
            placeholder={"YY"}
          />
          <input
            style={{
              minWidth: "10rem",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              height: "2rem",
              background: "#d4d4d4",
              outline: "none",
              border: "none",
              borderRadius: "0.5rem",
            }}
            placeholder={"CVV"}
          />
        </div>
        <div>
          <input
            style={{
              minWidth: "10rem",
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              height: "2rem",
              background: "#d4d4d4",
              outline: "none",
              border: "none",
              borderRadius: "0.5rem",
            }}
            placeholder={"Name on Card"}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant={"contained"} color={"primary"}>
            Pay
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentModal;
