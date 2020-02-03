import React, { useState } from "react";
import { Redirect, Link } from "react-router-native";
import { Screen } from "../components/Screen";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Image } from "react-native";
import { CheckBox } from "../components/CheckBox";
import { Text } from '../components/Text';
import ImageContent from '../../assets/emotion.png'
import { LinkText } from "../components/LinkText";

export const LoginScreen = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [valid, setValid] = useState(false);
  const [remember, setRemember] = useState(false);

  const onSubmit = () => {
    setValid(true);
  };

  if (valid) {
    return <Redirect to={"/"} />;
  }

  return (
    <Screen scrollable={false}>
      <Container>
        <Card>
          <Title>Login</Title>
          <Paragraph>Hello! Log in with your email.</Paragraph>
          <Input
            label="Email address:"
            value={name}
            onChangeText={setName}
            placeholder="Email"
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="password"
            secure={true}
            error={"Please enter the input"}
          />
          <CheckBox title="Remember me" value={remember} onChange={value => setRemember(value)} />
          <Button title="Submit" onPress={onSubmit} />
          <Link to="/register"><Text>Don't have an account? <LinkText title="Register" /></Text></Link>
        </Card>
      </Container>
    </Screen>
  );
};
