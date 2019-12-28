import React, { Fragment } from 'react'
import { Form, Input, Button, Message, Header } from 'semantic-ui-react'

class Signup extends React.Component {

    componentWillUnmount() {
        this.props.resetError()
    }

    render() {
        const { handleLoginChange, handleSubmit, user, error } = this.props
        return (
            <Fragment>
                <Header>Signup</Header>
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
            </Fragment>
        )
    }
}

export default Signup