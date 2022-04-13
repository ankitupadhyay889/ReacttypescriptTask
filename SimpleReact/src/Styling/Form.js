import React from "react";
import { Container, Grid, TextField } from "@mui/material";

export default function Form() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="field" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="field" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField fullWidth label="short field" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField fullWidth label=" short field" variant="outlined" />
        </Grid>
      </Grid>
    </Container>
  );
}
