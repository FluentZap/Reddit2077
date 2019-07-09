import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  backgroundColor: '##270140'
});

export default function ButtonBar() {
  return (
    <div>
      <Grid item>
        <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
          <MyButton>One</MyButton>
          <MyButton>Two</MyButton>
          <MyButton>Three</MyButton>
        </ButtonGroup>
      </Grid>
    </div>
  );
}