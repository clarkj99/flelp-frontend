import React from 'react'
import { Container, Form, Input, Button, Message, Header, Segment } from 'semantic-ui-react'

class Signup extends React.Component {

    componentWillUnmount() {
        this.props.resetError()
    }

    render() {
        const { handleLoginChange, handleSubmit, user, error } = this.props
        return (
            <Container textAlign="center">
                <Header inverted as="h2">Signup</Header>
                <Segment textAlign="left">
                    <Form error={!!error} onSubmit={handleSubmit}>
                        <Form.Field
                            label='Username'
                            onChange={handleLoginChange}
                            control={Input}
                            placeholder='Username'
                            name='username'
                            value={user.username}
                        />
                        <Form.Field
                            label='Display Name'
                            onChange={handleLoginChange}
                            control={Input}
                            type='text' placeholder='Display Name'
                            name='display_name'
                            value={user.display_name}
                        />
                        <Form.Field
                            label='Password'
                            onChange={handleLoginChange}
                            control={Input}
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={user.password}
                        />

                        <Message
                            error
                            header='Action Forbidden'
                            content={error ? error : ''}
                        />

                        <Button type='submit'>Login</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}

export default Signup