import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'


const propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 10,
    width: '33.33%',
    height: '33.33%'
  },
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/259890/pexels-photo-259890.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  }
}

const enhancer = injectSheet(styles)

const LoginForm = props => {
  const { classes } = props

  return (
    <div>
      <Jumbotron className={classes.jumbotronDiv}>
        <div className={classes.jumboTrans}>
          <h1 className='display-3'>Login to your Account</h1>
          <p className='lead'>This is the login for All Account Types</p>
          <hr className='my-2' />
        </div>
      </Jumbotron>
      <div className={classes.container}>
        <form className={classes.input}>
          <TextField
            id='email'
            label='Email'
            className={classes.textField}
            value={props.email}
            onChange={props.onEmailChanged}
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            className={classes.textField}
            value={props.password}
            onChange={props.onPasswordChanged}
          />
          <Button className={classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
        </form>
      </div>
    </div>
  )
}

LoginForm.propTypes = propTypes

export default enhancer(LoginForm)
