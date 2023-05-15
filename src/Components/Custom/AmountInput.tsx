import React from "react";
import styled from "styled-components";
import { TokenConfig } from "../../chainbridgeConfig";

const AmountInputWrapper = styled.div`
  padding: 18px 12px;
  border-radius: 16px;
  background: rgb(73, 76, 144);
  margin-bottom: 21px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding-bottom: 22px;
    min-height: 44px;
    .max {
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      color: white;
      text-decoration: underline white;
      cursor: pointer;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    width: 100%;
    .amount-input {
      flex: 1;
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
      background: #4a4c8c;
      color: white;
      border: none;
      outline: none;
      &::placeholder {
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        color: white;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
    .token {
      display: flex;
      align-items: center;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      img {
        margin-right: 5px;
      }
    }
  }
`;

interface Props {
  label: string;
  inputValue: string;
  handleInputChange?: (val: string) => void;
  maxAmount?: number;
  disabled?: boolean;
  token?: TokenConfig;
}

export const AmountInput: React.FC<Props> = ({
  label,
  inputValue,
  handleInputChange,
  maxAmount,
  token,
  disabled = false,
}: Props) => {
  return (
    <AmountInputWrapper>
      <div className={"top"}>
        <div>{label}</div>
        {maxAmount ? (
          <div
            className={"max"}
            onClick={() =>
              token &&
              handleInputChange &&
              handleInputChange(maxAmount.toString())
            }
          >
            Max: {maxAmount}
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className={"bottom"}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) =>
            token && handleInputChange && handleInputChange(e.target.value)
          }
          disabled={disabled}
          className={"amount-input"}
          placeholder={"0.0"}
        />
        <div className={"token"}>
          {token && (
            <>
              <img src={token?.imageUri} alt="" />
              {token?.symbol}
            </>
          )}
        </div>
      </div>
    </AmountInputWrapper>
  );
};
