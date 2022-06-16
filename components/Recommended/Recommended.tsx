import React from "react";
import ReuseableCategory from "../ReuseableCategories";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import SlideCustomCard from "../SlideCustomCard";
import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledPriceValue,
  TextTypography,
  StyledPrice,
  StyledButton,
  StyledTypography,
  StyledIconButton,
  StyledCustomTypography,
  StyledBox,
  CustomDivContainer,
  CustomContainer,
  LatestServicesDiv,
} from "../TopCategories/styles";
import Paper from "@mui/material/Paper";
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
    <div className="navbar__mycontainer">
      <CustomContainer>
        <CustomDivContainer>
          <Paper elevation={0} sx={{ height: "110%", background: "#f6f9f5" }}>
            <StyledBox>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <StyledCustomTypography
                  variant="h5"
                  style={{ fontFamily: "serif" }}
                >
                  Because you viewed
                </StyledCustomTypography>
                <StyledCustomTypography
                  variant="h5"
                  style={{ fontFamily: "serif", color: "green" }}
                >
                  "{state.viewed}"
                </StyledCustomTypography>
              </div>
              <StyledCustomTypography
                style={{
                  marginRight: "2%",
                  fontFamily: "serif",
                  fontSize: "15px",
                  textDecoration: "underline",
                }}
              >
                See All
              </StyledCustomTypography>
            </StyledBox>
            {recommend.length > 0 ? (
              <>
                <SlideCustomCard data={recommend} />
              </>
            ) : (
              <></>
            )}
          </Paper>
        </CustomDivContainer>
      </CustomContainer>
    </div>
  );
}
