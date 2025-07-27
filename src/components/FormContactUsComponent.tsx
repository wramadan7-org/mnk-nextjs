"use client";

import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";

export default function FormContactUsComponent() {
  return (
    <div className="w-full">
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <FormControl className="w-full">
            <FormLabel>Full Name</FormLabel>

            <TextField
              id="fullName"
              size="small"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              fullWidth
              // error
              // helperText="Please enter your full name"
            />
          </FormControl>
        </Grid>

        <Grid size={6}>
          <FormControl className="w-full">
            <FormLabel>Email</FormLabel>

            <TextField
              id="email"
              size="small"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              fullWidth
              // error
              // helperText="Please enter your full email address"
            />
          </FormControl>
        </Grid>

        <Grid size={6}>
          <FormControl className="w-full">
            <FormLabel>Phone Number</FormLabel>

            <TextField
              id="phoneNumber"
              size="small"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              required
              fullWidth
              // error
              // helperText="Please enter your phone number"
            />
          </FormControl>
        </Grid>

        <Grid size={12}>
          <FormControl className="w-full">
            <FormLabel>Message</FormLabel>

            <TextField
              multiline
              id="message"
              size="small"
              name="message"
              placeholder="Enter your message"
              required
              fullWidth
              minRows={4}
              // error
              // helperText="Please enter your message"
            />
          </FormControl>
        </Grid>

        <Grid size={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
