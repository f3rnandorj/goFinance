import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSVG from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import {
  Container,
  Footer,
  Header,
  SignInTitle,
  Title,
  TitleWrapper,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples {"\n"}
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"}uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer></Footer>
    </Container>
  );
}
