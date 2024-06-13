import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { ButtonIcon } from "@components/General/Button/Button";
import Container from "@components/General/Container";
import { SubTitle } from "@components/General/Text";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { useRouter } from "next/router";

const HeaderStore = ({ name }) => {
  const router = useRouter();

  return (
    <Container as="header" $bg="text">
      <WrapperFlex
        $flexdirection="row"
        $justifycontent="space-between"
        $bg="transparent"
      >
        <ButtonIcon $color="white" onClick={() => router.back()}>
          <BiArrowBack />
        </ButtonIcon>
        <SubTitle $color="white" $weight={500}>
          {name}
        </SubTitle>
        <div></div>
      </WrapperFlex>
    </Container>
  );
};

export default HeaderStore;
