import React, { useState } from "react";
import { Text } from "../components/Text";
import { Screen } from "../components/Screen";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { LinkText } from "../components/LinkText";
import { Link } from "react-router-native";
import { CheckBox } from "../components/CheckBox";


export const RegisterScreen = () => {
  const [value, setValue] = useState();
  const [agreed, setAgreed] = useState();
  return (
    <Screen scrollable={false}>
      <Container>
        <Card>
          <Title>Create an account</Title>
          <Input label="Username" placeholder="Name" value={value} onChangeText={setValue} />
          <Input label="Password" placeholder="Password" value={value} onChangeText={setValue} />
          <Input label="Repeat Password" placeholder="Confirm Password" value={value} onChangeText={setValue} />
          <CheckBox title="Agree to Terms & Conditions" value={agreed} onChange={setAgreed} />
          <Button title={"Create"} />
          <Link to="/login"><Text>Already have an account?<LinkText title="Log in" /></Text></Link>
        </Card>
      </Container>
    </Screen>
  );
};
