import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Typography, NavLink, useLocation } from "@chainsafe/common-components";
import { shortenAddress } from "../Utils/Helpers";
import { useWeb3 } from "@chainsafe/web3-context";
import { useChainbridge } from "../Contexts/ChainbridgeContext";
import logo from "../media/logos/moonbeam-logo.png";
import styled from "styled-components";
import { ReactComponent as IconExplorer } from "../assets/icon_omega_explorer.svg";
import { ReactComponent as IconSwap } from "../assets/icon_omega_swap.svg";
import { ReactComponent as IconLogoPc } from "../assets/icon_logo_pc.svg";
import { ReactComponent as IconLogoMobile } from "../assets/icon_logo.svg";
import { ReactComponent as IconMetamask } from "../assets/icon_metamask.svg";
import { ReactComponent as IconEllipsis } from "../assets/icon_ellipsis.svg";
import { ReactComponent as IconMenu } from "../assets/icon_menu.svg";
import { switchToNetwork } from "../Utils/switchToNetwork";

const NavItem = styled.div`
  padding: 8px 14px;
  line-height: 22px;
  color: #5d6785;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(81, 85, 166);
  margin-right: 6px;
  border-radius: 12px;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background: rgba(153, 161, 189, 0.0784313725490196);
  }
  a {
    color: #5d6785;
    text-decoration: none;
    display: flex;
    align-items: center;
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background: black;
      margin-right: 6px;
      border-radius: 50%;
      overflow: hidden;
    }
    &.active {
      color: black;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const Address = styled.div`
  background: rgb(73, 76, 144);
  borderradius: 12px;
  padding: 8px;
  color: white;
  fontsize: 14px;
  fontweight: 600;
  lineheight: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  span {
    padding: 5px 8px;
    background: rgb(180, 183, 241);
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }
  @media screen and (max-width: 1024px) {
    border-radius: 5vw;
    height: 32px;
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    padding-left: 1.4vw;
    padding-right: 0.5vw;
    display: flex;
    align-items: center;
    span {
      padding: 0.2vw 2.4vw;
      border-radius: 4vw;
      font-size: 1.6vw;
    }
  }
`;

const Network = styled.div`
  background: rgb(73, 76, 144);
  borderradius: 12px;
  padding: 11px 10px;
  color: white;
  fontsize: 14px;
  fontweight: 600;
  lineheight: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    margin-right: 8px;
  }
  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const LogoMobile = styled(IconLogoMobile)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const LogoPc = styled(IconLogoPc)`
  display: block;
  margin-right: 12px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  .menu-pc {
    display: block;
  }
  .menu-mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    padding: 1.6vw 2.1vw !important;
    border-bottom: 1px solid white;
    .connect-wallet {
      border-radius: 5vw;
      height: 32px;
      //padding: 0;
      display: flex;
      align-items: center;
      margin-right: 3vw;
    }
    .menu-pc {
      display: none;
    }
    .menu-mobile {
      display: block;
      position: relative;
      svg {
        width: 32px;
      }
    }
  }
`;

const Menu = styled.div`
  padding: 8px 0;
  background: #ffffff;
  position: absolute;
  top: 110%;
  right: 0;
  width: 100px;
  border-radius: 8px;
  border: 1px solid rgb(81, 85, 166);
  .menu-item {
    color: #5d6785;
    a {
      padding: 6px;
      text-decoration: none;
      display: block;
      width: 100%;
      color: #5d6785;
    }
    &:hover {
      background: #eeeeee;
    }
  }
`;

const useStyles = makeStyles(
  ({ constants, palette, zIndex, breakpoints }: ITheme) => {
    return createStyles({
      root: {
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        padding: `${constants.generalUnit * 2}px ${
          constants.generalUnit * 4
        }px`,
        width: "100%",
        top: 0,
        left: 0,
        color: palette.additional["header"][1],
        alignItems: "center",
        zIndex: zIndex?.layer2,
      },
      left: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      // logo: {
      //   marginRight: '12px'
      // },
      state: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      indicator: {
        display: "block",
        height: 10,
        width: 10,
        borderRadius: "50%",
        backgroundColor: palette.additional["green"][6],
        marginRight: constants.generalUnit,
      },
      address: {
        marginRight: constants.generalUnit,
      },
      network: {},
      connectWallet: {
        background: "rgb(73, 76, 144)",
        borderRadius: "12px",
        padding: "14px",
        color: "white",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "16px",
        cursor: "pointer",
        marginRight: "32px",
      },
    });
  }
);

