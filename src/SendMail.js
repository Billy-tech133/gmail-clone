import React from "react";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail-close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail-error">To is Required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail-error">subject is Required</p>
        )}

        <input
          name="message"
          //   placeholder="Message"
          type="text"
          className="sendMail-message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail-error">message is Required</p>
        )}

        <div className="sendMail-options">
          <Button
            className="sendMail-send"
            color="primary"
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
