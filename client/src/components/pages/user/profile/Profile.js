import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { Jumbotron, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

const styles = {
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/236129/pexels-photo-236129.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  },
  mainDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid red',
    marginTop: '1%'
  },
  profileCardDiv: {
    display: 'flex',
    width: '33.3%'
  }
}

const Profile = props => {
  const { classes } = props
  return (
    <div>

      <Jumbotron className={classes.jumbotronDiv}>
        <div className={classes.jumboTrans}>
          <h1 className='display-3'>Welcome {props.firstName} to your Profile!</h1>
          <p className='lead'>Below is the information we have on file for you. </p>
          <hr className='my-2' />
          <p>Feel free to update your information at any time!</p>
          <p className='lead'>
            <p> Ready to See Some Gifts? </p>
            <Link to={'/AllGifts'}>
              <Button color='primary'>See All Gifts</Button>
            </Link>
          </p>
        </div>
      </Jumbotron>
      <div className={classes.mainDiv}>
        <div className={classes.profileCardDiv}>
          <Card>
            <CardImg top width='100%' src={'https://static.pexels.com/photos/41963/santa-claus-christmas-beard-celebration-41963.jpeg'} alt='Profile Image' />
            <CardBody>
              <CardTitle>{props.firstName} </CardTitle>
              <CardSubtitle>{props.lastName}</CardSubtitle>
              <CardText>
                <p>Email: {props.email}</p>
                <p>Address: {props.address}</p>
                <p>Phone: {props.phone}</p>
              </CardText>
              <div className={classes.kidUserButtons}>
                <Link to={'/EditProfile'}>
                  <Button outline color='primary'>Edit Profile</Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = propTypes

export default withStyles(styles)(Profile)
