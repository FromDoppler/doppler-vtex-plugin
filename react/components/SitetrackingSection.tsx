import React, { useState } from 'react'
import { Toggle, Link } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

export const SitetrackingSection = () => {
  const [toggle, setToggleState] = useState(true)

  const changeToggleState = () => {
    setToggleState(!toggle)
  }

  return (
    <div>
      <h4 className="t-heading-4 mt0">
        {' '}
        {<FormattedMessage id="admin.sitetracking.title" />}
      </h4>
      <p className="t-body lh-copy mw9">
        {<FormattedMessage id="admin.sitetracking.subtitle" />}
        <Link
          href="https://help.fromdoppler.com/en/create-onsite-tracking-automation"
          target="_blank"
        >
          {' '}
          {<FormattedMessage id="admin.sitetracking.link" />}
        </Link>
      </p>
      <Toggle
        label={
          toggle ? (
            <FormattedMessage id="admin.sitetracking.toggle.enabled" />
          ) : (
            <FormattedMessage id="admin.sitetracking.toggle.disabled" />
          )
        }
        semantic
        checked={toggle}
        onChange={() => changeToggleState()}
      />
    </div>
  )
}
