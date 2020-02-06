import React from "react";
import { View, FlatList } from "react-native";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Screen } from "../components/Screen";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { Column } from "../components/Column";
import { Button, Grid } from "../components";
import { Divider } from "../components/Divider";
import { Image } from "../components/Image";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header />
      <Screen>
        <Container>
          <Grid>
            <Grid item>
              <Card>
                <List title="Documenation and customization articles" />
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <Grid p={8}>
                  <Grid item>
                    <List title="Documenation and customization articles" />
                  </Grid>
                  <Grid item>
                    <Button title="Learn more" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Card>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={{
                    uri: "https://picsum.photos/400/300"
                  }}
                />
                <Content>
                  <Title>{item.title}</Title>
                  <Paragraph>
                    UI Kitten is a framework that contains a set of commonly
                    used UI components styled in a similar way. The most awesome
                    thing: you can change themes on the fly by just passing a
                    different set of variables. 100% native. Give our kitten a
                    try!
                  </Paragraph>
                </Content>
              </Card>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Divider />}
          />
          <Card>
            <Title style={{ margin: 12 }}>React Native Admin Template</Title>
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
          <Grid responsive={true}>
            <Grid item>
              <Card>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={{
                    uri:
                      "https://www.mindinventory.com/blog/wp-content/uploads/2018/02/ui-design1200.jpg"
                  }}
                />
                <Content>
                  <Title>UI Toolkit</Title>
                  <Paragraph>
                    UI Kitten is a framework that contains a set of commonly
                    used UI components styled in a similar way. The most awesome
                    thing: you can change themes on the fly by just passing a
                    different set of variables. 100% native. Give our kitten a
                    try!
                  </Paragraph>
                </Content>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={{
                    uri:
                      "https://ubiedigital.com/wp-content/uploads/2016/08/atomic-design.jpg"
                  }}
                />
                <Content>
                  <Title>Automic Design</Title>
                  <Paragraph>
                    UI Kitten is a framework that contains a set of commonly
                    used UI components styled in a similar way. The most awesome
                    thing: you can change themes on the fly by just passing a
                    different set of variables. 100% native. Give our kitten a
                    try!
                  </Paragraph>
                </Content>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Screen>
    </View>
  );
};
