import {
  APropsWithoutRef,
  BlockQuoteProps,
  DivPropsWithoutRef,
  EmPropsWithoutRef,
  OLPropsWithoutRef,
  StrongPropsWithoutRef,
  ULPropsWithoutRef,
} from 'react-html-props';
import { isFullyQualifiedURL } from '@/utils/globals';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import React from 'react';

type Extended = {
  as?: string;
};

export const Title = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'h1',
    {
      className: twMerge(
        'text-6xl font-bold tracking-tight mb-8 [text-wrap:balance]',
        className,
      ),
      ...rest,
    },
    children,
  );

export const Subtitle = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'p',
    {
      className: twMerge('text-lg leading-relaxed opacity-80 mb-6', className),
      ...rest,
    },
    children,
  );

export const H1 = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'h1',
    {
      className: twMerge(
        'text-5xl font-bold tracking-normal leading-tight mt-24 mb-6',
        className,
      ),
      ...rest,
    },
    children,
  );

export const H2 = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'h2',
    {
      className: twMerge(
        'text-4xl font-bold tracking-normal leading-tight mt-20 mb-6',
        className,
      ),
      ...rest,
    },
    children,
  );

export const Para = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'p',
    {
      className: twMerge('text-base leading-relaxed mb-6', className),
      ...rest,
    },
    children,
  );

export const Small = ({
  as,
  children,
  className,
  ...rest
}: DivPropsWithoutRef & Extended) =>
  React.createElement(
    as || 'p',
    {
      className: twMerge('text-sm leading-relaxed mb-4', className),
      ...rest,
    },
    children,
  );

export const BlockQuote = ({
  children,
  className,
  ...rest
}: BlockQuoteProps) => {
  return (
    <blockquote
      className={twMerge('border-l-black border-l-4 pl-1', className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
};

export const UL = ({ children, className, ...rest }: ULPropsWithoutRef) => {
  return (
    <ul className={twMerge('list-disc mt-2 mb-3 ml-6', className)} {...rest}>
      {children}
    </ul>
  );
};

export const OL = ({ children, className, ...rest }: OLPropsWithoutRef) => {
  return (
    <ol className={twMerge('list-decimal mt-2 mb-3 ml-6', className)} {...rest}>
      {children}
    </ol>
  );
};

export const Link = ({
  href,
  children,
  className,
  ...rest
}: APropsWithoutRef) => {
  return (
    <NextLink
      href={href}
      className={twMerge('underline underline-offset-4', className)}
      {...rest}
      {...(isFullyQualifiedURL(href)
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : {})}
    >
      {children}
    </NextLink>
  );
};

export const Strong = ({
  children,
  className,
  ...rest
}: StrongPropsWithoutRef) => {
  return (
    <strong className={twMerge('font-semibold', className)} {...rest}>
      {children}
    </strong>
  );
};

export const Em = ({ children, className, ...rest }: EmPropsWithoutRef) => {
  return (
    <em className={className} {...rest}>
      {children}
    </em>
  );
};
