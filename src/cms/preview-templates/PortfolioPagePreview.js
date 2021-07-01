import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPageTemplate } from '../../templates/portfolio-page'

const PortfolioPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PortfolioPageTemplate
        title={data.title}
        heading={data.heading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PortfolioPagePreview
