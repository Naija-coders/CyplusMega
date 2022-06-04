import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CustomSelect, StyledDiv, StyledTypography } from "./styles";
import i18next from "../../i18n/index";
import i18n from "../../i18n/index";

import { Trans, useTranslation } from "react-i18next";
export default function LangulangMenu() {
  let userfallback: any;
  if (typeof window !== "undefined") {
    userfallback = localStorage.getItem("i18nextLng");
  }

  console.log("the userfall back language is", userfallback);

  const [langval, setLangval] = React.useState<any>(userfallback);
  const [lang, setLang] = React.useState(langval);
  const handleLanguageChange = (language: any) => {
    i18next.options.lng = language;
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };
  React.useEffect(() => {
    if (userfallback == lang) {
      setLangval(userfallback.toString());
    }
  }, []);

  if (userfallback === lang) {
    console.log("hey userlanagaugae is same");
  }

  const handleChange = (event: any) => {
    setLang(event.target.value as string);
  };

  return (
    <StyledDiv>
      <FormControl>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem
            value={"en"}
            onClick={() => {
              handleLanguageChange("en");
            }}
          >
            <StyledTypography> EN</StyledTypography>
          </MenuItem>
          <MenuItem
            value={"tr"}
            onClick={() => {
              handleLanguageChange("tr");
            }}
          >
            <StyledTypography>TR</StyledTypography>
          </MenuItem>
        </CustomSelect>
      </FormControl>
    </StyledDiv>
  );
}
