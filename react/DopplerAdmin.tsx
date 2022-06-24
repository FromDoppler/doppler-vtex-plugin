import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageHeader, PageBlock, Divider } from 'vtex.styleguide'

import { FormSection } from './components/FormSection'
import { SitetrackingSection } from './components/SitetrackingSection'
import { ConnectionStepsSection } from './components/ConnectionStepsSection'

const DopplerAdmin = () => {
  return (
    <Layout
      pageHeader={<PageHeader title={<FormattedMessage id="admin.title" />} />}
    >
      <PageBlock variation="full">
        <FormSection />

        <div className="mv6">
          <Divider orientation="horizontal" />
        </div>

        <SitetrackingSection />

        <div className="mv6">
          <Divider orientation="horizontal" />
        </div>

        <ConnectionStepsSection />
      </PageBlock>
    </Layout>
  )
}

export default DopplerAdmin
