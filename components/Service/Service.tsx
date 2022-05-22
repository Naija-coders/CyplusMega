import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { StyledTabs, StyledTab } from "./styles";
export default function Service() {
  const [value, setValue] = React.useState("two");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="navbar__mycontainer">
      <div className="navbar__catwrapper">
        <div style={{ width: "80%", marginTop: "7%" }}>
          <Paper sx={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="secondary StyledTabs example"
              >
                <StyledTab value="two" label="Description" />
                <StyledTab value="three" label="About seller" />
                <StyledTab value="four" label="Similar services" />
                <StyledTab value="five" label="Reviews" />
              </StyledTabs>
            </div>
          </Paper>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="listitem__mainlist">
              <ul>
                <li>Home</li>
              </ul>
            </div>
            <div>Service</div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
