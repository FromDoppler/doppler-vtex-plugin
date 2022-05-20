import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageHeader } from 'vtex.styleguide'

const DopplerAdmin: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin.hello-world" />}
        />
      }
    >
    </Layout>
  )
}

export default DopplerAdmin