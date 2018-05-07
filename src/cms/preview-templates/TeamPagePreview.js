import React from 'react'
import Header from '../../components/Header'
import Team from '../../components/Team'

const TeamPagePreview = ({ entry, widgetFor }) => (
  <div>
    <Header {...(entry.get('data').toJS())}/>
    <Team {...(entry.get('data').toJS())}/>
  </div>
)

export default TeamPagePreview
