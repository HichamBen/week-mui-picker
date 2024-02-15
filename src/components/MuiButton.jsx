import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";

function MuiButton() {
  const [formats, setFormats] = useState();

  console.log(formats);

  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://hicham-benlamaalam.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="small"
          startIcon={<Send />}
          disableRipple
        >
          Send
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<Send />}
          disableElevation
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <Send />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left click!")}>Left</Button>
          <Button onClick={() => alert("Center click!")}>Center</Button>
          <Button onClick={() => alert("Right click!")}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton aria-label="bold" value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton aria-label="italic" value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton aria-label="underlined" value="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
