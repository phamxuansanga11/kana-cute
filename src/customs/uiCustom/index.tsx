import React from "react";

interface WrapperBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

interface LabelRequireProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  fontSize?: number;
  isRequired?: boolean;
}

interface ButtonPrimaryProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  fontSize?: number;
  isDisabled?: boolean;
}

interface ContainerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const WrapperBox = (props: WrapperBoxProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`bg-white dark:bg-dark-second-color shadow-md p-4 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export const LabelRequire = (props: LabelRequireProps) => {
  const { children, className, fontSize, isRequired, ...rest } = props;

  let isRequire = isRequired;

  return (
    <span
      {...rest}
      className={`font-medium ${className || ""}`}
      style={{ fontSize: fontSize || 16 }}
    >
      {children} {isRequire ?? <span className="text-red-700">*</span>}
    </span>
  );
};

export const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { children, className, fontSize, isDisabled, ...rest } = props;

  return (
    <button
      {...rest}
      disabled={isDisabled || false}
      className={`bg-primary font-medium rounded-md px-4 py-3 text-white ${
        className || ""
      }`}
      style={{ fontSize: fontSize || 16 }}
    >
      {children}
    </button>
  );
};

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={`px-[40px] ${className || ""}`}>
      {children}
    </button>
  );
};
