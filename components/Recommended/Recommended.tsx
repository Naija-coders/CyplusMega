import React from "react";
import ReuseableCategory from "../ReuseableCategories";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";

export default function Recommended() {
  const state = useSelector((state: RootState) => state.appstate);
  const [recommend, setRecommend] = React.useState<any>([]);

  React.useEffect(() => {
    if (recommend.length <= 0) {
      state.recommended;
      setRecommend(state.recommended);
    }
  }, [recommend]);
  const firstData = recommend[Math.floor(Math.random() * recommend.length)];
  let sortedData = [firstData];
  console.log("sorted data", recommend);

  return (
    <div>
      {recommend.length > 0 ? (
        <>
          <ReuseableCategory title={"Inspired by your list"} data={recommend} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
