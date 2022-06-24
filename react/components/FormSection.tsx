import React, { useState } from 'react'
import { Toggle, Textarea, Link, Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

export const FormSection = () => {
  const [toggle, setToggleState] = useState(true)

  const changeToggleState = () => {
    setToggleState(!toggle)
  }

  return (
    <div>
      <h4 className="t-heading-4 mt0">
        {' '}
        {<FormattedMessage id="admin.form.title" />}
      </h4>
      <p className="t-body lh-copy mw9">
        {<FormattedMessage id="admin.form.subtitle" />}
      </p>

      <ol className="t-small mw9">
        <li>
          {<FormattedMessage id="admin.form.list1" />}
          <Link href="https://app2.fromdoppler.com/Lists/Form" target="_blank">
            {' '}
            {<FormattedMessage id="admin.form.list1.link" />}
          </Link>
        </li>
        <li>{<FormattedMessage id="admin.form.list2" />}</li>
      </ol>
      <div className="mb3">
        <Textarea label="Header" defaultValue="Insert form header here..." />
      </div>
      <div className="flex justify-between items-center">
        <Toggle
          label={
            toggle ? (
              <FormattedMessage id="admin.form.toggle.enabled" />
            ) : (
              <FormattedMessage id="admin.form.toggle.disabled" />
            )
          }
          semantic
          checked={toggle}
          onChange={() => changeToggleState()}
        />
        <Button variation="primary">
          {<FormattedMessage id="admin.form.button.save" />}
        </Button>
      </div>
    </div>
  )
}
