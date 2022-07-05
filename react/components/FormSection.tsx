import React, { useState } from 'react'
import { Toggle, Textarea, Link, Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

export const FormSection = () => {
  const [toggle, setToggleState] = useState(true)
  const [formState, setformState] = useState({
    validFormat: true,
    disabledButton: true,
  })

  const regex = new RegExp(
    '^(<!--\\sinsert\\sthis\\sin\\shead\\s-->(\\r\\n|\\r|\\n))?(<meta\\sname="dp-popup"\\scontent="[a-zA-Z0-9%]+">){1}(\\r\\n|\\r|\\n)(<script\\ssrc="https://cdn.fromdoppler.com/formgenerator/latest/vendor.js\\?[0-9]+"></script>){1}(\\r\\n|\\r|\\n)(<link\\srel="stylesheet"\\shref="https://cdn.fromdoppler.com/formgenerator/latest/styles.css\\?[0-9]+"\\s/>){1}$'
  )
  const changeToggleState = () => {
    setToggleState(!toggle)
  }

  const verifyValidForm = (form: string) => {
    if (form === '' || regex.test(form)) {
      setformState({
        validFormat: true,
        disabledButton: form === '',
      })
      return
    }
    setformState({ validFormat: false, disabledButton: true })
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
        <Textarea
          label="Header"
          defaultValue="Insert form header here..."
          Error={!formState.validFormat}
          errorMessage={formState.validFormat ? '' : "That's not a valid form"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            verifyValidForm(e.target.value)
          }
        />
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
        <Button
          variation="primary"
          disabled={formState.disabledButton || !formState.validFormat}
        >
          {<FormattedMessage id="admin.form.button.save" />}
        </Button>
      </div>
    </div>
  )
}
