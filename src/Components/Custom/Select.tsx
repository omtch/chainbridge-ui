import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as IconArrow } from "../../assets/icon_arrow.svg";
import clsx from "clsx";

const SelectWrapper = styled.div`
  background: white;
  border: 1px solid rgb(73, 76, 144);
  border-radius: 20px;
  padding: 8px;
  position: relative;
  width: 40%;
  min-height: 44px;
  cursor: pointer;
  .selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .selector-chain {
      display: flex;
      align-items: center;
    }
    .arrow {
      &.open {
        transform: rotate(180deg);
      }
    }
  }
  .select-options {
    position: absolute;
    top: 110%;
    left: 0;
    border: 1px solid rgb(73, 76, 144);
    width: 100%;
    background: white;
    z-index: 100;
    padding: 6px 8px;
    border-radius: 8px;
    .option-item {
      display: flex;
      align-items: center;
      margin: 0 -8px;
      padding: 4px 8px;

      &:hover {
        background: #eeeeee;
        cursor: pointer;
      }
    }
  }
  .chain-name {
    margin-left: 6px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
    .selector-chain {
      white-space: nowrap;
    }
  }
`;

export type Chain = {
  name: string;
  logo: string;
  value: number;
};

interface Props {
  options: Chain[];
  onChange: (val: Chain) => void;
  selectedChain: Chain;
}
export const Select: React.FC<Props> = ({
  options,
  onChange,
  selectedChain,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <SelectWrapper onClick={() => setOpen(!open)}>
      <div className="selector">
        <div className={"selector-chain"}>
          <img src={selectedChain.logo} alt="" />
          <span className={"chain-name"}>{selectedChain.name}</span>
        </div>
        <IconArrow className={clsx("arrow", open ? "open" : "close")} />
      </div>
      {open && (
        <div className="select-options">
          {options.map((op) => (
            <div
              onClick={() => {
                onChange(op);
                setOpen(false);
              }}
              className={"option-item"}
              key={op.name}
            >
              <img src={op.logo} alt={""} />
              <span className={"chain-name"}>{op.name}</span>
            </div>
          ))}
        </div>
      )}
    </SelectWrapper>
  );
};
