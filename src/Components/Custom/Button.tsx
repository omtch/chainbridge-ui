import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import IconLoading from "../../assets/icon_loading.svg";

const ButtonWrapper = styled.button`
  width: 100%;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(73, 76, 144);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04);

  border-radius: 16px;

  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
  .loading {
    animation: rotate 1s linear infinite;
    margin-right: 6px;
    @keyframes rotate {
      0% {
        transform: rotateZ(0deg); /*从0度开始*/
      }
      100% {
        transform: rotateZ(360deg); /*360度结束*/
      }
    }
  }
`;

interface Props {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick: any;
  label: string;
}

export const Button: React.FC<Props> = ({
  onClick,
  label,
  loading = false,
  disabled = false,
  className = "",
}: Props) => {
  const _onClick = () => {
    if (disabled) return;
    onClick();
  };
  return (
    <ButtonWrapper
      className={clsx(className)}
      disabled={disabled || loading}
      onClick={_onClick}
    >
      {loading && <img className={"loading"} src={IconLoading} alt="" />}
      {label}
    </ButtonWrapper>
  );
};
