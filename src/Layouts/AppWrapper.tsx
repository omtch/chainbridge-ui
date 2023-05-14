import { NavLink, Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { ROUTE_LINKS } from "../Components/Routes";
import {
  MOONBEAM_CYAN,
  MOONBEAM_PINK,
  MOONBEAM_PURPLE,
} from "../Themes/LightTheme";
import styled from "styled-components";
import AppFooter from "./AppFooter";
interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(
  ({ animation, constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 2,
        position: "relative",
      },
      inner: {
        // paddingTop: (constants.navItemHeight as number) * 2,
        paddingTop: "6.8vw",
        flex: 1,
        // paddingBottom: (constants.navItemHeight as number) * 2,
        [breakpoints.down("lg")]: {
          flex: 0,
        },
      },
      cta: {
        display: "block",
        maxWidth: 200,
        maxHeight: 200,
        position: "fixed",
        bottom: constants.generalUnit * 3,
        right: constants.generalUnit * 3,
      },
      content: {
        margin: `0 auto`,
        maxWidth: 660,
        borderRadius: 4,
      },
      pageArea: {
        overflow: "hidden",
        border: "8px solid",
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(to left, ${MOONBEAM_PINK}, ${MOONBEAM_PURPLE}, ${MOONBEAM_CYAN})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: `0 0 8px ${MOONBEAM_PURPLE}`,
      },
      navTabs: {
        display: "flex",
        margin: `${constants.generalUnit * 2}px 0`,
        width: "90%",
        justifyContent: "space-evenly",
        "& > a": {
          display: "flex",
          justifyContent: "center",
          width: "10em",
          padding: `${constants.generalUnit}px ${
            constants.generalUnit * 1.5
          }px`,
          textDecoration: "none",
          maxHeight: constants.navItemHeight,
          "&.active": {
            color: palette.additional["gray"][9],
            borderBottom: `4px solid ${MOONBEAM_PINK}`,
          },
        },
        "& svg": {
          height: 14,
          width: 14,
        },
      },
    });
  }
);

const NavTabs = styled.div`
  padding: 2px 4px;
  background: #dbdcec;
  color: #464646;
  font-size: 16px;
  font-weight: 600;
  line-height: 39px;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  z-index: 2001;
  a {
    cursor: pointer;
    padding: 0 32px;
    text-decoration: none;
    border-radius: 8px;
    white-space: nowrap;
    &.active {
      background: #5a5c9b;
      color: white;
    }
  }
  @media screen and (max-width: 1024px) {
    position: static;
    width: 90vw;
    left: 0;
    transform: translateY(0vw);
    margin: 0 auto;
    top: 17vw;

    a {
      flex-basis: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    transform: translateY(-6vw);
  }
`;

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <section className={classes.inner}>
        <AppHeader />
        <NavTabs>
          <NavLink activeClassName="active" to={"/transfer"}>
            Transfer
          </NavLink>
          <NavLink activeClassName="active" to={"mint"}>
            Wrap OMNs
          </NavLink>
        </NavTabs>
        <section className={classes.content}>
          <div className={classes.pageArea}>
            {/*<section className={classes.navTabs}>*/}
            {/*  <NavLink activeClassName="active" to={ROUTE_LINKS.Transfer}>*/}
            {/*    <Typography variant="h4">Transfer</Typography>*/}
            {/*  </NavLink>*/}
            {/*  <NavLink activeClassName="active" to={ROUTE_LINKS.Mint}>*/}
            {/*    <Typography variant="h4">Wrap OMNs</Typography>*/}
            {/*  </NavLink>*/}
            {/*</section>*/}
            {children}
          </div>
        </section>

        {/* Put CTA here */}
        {/* <a className={classes.cta} rel="noopener noreferrer" target="_blank" href="#">
        </a> */}
      </section>
      <AppFooter />
    </section>
  );
};

export default AppWrapper;
