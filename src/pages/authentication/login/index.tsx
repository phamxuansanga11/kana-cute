import React from "react";
import { ButtonPrimary, LabelRequire, WrapperBox } from "~/customs/uiCustom";
import IconLogin from "~/assets/images/login.png";
import { Input } from "antd";
import { handleThemeChange } from "~/utils/functions.tsx";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <WrapperBox className="w-fit h-fit border-[1px] border-[#f0f1fa] rounded-xl">
        <div className="flex justify-center gap-[20px]">
          <img src={IconLogin} className="max-w-[50px]" />
          <h1 className="text-[30px] font-medium">Đăng nhập</h1>
        </div>
        <form action="" className="mt-5" onSubmit={(e) => e.preventDefault()}>
          <div className="form__group mb-5">
            <LabelRequire className="dark:text-dark-text-color">
              Tên đăng nhập
            </LabelRequire>
            <Input
              type="text"
              className="h-[40px]"
              placeholder="Tên đăng nhập..."
            />
          </div>
          <div className="form__group mb-5">
            <LabelRequire className="dark:text-dark-text-color">
              Mật khẩu
            </LabelRequire>
            <Input type="text" className="h-[40px]" placeholder="Mật khẩu..." />
          </div>
          <ButtonPrimary
            className="flex ml-auto bg-blue-antd-color w-full justify-center"
            onClick={() => handleThemeChange()}
          >
            Đăng nhập
          </ButtonPrimary>
        </form>
      </WrapperBox>
    </div>
  );
};

export default Login;
