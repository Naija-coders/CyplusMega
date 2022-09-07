import React from "react";
import Homepagelayout from "./homepagelayout";
import { StyledBox, StyleContainer } from "../components/NotLoggedIn/style";
import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  BasicPaper,
  BasicImage,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
} from "../components/Featured/styles";
type Props = {};

export default function privacyPolicies({}: Props) {
  return (
    <Homepagelayout>
      <StyledBox>
        <StyleContainer>
          <BasicTextTitle style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            Privacy Policy
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Your privacy is important to us. It is Unicorn Platform's policy to
            respect your privacy regarding any information we may collect from
            you across our website, https://elverr.company
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            We only keep the data we've acquired for as long as it takes to
            deliver the service you requested. We will safeguard the data we
            store using reasonable commercial efforts to thwart loss, theft, and
            unauthorized access, disclosure, copying, use, or alteration.
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Except as required by law, we never divulge any personally
            identifying information to the public or to other parties.
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Except as required by law, we never divulge any personally There may
            be links on our website to sites outside our control. Please be
            aware that we are unable to take responsibility or liability for the
            content or usage of these websites, nor can we regulate their
            privacy policies.
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            We shall consider your continuous use of our website as your
            approval of our privacy and personal information practices. Contact
            us at manoomogha1@gmail.com if you have any concerns regarding how
            we manage user data and personal information.
          </BasicTextTitle>
          <br></br>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            Account
          </BasicTextTitle>
          <br></br>
          <BasicTextTitle style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            You can delete your account and all associated data by visiting your
            account settings and pressing the "Delete account" button.
          </BasicTextTitle>
        </StyleContainer>
      </StyledBox>
    </Homepagelayout>
  );
}
