import React from "react";

import { Button, Paper, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";

import styles from "@/app/[id]/page.module.css";

export default function Form({
  content,
  onChange,
  handleSubmit,
}: {
  content: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
}) {
  const theme = useTheme();
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 0.6,
        m: "auto",
        p: 2,
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
      }}
    >
      <Input
        placeholder="Send a message"
        value={content}
        onChange={onChange}
        multiline
        sx={{ width: 0.9 }}
        disableUnderline
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="info"
        className={styles.button}
        sx={{ minWidth: 30 }}
        disabled={content === ""}
      >
        <SendIcon style={{ fontSize: 24, color: "white" }} />
      </Button>
    </Paper>
  );
}
