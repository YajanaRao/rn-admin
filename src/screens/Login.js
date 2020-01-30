import React, { useState } from "react";
import styled from "@emotion/native";
import { Redirect } from "react-router-native";
import { Screen } from "../components/Screen";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Image = styled.Image`
  padding: 40px;
`;

const emotionLogo =
  "https://cdn.rawgit.com/emotion-js/emotion/master/emotion.png";

export const LoginScreen = () => {
  const [value, setValue] = useState();
  const [valid, setValid] = useState(false);

  const onSubmit = () => {
    setValid(true);
  };

  if (valid) {
    return <Redirect to={"/"} />;
  }

  return (
    <Screen>
      <Container>
        <Card>
          <Title>Login</Title>
          <Paragraph>Hello! Log in with your email.</Paragraph>
          <Image
            source={{
              uri: emotionLogo,
              height: 150,
              width: 150
            }}
          />
          <Input
            label="Email address:"
            value={value}
            onChangeText={setValue}
            placeholder="Email"
          />
          <Input
            label="Password"
            value={value}
            onChangeText={setValue}
            placeholder="password"
            error={"Please enter the input"}
          />

          <Button title="Submit" onPress={onSubmit} />
        </Card>
      </Container>
    </Screen>
  );
};
