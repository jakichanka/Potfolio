/// <reference types="vite/client" />

declare type Callback = () => void;

declare type Component<P = any> = (props?: P) => JSX.Element;
