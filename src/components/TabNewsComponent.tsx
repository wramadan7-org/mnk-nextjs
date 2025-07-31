"use client";
import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import CardNewsComponent from "./CardNewsComponent";
import CardNewsFeaturedComponent from "./CardNewsFeaturedComponent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`news-tabpanel-${index}`}
      aria-labelledby={`news-tab-${index}`}
      className="flex flex-col gap-4"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `news-tab-${index}`,
    "aria-controls": `news-tabpanel-${index}`,
  };
}

export default function TabNewsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={handleChange}
          variant="fullWidth"
          centered
          aria-label="list tab news"
        >
          <Tab label="Topic One" {...a11yProps(0)} />
          <Tab label="Topic Two" {...a11yProps(1)} />
          <Tab label="Topic Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CardNewsFeaturedComponent />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-5">
          <CardNewsComponent />
          <CardNewsComponent />
          <CardNewsComponent />
          <CardNewsComponent />
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <p className="text-tertiary">Topic Two</p>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <p className="text-tertiary">Topic Three</p>
      </CustomTabPanel>
    </Box>
  );
}
