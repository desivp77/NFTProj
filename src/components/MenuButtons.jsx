import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from "./link/Link";

export default function MenuButtons() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Link href="../../about" color="secondary"><Button>Home</Button></Link>
      <Link href="../../activity" color="secondary"><Button>Activity</Button></Link>
      <Link href="../../explore" color="secondary"><Button>Explore</Button></Link>

    </ButtonGroup>
  );
}

