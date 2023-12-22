import React from "react";

export const TitleSection = ({
  children,
}: {
  children?: React.ReactNode | string;
}): React.JSX.Element => {
  return (
    <div className="max-w-4xl md:w-fit mx-auto w-full md:text-center">
      {children}
    </div>
  );
};

export const Title = ({
  children,
}: {
  children?: React.ReactNode | string;
}) => {
  return (
    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2">
      {children}
    </h1>
  );
};

export const SubTitle = ({
  children,
}: {
  children?: React.ReactNode | string;
}) => {
  return <p>{children}</p>;
};

export const HeadTitle = ({
  children,
}: {
  children?: React.ReactNode | string;
}) => {
  return (
    <h6 className="text-primary text-base md:text-lg py-2 capitalize font-semibold">
      {children}
    </h6>
  );
};
