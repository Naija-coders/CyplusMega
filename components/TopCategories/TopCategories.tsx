import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { useRouter } from "next/router";
import ReuseableCategory from "../ReuseableCategories";

type Props = {};
const LatestServices: React.FC<Props> = ({}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const [loaded, setLoaded] = useState(true);
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
      <ReuseableCategory
        title={"Just for you"}
        data={state.allservicedata}
        quantity={40}
      />
    </div>
  );
};
export default LatestServices;
