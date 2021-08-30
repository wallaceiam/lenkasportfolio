import React from "react";
import NextLink, { LinkProps } from "next/link";

type ILinkProps = LinkProps & {
  readonly className?: string;
  readonly children?: React.ReactNode;
}

const Link = ({ className, children, ...rest }: ILinkProps) => (
  <NextLink {...rest}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default Link;