import {
  ComponentClass,
  ComponentProps,
  FunctionComponent,
  JSXElementConstructor,
} from "react";
import { ComponentType } from "react";
import { Component, PropsWithoutRef } from "react";

export type GetProps<C> = C extends keyof JSX.IntrinsicElements
  ? ComponentProps<C>
  : C extends ComponentClass<infer P>
  ? PropsWithoutRef<P>
  : C extends FunctionComponent<infer P>
  ? PropsWithoutRef<P>
  : C extends Component<infer P>
  ? PropsWithoutRef<P>
  : never;
