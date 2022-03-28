import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/index";

const ProtectedRoute = (props: any) => {
  const { auth } = useAppSelector((state) => state.auth);

  if (!auth)
    return (
      <Route {...props} exact>
        <Redirect to={`/`} />
      </Route>
    );

  return <Route {...props}>{props.children}</Route>;
};

export default ProtectedRoute;
