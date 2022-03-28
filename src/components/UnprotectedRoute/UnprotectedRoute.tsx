import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/index";

const UnProtectedRoute = (props: any) => {
  const { auth } = useAppSelector((state) => state.auth);

  if (auth) {
    return (
      <Route {...props} exact>
        <Redirect to={`/todos`} />
      </Route>
    );
  } else {
    return <Route {...props}>{props.children}</Route>;
  }
};

export default UnProtectedRoute;
