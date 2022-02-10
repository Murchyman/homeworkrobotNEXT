import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { RWebShare } from "react-web-share";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Result
        </Typography>
        <Typography component={'span'} variant="body2">
          {props.response}
        </Typography>
      </CardContent>
      <CardActions>

        <Button href='/About' size="small">Learn More</Button>
        <div>
          <RWebShare
            data={{
              text: "Check out Homework Robot, an awesome tool to help you create better homework",
              url: "https://homeworkrobot.net",
              title: "Homework Robot",
            }}

          >
            <Button size="small">Share</Button>
          </RWebShare>
        </div>
      </CardActions>
    </Card>
  );
}
