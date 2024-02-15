// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";

import { Box, IconButton, Typography } from "@mui/material";
import WeekPicker from "./components/WeekPicker";
import "dayjs/locale/fr";
import { CalendarIcon } from "@mui/x-date-pickers";
import { useLayoutEffect, useState } from "react";

function App() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(null);

  useLayoutEffect(() => {
    const dismissCalendar = () => {
      setOpenCalendar(false);
    };
    window.addEventListener("click", dismissCalendar);

    return () => {
      window.removeEventListener("click", dismissCalendar);
    };
  }, []);

  return (
    <Box onClick={e => e.stopPropagation()} minWidth={200} maxWidth={250}>
      <Box
        display="grid"
        alignItems="center"
        position="relative"
        width="100%"
        height={40}
        pl={1}
        pr={4}
        border="1px solid lightgray"
        borderRadius={1}
      >
        <IconButton
          onClick={e => setOpenCalendar(!openCalendar)}
          sx={{
            position: "absolute",
            right: 2,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label="delete"
          size="medium"
        >
          <CalendarIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="subtitle2">
          {!date
            ? "DD/MM/YYYY"
            : date
                .add(date.day() > 0 ? 1 - date.day() : -6, "day")
                .format("DD/MM/YYYY")}{" "}
          -{" "}
          {!date
            ? "DD/MM/YYYY"
            : date
                .add(date.day() === 0 ? 0 : 7 - date.day(), "day")
                .format("DD/MM/YYYY")}
        </Typography>
      </Box>
      {openCalendar && <WeekPicker date={date} setDate={setDate} />}
    </Box>
  );
}

export default App;
