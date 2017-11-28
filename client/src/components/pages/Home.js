import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const styles = {
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/77078/theme-christmas-77078.jpeg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoon: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://blog.proto.io/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Guides.gif")',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoonTitle: {
    fontSize: '3em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '100px',
    marginTop: '100px'
  },
  iconImgContainer: {
    textAlign: 'center',
    width: '50%',
    border: 'solid red'
  },
  iconImg: {
    width: '50%'
  },
  futureTitle: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px',
    background: '#F5F5F5'
  },
  futureBucket: {
    display: 'flex',
    flexDirection: 'row',
    background: '#F5F5F5',
    paddingBottom: '100px'
  },
  futureContent: {
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  futurePic: {
    width: '50%'
  },
  futurePicImg: {
    width: '100%'
  },
  parallaxDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-an-espresso_925x@2x.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  futureTitle2: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px'
  },
  futureBucket2: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '100px'
  },
  futureContent2: {
    width: '50%',
    textAlign: 'Left',
    paddingLeft: '10px'
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '15%',
    paddingRight: '15%',
    background: '#8e44ad',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  EditButton: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  EditButton2: {
    backgroundColor: '#494949',
    color: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer2: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'space-around'
  },
  heroTitleContainer: {
    width: '66.67%',
    paddingLeft: '3%'
  },
  heroGraphicContainer: {
    width: '33.33%'
  },
  heroGraphic: {
    width: '100%'
  },
  futureContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    justifyContent: 'center'
  },
  futureTitle: {
    textAlign: 'center',
    marginTop: '50px'
  },
  futureDivider: {
    width: '50%',
    background: '#bdc3c7',
    height: '2px'
  },
  futureDividerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureSubTitle: {
    textAlign: 'center',
    width: '35%',
    fontFamily: 'Quicksand,sans-serif',
    color: '#7f8c8d'
  },
  futureSubTitleContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureIconBucket: {
    display: 'flex',
    flexDirection: 'row'
  },
  futureIconBucketLeft: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  futureIconBucketCenter: {
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  futureIconBucketRight: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  leftBucket: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px'
  },
  leftBucketText: {
    display: 'flex',
    alignItems: 'center',
    width: '75%',
    paddingLeft: '5px',
    color: '#7f8c8d',
    paddingRight: '4px'
  },
  leftBucketIcon: {
    width: '25%'
  },
  leftImg: {
    width: '100%'
  },
  futureButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '25px'
  },
  steps: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px'
  },
  introContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftColumn: {
    width: '60%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  rightColumn: {
    width: '40%'
  },
  introPic: {
    width: '100%'
  },
  introTitle: {
    fontFamily: 'Nunito',
    textTransform: 'capitalize'
  },
  explainerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%'
  },
  explainerLeft: {
    width: '50%',
    textAlign: 'center'
  },
  explainerRight: {
    width: '50%',
    textAlign: 'center'
  }
}

const propTypes = {
  classes: PropTypes.object.isRequired
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <div className={props.classes.heroTitleContainer}>
          <h1 className={props.classes.heroTitle}> Operation Xmas Jammies </h1>
          <h3 className={props.classes.heroSubTitle}>Spreading Christmas Cheer One Pair of Jammies at a Time</h3>
        </div>
        <div className={props.classes.heroGraphicContainer}>
          <img className={props.classes.heroGraphic} src='http://icons.iconarchive.com/icons/psdblast/flat-christmas/512/christmas-tree-icon.png' />
        </div>
      </div>
      <div className={props.classes.steps}>
        <h1> Giving Gifts Never Felt So Good </h1>
      </div>

      <div className={props.classes.introContainer}>
        <div className={props.classes.leftColumn}>
          <h1 className={props.classes.introTitle}>
          PKS Affects only xxx kids in the world
          </h1>
          <p>
          This holiday season give the gift of comfort and coziness to
          a child with PKS This holiday season give the gift of comfort and coziness to
          a child with PKS This holiday season give the gift of comfort and coziness to
          a child with PKS This holiday season give the gift of comfort and coziness to
          a child with PKS This holiday season give the gift of comfort and coziness to
          a child with PKS
          </p>
        </div>
        <div className={props.classes.rightColumn}>
          <img className={props.classes.introPic} src='http://d-cadou.com/images/imageManager/gift.png' />
        </div>
      </div>

      <div className={props.classes.explainerContainer}>
        <div className={props.classes.explainerLeft}>
          <h1> To Receive </h1>
          To request a Gift please click on the link below and
          fill out the form with the necessary information
        </div>
        <div className={props.classes.explainerRight}>
          <h1> To Give </h1>
          To fulfill a Gift please click on the link below and
          visit our Giving Tree page to see the available Gifts
          that need to be fulfilled.
        </div>
      </div>

      <div className={props.classes.iconDiv}>
        <div className={props.classes.iconImgContainer}>
          <img className={props.classes.iconImg} src='http://www.youthvillage.org/images/gift-loop.gif' />
          <Link to={'/AllGifts'}>
            <h1>Receive a Gift</h1>
          </Link>
        </div>
        <div className={props.classes.iconImgContainer}>
          <img className={props.classes.iconImg} src='http://www.youthvillage.org/images/gift-loop.gif' />
          <Link to={'/AllGifts'}>
            <h1>Fulfill a Gift</h1>
          </Link>
        </div>
      </div>

    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
