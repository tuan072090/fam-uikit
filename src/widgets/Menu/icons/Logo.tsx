import React from "react";
import {SvgProps} from "../../../components/Svg";

interface LogoProps extends SvgProps {
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({isDark}) => {
    return (
        <img style={{maxWidth: '100%', maxHeight: '100%'}} src="https://media.meete.co/cache/200x0/2021/07/24/5141b24f-0b23-480f-bec9-ad458c455a68.png" alt="Fam logo"/>
    );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
