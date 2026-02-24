"use client";

import type { SelectProps } from "@mui/material/Select";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const LocaleSelect = styled((props: SelectProps<string>) => (
  <Select<string> {...props} />
))(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 14,
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
    borderWidth: 1,
  },
  ".MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
    fontSize: 18,
  },
  ".MuiSelect-select": {
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: "28px !important",
  },
}));
