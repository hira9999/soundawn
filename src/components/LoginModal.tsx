import { UserIcon } from "@heroicons/react/solid";
import React, { ReactEventHandler, useState } from "react";

const LoginModal = () => {
  const [switchModalState, setSwitchModalState] = useState<string>("login");

  const onModalChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchModalState(e?.currentTarget?.value);
  };
  return (
    <>
      {/* The button to open modal  */}
      <label
        htmlFor="my-modal-4"
        className="btn modal-button absolute top-5 right-5"
      >
        <UserIcon className="w-5 h-5" />
      </label>

      {/* Put this part before </body> tag  */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* Modal state */}
          <div className="btn-group">
            <input
              type="radio"
              name="option"
              data-title="LOGIN"
              className="btn"
              value="login"
              onChange={(e) => onModalChage(e)}
              defaultChecked
            />
            <input
              type="radio"
              name="option"
              data-title="REGISTER"
              value="register"
              className="btn"
              onChange={(e) => onModalChage(e)}
            />
          </div>
          {/* inputs */}
          {switchModalState === "login" ? (
            <>
              <div className="p-7">
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>User Name</span>
                    <input
                      type="text"
                      placeholder="info@site.com"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </div>
              </div>
              <button className="btn">LOGIN</button>{" "}
            </>
          ) : (
            <>
              <div className="p-7">
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>User Name</span>
                    <input
                      type="text"
                      placeholder="info@site.com"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="info@site.com"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input
                      type="text"
                      placeholder="info@site.com"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <label className="input-group input-group-vertical">
                    <span>Comfirm Password</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </div>
              </div>
              <button className="btn">REGISTER</button>{" "}
            </>
          )}
        </label>
      </label>
    </>
  );
};

export default LoginModal;
