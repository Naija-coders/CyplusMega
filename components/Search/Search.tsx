import React from "react";
import { StyledTextField } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  isVisible?: boolean;
};

const Search: React.FC<Props> = ({ isVisible }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {isVisible ? (
        <div>
          <StyledTextField
            placeholder={t("find_service")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            variant="outlined"
            color="primary"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Search;
