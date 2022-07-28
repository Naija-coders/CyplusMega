import React from "react";
import { StyledTextField } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

type Props = {
  isVisible?: boolean;
};

const Search: React.FC<Props> = ({ isVisible }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {isVisible ? (
        <div style={{ width: "100%" }}>
          <StyledTextField
            fullWidth
            placeholder={"Find a service "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      fontSize: {
                        xs: "50px",
                        md: "1.3rem",
                      },
                    }}
                  />
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
