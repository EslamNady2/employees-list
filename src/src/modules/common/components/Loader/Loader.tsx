import { LoaderComponent } from "./Loader.style";

type loaderPropsType = {
  size?: number;
  color?: string;
};

const Loader = ({ size = 16, color}: loaderPropsType) => {
  return <LoaderComponent size={size}  color={color}/>;
};

export default Loader;