const navList: { name: string; link: string; icon: React.ReactNode }[] = [
  {
    name: "Explorer",
    link: "https://test-explorer.omtch.com/",
    icon: <IconExplorer className={"nav-item-icon"} />,
  },
  {
    name: "Pool",
    link: "https://test-swap.omtch.com/#/pool",
    icon: <IconSwap className={"nav-item-icon"} />,
  },
];

interface IAppHeader {}

const AppHeader: React.FC<IAppHeader> = () => {
  const classes = useStyles();
  const {
    isReady,
    address,
    wallet,
    onboard,
    checkIsReady,
    network,
  } = useWeb3();
  const { homeChain } = useChainbridge();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("test-------");

  const handleConnect = async () => {
    !wallet && (await onboard?.walletSelect());
    await checkIsReady();
    if (network && network !== 816 && network !== 97) {
      await switchToNetwork({ chainId: 816 });
      window.location.reload();
    }
  };
  const ethereum = (window as any)?.ethereum;

  useEffect(() => {
    async function updateChain() {
      if (ethereum) {
        if (network && network !== 816 && network !== 97) {
          await switchToNetwork({ chainId: 816 });
          window.location.reload();
        }
      }
    }
    updateChain();
  }, [network, ethereum]);

  return (
    <HeaderWrapper className={clsx(classes.root)}>
      <div className={classes.left}>
        {/* <div className={classes.logo}>
          <img alt="Moonbeam logo" src={logo}></img>
        </div> */}
        <LogoMobile />
        <LogoPc />
        {/*<Typography variant="h4">Omega Alpha ChainBridge</Typography>*/}
        {navList.map((nav) => (
          <NavItem key={nav.name}>
            <a href={nav.link} target={"_blank"}>
              <div className="icon-wrapper">{nav.icon}</div>
              {nav.name}
            </a>
          </NavItem>
        ))}
      </div>
      <section className={classes.state}>
        {address ? (
          <>
            {homeChain?.name && (
              <Network>
                <IconExplorer />
                <span>{homeChain?.name}</span>
              </Network>
            )}
            <Address>
              <IconMetamask />
              <span>{shortenAddress(address)}</span>
            </Address>
          </>
        ) : (
          <button
            onClick={handleConnect}
            className={clsx(classes.connectWallet, "connect-wallet")}
          >
            Connect Wallet
          </button>
        )}
        {/*{!isReady ? (*/}
        {/*  <Typography variant="h5">No wallet connected</Typography>*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*    <div className={classes.indicator}></div>*/}
        {/*    <Typography variant="h5" className={classes.address}>*/}
        {/*      {address && shortenAddress(address)}*/}
        {/*    </Typography>*/}
        {/*    <Typography variant="h5" className={classes.address}>*/}
        {/*      connected to <strong>{homeChain?.name}</strong>*/}
        {/*    </Typography>*/}
        {/*  </>*/}
        {/*)}*/}
        {/*<IconEllipsis className={"menu-pc"} style={{ cursor: "pointer" }} />*/}
        <div className={"menu-mobile"} onClick={() => setMenuOpen(!menuOpen)}>
          <IconMenu />
          {menuOpen && (
            <Menu>
              {navList.map((nav) => (
                <div className={"menu-item"} key={nav.name}>
                  <a href={nav.link} target={"_blank"}>
                    {/*<div className="icon-wrapper">{nav.icon}</div>*/}
                    {nav.name}
                  </a>
                </div>
              ))}
            </Menu>
          )}
        </div>
      </section>
    </HeaderWrapper>
  );
};

export default AppHeader;
