import React from "react";
import { View, Text, Image } from "react-native";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Screen } from "../components/Screen";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { Row } from "../components/Row";
import { Column } from "../components/Column";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header />
      <Screen>
        <Container>
          <Row>
            <Column>
              <Card>
                <List title="Documenation and customization articles" />
              </Card>
            </Column>
            <Column>
              <Card>
                <Row>
                  <Column>
                    <List title="Documenation and customization articles" />
                  </Column>
                  <Column>
                    <View>
                      <Button title="Learn more" />
                    </View>
                  </Column>
                </Row>
              </Card>
            </Column>
          </Row>
          <Card>
            <Title>React Native Admin Template</Title>
            <List
              divider
              title="React Native: Determine number of lines of Text component"
              description="At runtime, how can I determine how many lines this Text component has rendered. This number will vary depending on device (eg. iPhone 5 will need to render more lines vs iPhone 6+ as it has a smaller screen size). I've checked the source code for the Text component but there doesn't seem to be anything I'm looking for."
            />
            <Divider />
            <List
              divider
              title="Hire us to customise"
              description="We would like to work on cool projects. If you have an awesome Idea, Please let us know so that we can see them come to life"
            />
            <Divider />
            <List
              title="I like colorful components"
              description="Why does this component does not look like material UI components ?. May be I want some more freedom"
            />
          </Card>
          <Row responsive={true}>
            <Column>
              <Card>
                <Image
                  style={{ width: '100%', height: 450 }}
                  source={{
                    uri:
                      "https://bananweb.com/wp-content/uploads/2019/04/webdevelopment.svg"
                  }}
                />
                <Title>UI Toolkit</Title>
                <Paragraph>
                  UI Kitten is a framework that contains a set of commonly used
                  UI components styled in a similar way. The most awesome thing:
                  you can change themes on the fly by just passing a different
                  set of variables. 100% native. Give our kitten a try!
                </Paragraph>
              </Card>
            </Column>
            <Column>
              <Card>
                <Image
                  style={{ width: "100%", height: 450 }}
                  source={{
                    uri:
                      "https://www.aaravinfotech.com/assets/images/pages/aarav-infotechs-web-design-services-15d8d9ff445ff3.svg"
                  }}
                />
                <Title>UI Toolkit</Title>
                <Paragraph>
                  UI Kitten is a framework that contains a set of commonly used
                  UI components styled in a similar way. The most awesome thing:
                  you can change themes on the fly by just passing a different
                  set of variables. 100% native. Give our kitten a try!
                </Paragraph>
              </Card>
            </Column>
          </Row>
        </Container>
      </Screen>
    </View>
  );
};
