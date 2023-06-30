import React from "react";

import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";

import styles from "@/app/[id]/page.module.css";

interface FormProps {
  content: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ content, onChange, handleSubmit }) => {
  const theme = useTheme();
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 0.6,
        m: "auto",
        p: 2,
        backgroundColor: theme.palette.background.default,
        border: 1,
        borderColor: theme.palette.primary.main,
        borderRadius: 2,
      }}
    >
      <TextField
        label={content ? "" : "Send a message"}
        variant="standard"
        value={content}
        onChange={onChange}
        multiline
        sx={{ width: 0.9 }}
        InputProps={{ disableUnderline: true }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.button}
        sx={{ minWidth: 30 }}
      >
        <SendIcon style={{ fontSize: 24, color: "white" }} />
      </Button>
    </Box>
  );
};

export default Form;
