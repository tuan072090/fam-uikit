import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import {SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED} from "../config";
import {PanelProps, PushedProps} from "../types";
import {LogoIcon} from "../icons";

interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({theme}) => theme.nav.background};
  width: ${({isPushed}) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: ${({isPushed}) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({isPushed}) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({isPushed}) => !isPushed && "white-space: nowrap;"};

  ${({theme}) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({isPushed}) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const StyledLogo = styled.div`
    height: 100px;
    margin: 20px 5px;
    text-align: center;
`


const Panel: React.FC<Props> = (props) => {
    const {isPushed, showMenu, isDark} = props;
    return (
        <StyledPanel isPushed={isPushed} showMenu={showMenu}>
            <StyledLogo>
                <LogoIcon isDark={isDark}/>
            </StyledLogo>
            <PanelBody {...props} />
            <PanelFooter {...props} />
        </StyledPanel>
    );
};

export default Panel;
