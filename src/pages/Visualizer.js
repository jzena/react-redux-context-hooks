import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import './Products.css';

class VisualizerPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={ this.props.cartItemCount } />
        <main className="visualizer">
          hi visualizer:
          <br></br>
          <visualiser-360
            colors='[{"colorcode":"XGJ"},{"colorcode":"DAP"},{"colorcode":"GAT"}]'
            isProduction="true"
            componentID='Nav123456'
            stickyNavId='Nav123456'
            drivemode='rhd'
            visualiserBodyCopy='BodyCopy for Visualiser360 component'
            ctaLabel='CTA Text'
            ctalink='https://google.com'
            visualiserLogo='/content/dam/NISSAN/ARIYA-logo.png'
            visualiserLogoAlt='*'
            ctaMore='X MORE COLOURS'
            ctaLess='X LESS COLOURS'
            ctaButton='Drive Ariya'
            ctaLights='Toggle Lights'
          >
          </visualiser-360>
        </main>
      </React.Fragment>
    );
  }
}

export default VisualizerPage;