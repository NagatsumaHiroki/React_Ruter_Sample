import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  return (
    <div>
      <h1>Page1DatailAです</h1>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
