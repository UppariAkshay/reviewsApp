// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNo: 0}

  nextBtn = () => {
    this.setState(prevState => ({
      reviewNo: prevState.reviewNo === 3 ? 3 : prevState.reviewNo + 1,
    }))
  }

  prevBtn = () => {
    this.setState(prevState => ({
      reviewNo: prevState.reviewNo === 0 ? 0 : prevState.reviewNo - 1,
    }))
  }

  render() {
    const {reviewNo} = this.state
    console.log(reviewNo)
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[reviewNo]
    return (
      <div className="bg-container">
        <div className="reviews-element">
          <h1 className="reviews-heading">Reviews</h1>
          <img alt="username" className="profile-image" src={imgUrl} />
          <div className="arrows-container">
            <button
              type="button"
              onClick={this.prevBtn}
              data-testid="leftArrow"
              className="btn-style"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <p className="userName">{username}</p>
            <button
              type="button"
              onClick={this.nextBtn}
              data-testid="rightArrow"
              className="btn-style"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
