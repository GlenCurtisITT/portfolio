import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
.project {
  display: grid;
  margin: 100px auto 100px;
  max-width: 960px;
  grid-template-columns: 1.25fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 140px;
  text-align: center;
}

.small-image-container {
  overflow: hidden;
  max-width: 75%;
  grid-column: 2;
  grid-column-end: 2;
  grid-row: 2;
}
.small-image {
  max-width: 100%;
}

.large-image-container {
  overflow: hidden;
  margin: 0 0 auto 0;
  width: 100%;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.large-image {
  width: 100%;
}

.text-box {
  position: relative;
  margin: auto 0;
  text-align: left;
  grid-column: 2;
  grid-row: 1;
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.statement {
  margin-top: 20px;
  font-size: 16px;
}

.animated {
  animation: 3s inset;
}

@keyframes inset {
  0% {
    transform: scale(1.4);
    clip-path: inset( 100% 0% 0% 0%);
  }

  100% {
    transform: scale(1);
    clip-path: inset( 0% 0% 0% 0%);
  }
}
`

export class ProjectSlideReversed extends React.Component {
  render() {
    return (
      <Styled>
        <div className="project">
          <div className="text-box">
            <div className="title">
              Top-Notch photos. Taken up a notch.
            </div>
            <div className="statement">
              HDR+ makes your photos look even better by automatically adjusting the colour and lighting.
            </div>
          </div>
          <div className="large-image-container">
            <img src={this.props.largeImage} className={`project-image large-image ` +this.props.animate1} alt="large" />
          </div>
          <div className="small-image-container">
            <img src={this.props.smallImage} className={`project-image small-image ` +this.props.animate2} alt="small" />
          </div>
          
        </div>
      </Styled>
    )
  }
}

export default ProjectSlideReversed;