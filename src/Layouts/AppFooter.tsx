import React from "react";
import styled from "styled-components";
import { ReactComponent as IconTwitter } from "../assets/icon_twitter.svg";
import { ReactComponent as IconYoutube } from "../assets/icon_youtube.svg";
import { ReactComponent as IconHome } from "../assets/icon_home.svg";
import { ReactComponent as IconTelegram } from "../assets/icon_telegram.svg";

const Wrapper = styled.section`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-wrapper {
    display: flex;
    align-items: center;
    padding: 18px 0 24px 0;
    .icon-item {
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .link-wrapper {
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: space-between;
    .link-item {
      cursor: pointer;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  svg {
    path {
      fill: white;
    }
  }
`;

const icons = [
  {
    icon: <IconHome />,
    link: "https://omtch.com",
  },
  {
    icon: <IconTelegram />,
    link: "https://t.me/OmegaNetworkTeam",
  },
  {
    icon: <IconTwitter />,
    link: "https://twitter.com/omcoreteam",
  },
  {
    icon: <IconYoutube />,
    link: "https://youtube.com/@OmegaCoreTeam",
  },
];

const links = [
  {
    label: "Contact Support",
    link: "https://t.me/OmegaNetworkTeam",
  },
  {
    label: "Terms of Service",
    link: "",
  },
  {
    label: "Privacy Policy",
    link: "",
  },
];

const AppFooter: React.FC = () => {
  return (
    <Wrapper>
      <div className={"powered"}>Powered by Omega Network bridge</div>
      <div className={"icon-wrapper"}>
        {icons.map((i) => (
          <IconItem
            className={"icon-item"}
            onClick={() => window.open(i.link)}
            key={i.link}
          >
            {i.icon}
          </IconItem>
        ))}
      </div>
      <div className={"link-wrapper"}>
        {links.map((i) => (
          <div
            className={"link-item"}
            onClick={() => (i.link ? window.open(i.link) : {})}
            key={i.link}
          >
            {i.label}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AppFooter;
