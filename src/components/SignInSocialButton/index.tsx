import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { Title, Button, ImageContainer } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Title>{title}</Title>
    </Button>
  );
}
