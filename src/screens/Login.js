import React, { useState } from "react";
import { View } from "react-native";
import { Redirect, Link } from "react-router-native";
import { Screen } from "../components/Screen";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { Input } from "../components/Input";
import { Button, LinkText } from "../components";
import { CheckBox } from "../components/CheckBox";
import { Text } from "../components/Text";
import { Content } from "../components/Content";

import { Formik } from "formik";
import * as yup from "yup";

export const LoginScreen = () => {
  const [valid, setValid] = useState(false);
  const [remember, setRemember] = useState(false);

  if (valid) {
    return <Redirect to={"/"} />;
  }

  return (
    <Screen scrollable={false}>
      <Container>
        <Card>
          <Content centered p={16}>
            <Content p={24}>
              <Title>Login</Title>
              <Paragraph>Hello! Log in with your email.</Paragraph>
            </Content>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email()
                  .required(),
                password: yup
                  .string()
                  .min(6)
                  .required()
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  setValid(true);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid
                /* and other goodies */
              }) => (
                <Content>
                  <Input
                    type="email"
                    label="Email address:"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholder="Email"
                    error={errors.email}
                  />
                  <Input
                    label="Password"
                    type="password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholder="password"
                    secure={true}
                    error={errors.password}
                  />
                  <CheckBox
                    title="Remember me"
                    value={remember}
                    onChange={value => setRemember(value)}
                  />
                  <Button
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </Content>
              )}
            </Formik>
            <Link to="/register">
              <Text>
                Don't have an account? <LinkText title="Register" />
              </Text>
            </Link>
          </Content>
        </Card>
      </Container>
    </Screen>
  );
};
