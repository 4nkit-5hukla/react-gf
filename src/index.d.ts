import * as React from 'react';

export interface Font {
  font: string;
  weights?: (string | number)[];
}

export interface ReactGFLProps {
  fonts: Font[];
  subsets?: string[];
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

declare const ReactGFL: React.FC<ReactGFLProps>;
// declare class ReactGFL extends React.PureComponent<ReactGFLProps> {};

export default ReactGFL;
