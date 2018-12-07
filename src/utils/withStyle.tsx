import { css, Rule } from "glamor";
import * as React from "react";

export function withStyle<TElement extends keyof JSX.IntrinsicElements>(
  component: React.ReactType<JSX.IntrinsicElements[TElement]>,
  ...rules: Rule[]
): React.ComponentType<JSX.IntrinsicElements[TElement]> {
  const styleProps = css(...rules);

  return componentProps => React.createElement(component, {
    ...styleProps,
    ...componentProps,
  });
}
