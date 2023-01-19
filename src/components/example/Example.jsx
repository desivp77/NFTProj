import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
 
import Header from "../header/Header.jsx";
import Avatar1 from "../avatar/Avatar.jsx";
// import User from "../user/User.jsx";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header/> 
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
            Hi
          </Link>
        </Paper>
      </Container>

      <Avatar1/>
          {/* <User 
            name=""
            info=""
            avatar=""
            size="55"
            verified="false"
         /> */}
    </div>
  );
}
