import React, { useState } from "react";
import { Text } from "../components/Text";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button, LinkText, Screen } from "../components";
import { Link } from "react-router-native";
import { CheckBox } from "../components/CheckBox";

import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

export const RegisterScreen = () => {
  const [value, setValue] = useState();
  const [agreed, setAgreed] = useState();
  return (
    <Screen scrollable={false}>
      <Container>
        <Card>
          <Content centered p={16}>
            <Title>Create an account</Title>
            <Formik
              initialValues={{ name: "", password: "", agree: false }}
              validationSchema={yup.object().shape({
                name: yup.string().required(),
                password: yup
                  .string()
                  .min(6)
                  .required(),
                agree: yup.boolean().required()
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
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
                    label="Username"
                    placeholder="Name"
                    value={values.name}
                    onChangeText={handleChange("name")}
                    error={errors.name}
                  />
                  <Input
                    label="Password"
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secure={true}
                    error={errors.password}
                  />
                  <Input
                    label="Repeat Password"
                    placeholder="Confirm Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secure={true}
                    error={errors.password}
                  />
                  <CheckBox
                    title="Agree to Terms & Conditions"
                    value={values.agree}
                    onChange={handleChange("agree")}
                  />
                  <Button
                    title={"Create"}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </Content>
              )}
            </Formik>
            <Link to="/login">
              <Text>
                Already have an account?
                <LinkText title="Log in" />
              </Text>
            </Link>
          </Content>
        </Card>
      </Container>
    </Screen>
  );
};
