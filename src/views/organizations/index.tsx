import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ContactCard from '../../components/shared/Cards/Contact'
import CompanyCard from '~/components/shared/Cards/Company'
import ActionMenu from '../../components/shared/ActionMenu'
import { fetchCompany, fetchContact } from '../../services/api-service'
import CardWithImages from '../../components/shared/Cards/WithImages'

const Organizations: React.FC = () => {
  const [companyData, setCompanyData] = useState<Record<string, any> | null>(
    null
  )
  const [contactData, setContactData] = useState<Record<string, any> | null>(
    null
  )

  useEffect(() => {
    ;(async () => {
      try {
        const company = await fetchCompany('12')
        const contact = await fetchContact('16')
        setCompanyData(company)
        setContactData(contact)
      } catch (error) {
        console.log('API not works((')
      }
    })()
  }, [])

  if (contactData && companyData) {
    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignContent='center'
        alignItems='center'
      >
        <ActionMenu companyData={companyData} />
        <CompanyCard
          companyData={companyData}
          setData={setCompanyData}
          title='Company Details'
        />

        <ContactCard
          contactData={contactData}
          setData={setContactData}
          title='Contacts'
        />
        <CardWithImages
          title='Photos'
          photosArray={companyData.photos}
          companyId={companyData.id}
        />
      </Box>
    )
  } else {
  }
  return <Box>Loading... </Box>
}

export default Organizations
