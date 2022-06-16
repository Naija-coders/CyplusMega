import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { useRouter } from "next/router";
import ReuseableCategory from "../ReuseableCategories";

type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const { AuthState } = useContext<any>(StateContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [active, setActive] = useState(false);

  const handleLogin = AuthState.user;
  const [buttoncolor, setButtoncolor] = useState<any>(false);
  const handleColor = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    if (state.mainservices === null || state.mainservices.length < 0) {
      setLoaded(true);
    } else if (state.mainservices.length > 0) {
      setLoaded(false);
    }
  });
  console.log("displaying mainservices", state.mainservices);
  return (
    <div>
      <br></br>
      <ReuseableCategory
        title={"Latest Services"}
        data={state.mainservices}
        quantity={10}
      />
    </div>
  );
};

export default LatestServices;
