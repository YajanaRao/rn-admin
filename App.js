import React from 'react'
import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import { Screen } from './src/components/Screen';
import { Container } from './src/components/Container';
import { Card } from './src/components/Card';
import { Title } from './src/components/Title';
import { Paragraph } from './src/components/Paragraph';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';

const DefaultTheme = {
    primary: 'blue',
    card: '#ebeff5',
    text: '#000000',
    backgroundColor: '#ffffff'
}

const DarkTheme = {
    primary: 'blue',
    card: '#222b45',
    text: '#ffffff',
    backgroundColor: '#101426'
}

const Image = styled.Image`
  padding: 40px;
`

const emotionLogo =
    'https://cdn.rawgit.com/emotion-js/emotion/master/emotion.png'

class App extends React.Component {
    state = {
        theme: DefaultTheme,
        value: ''
    }

    onChangeText = (text) => {
        this.setState({ value: text });
    }
    render() {
        const { theme, value } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Screen>
                    <Container>
                        <Card>
                            <Title>
                                Login
                        </Title>
                            <Paragraph>
                            Hello! Log in with your email.
                            </Paragraph>
                            <Image
                                source={{
                                    uri: emotionLogo,
                                    height: 150,
                                    width: 150
                                }}
                            />
                            <Input label="Email address:" value={value} onChangeText={this.onChangeText} />
                            <Input label="Password" value={value} onChangeText={this.onChangeText} error={"Please enter the input"} />
                            <Button title="Submit" onPress={() => this.setState({ theme: DarkTheme })} />
                        </Card>
                    </Container>
                </Screen>
            </ThemeProvider>
        )
    }
}

export default App;