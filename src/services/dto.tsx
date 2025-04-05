interface CompanyDTO {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  Agreement: string;
  createdAt: string;
  updatedAt: string;
  photos: Array<Record<string, any>>;
  companyDetailsData: Array<Record<string, any>>;
  status: string;
  type: string;
}

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("ru-RU");
};

export const normalizeCompanyData = (data: Record<string, any>): CompanyDTO => {
  return {
    id: data.id || '',
    contactId: data.contactId || '',
    name: data.name || '',
    shortName: data.shortName || '',
    businessEntity: data.businessEntity || '',
    Agreement: `${data.contract?.no} / ${formatDate(data.contract?.issue_date || '')}`,
    createdAt: formatDate(data.createdAt || ''),
    updatedAt: formatDate(data.updatedAt || ''),
    photos: data.photos || [],
    status: data.status || '',
    type: data.type || [],
    companyDetailsData: [
      {
        subtitle: 'Agreement:',
        text: `${data.contract?.no} / ${formatDate(data.contract?.issue_date || '')}`,
      }, {
        subtitle: 'Business entity:',
        text: data.businessEntity || '',
      }, {
        subtitle: 'Company type:',
        text: data.type
          ?.map((type: string) =>
            type
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())
          )
          .join(', ') || '',
      }
    ],
    // companyDetailsPhotos: data.photos.map((photo: Record<string, any>) => photo.filepath)
  };
};

const formatPhoneNumber = (phone: string): string => {
  // Разбиваем номер по частям
  const countryCode = `+${phone.slice(0, 1)}`;
  const areaCode = phone.slice(1, 4);
  const prefix = phone.slice(4, 7);
  const lineNumber = phone.slice(7);

  return `${countryCode} ${areaCode} ${prefix} ${lineNumber}`;
};


interface ContactDTO {
  id: string;
  contactDetailsData: Array<Record<string, any>>;
}

export const normalizeContactData = (data: Record<string, any>): ContactDTO => {
  return {
    id: data.id,
    contactDetailsData: [
      {
        subtitle: 'Responsible person:',
        text: `${data.firstname || ''} ${data.lastname || ''}`,
      },
      {
        subtitle: 'Phone number:',
        text: data.phone ? formatPhoneNumber(data.phone) : 'Unknown',
      },
      {
        subtitle: 'E-mail:',
        text: data.email || 'Not provided',
      },
    ],
  }
}
