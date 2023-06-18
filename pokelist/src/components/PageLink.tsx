import classNames from "classnames";
import React, { HTMLProps } from "react";

type Properties = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  children,
  disabled,
  active,
  ...props
}: Properties) {
  const customClassName = classNames("page-link", className, {
    active,
    disabled,
  });
  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      {...props}
      className={customClassName}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}
