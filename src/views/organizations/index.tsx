import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CardCompanyDetails from '../../components/shared/Card';
import ActionMenu from '../../components/shared/ActionMenu';
import { fetchContact, initialLoad } from '../../services/api-service';
import { normalizeCompanyData, normalizeContactData } from '../../services/dto';
import CardWithImages from '../../components/shared/CardWithImages';
import { savedMockData } from '../../data';

const Organizations: React.FC = () => {
  const [company, setCompany] = useState<Record<string, any> | null>(null);
  const [contact, setContact] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const companyData = await initialLoad();
        const contactData = await fetchContact('16');

        const companyDataNormilized = normalizeCompanyData(companyData);
        const contactDataNormalized = normalizeContactData(contactData)

        setCompany(companyDataNormilized);
        setContact(contactDataNormalized)
      } catch (error) {
        console.log('API not works((');
        const companyDataNormilized = normalizeCompanyData(savedMockData);
        setCompany(companyDataNormilized);
      }
    })();
  }, []);

  if (company) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <ActionMenu title={company.name} id={company.id} />
        <CardCompanyDetails id={company.id} title="Company Details" content={company.companyDetailsData} />
        <CardCompanyDetails title="Contacts" content={contact?.contactDetailsData} id={company.id} />
        <CardWithImages title="Photos" photosArray={company.photos} companyId={company.id} />
      </Box>
    );
  }

  return <div>Loading...</div>;
};

export default Organizations;
