import React from "react";

import { Button, Paper, Input, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useTheme } from "@mui/material/styles";
import styles from "@/app/[id]/page.module.css";
import { PostMessageCondition } from "@/app/[id]/type";

export default function Form({
  content,
  onChange,
  handleSubmit,
  condition,
  setCondition,
}: {
  content: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
  condition: PostMessageCondition;
  setCondition: React.Dispatch<React.SetStateAction<PostMessageCondition>>;
}) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 0.6,
        m: "auto",
        p: 1.5,
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
      }}
    >
      <Input
        placeholder="Send a message"
        value={content}
        onChange={onChange}
        multiline
        sx={{ width: 0.85 }}
        disableUnderline
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 0.15,
        }}
      >
        <PsychologyIcon
          color={condition.respond ? "info" : "disabled"}
          onClick={() => {
            setCondition(
              condition.respond
                ? { useMemory: false, respond: false }
                : { ...condition, respond: true }
            );
          }}
          style={{ fontSize: 30 }}
        />
        <ManageSearchIcon
          color={condition.useMemory ? "info" : "disabled"}
          onClick={() => {
            setCondition({ ...condition, useMemory: !condition.useMemory });
          }}
          style={{ fontSize: 30 }}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="info"
          className={styles.button}
          sx={{ width: 30, height: 30, minWidth: 30 }}
          disabled={content === ""}
        >
          <SendIcon style={{ fontSize: 22, color: "white" }} />
        </Button>
      </Box>
    </Paper>
  );
}
