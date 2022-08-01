import * as React from "react";
import Paper from "@mui/material/Paper";
interface IAppProps {}
import {
  CustomDiv,
  CustomHeader,
  CustomTextField,
  CustomTextArea,
  CustomTypography,
  CustomBtn,
  CustomInfo,
  CustomTextDiv,
} from "./style";

const ContactUs: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <CustomHeader>Contact</CustomHeader>

      <Paper
        sx={{
          width: "80%",
          marginTop: "1rem",
          marginLeft: "7%",
        }}
      >
        <CustomDiv>
          <CustomInfo>
            <h1>We'd Love To Hear From You.</h1>
            <CustomTypography paragraph>
              We strive to bring professionals together and we value your input
              to our quest. Every message counts as it will help us understand
              what your needs are, as a user.
            </CustomTypography>
            <div style={{ display: "flex", gap: "90px" }}>
              <CustomTypography>Email</CustomTypography>{" "}
              <CustomTypography>manoomogha@yahoo.com</CustomTypography>
            </div>
            <div style={{ display: "flex", gap: "90px" }}>
              <CustomTypography>Phone Number</CustomTypography>{" "}
              <CustomTypography>-</CustomTypography>
            </div>
          </CustomInfo>
          <CustomTextDiv>
            <CustomTextField fullWidth placeholder="First name" />
            <CustomTextField fullWidth placeholder="E-mail" />
            <CustomTextField fullWidth placeholder="Phone Number" />
            <CustomTextArea minRows={5} placeholder="Message" />
            <CustomBtn variant="contained" size="large">
              Submit
            </CustomBtn>
          </CustomTextDiv>
        </CustomDiv>
      </Paper>
    </div>
  );
};

export default ContactUs;
