import { LoaderComponent } from "./Loader.style";

type loaderPropsType = {
  size?: number;
};

const Loader = ({ size = 16 }: loaderPropsType) => {
  return <LoaderComponent size={size} />;
};

export default Loader;
