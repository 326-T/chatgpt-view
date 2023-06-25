import React from "react";
import styles from "@/app/dashboard/page.module.css";

import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormProps {
  content: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ content, onChange, handleSubmit }) => {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 1 }}>
      <Box
        sx={{
          display: "flex",
          width: 0.8,
          m: "auto",
          p: 2,
          backgroundColor: "gray",
          borderRadius: 2,
        }}
      >
        <TextField
          label="Send a message"
          variant="standard"
          value={content}
          onChange={onChange}
          multiline
          sx={{ width: 0.95 }}
          InputProps={{ disableUnderline: true }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.button}
          sx={{ minWidth: 0 }}
        >
          <SendIcon style={{ fontSize: 24, color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
