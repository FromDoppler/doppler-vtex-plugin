import React from 'react'
import { Link } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

export const ConnectionStepsSection = () => {
  return (
    <div>
      <h4 className="t-heading-4 mt0">
        {<FormattedMessage id="admin.dopplersteps.title" />}
      </h4>
      <p className="t-body lh-copy mw9">
        {<FormattedMessage id="admin.dopplersteps.subtitle" />}
        <Link
          href="https://help.fromdoppler.com/en/how-to-integrate-doppler-with-vtex"
          target="_blank"
        >
          {' '}
          {<FormattedMessage id="admin.dopplersteps.link" />}
        </Link>
      </p>
    </div>
  )
}
