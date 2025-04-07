import { FIELDNAMES } from '../constants'

interface CompanyDTO {
  id: string
  contactId: string
  name: string
  shortName: string
  businessEntity: string
  Agreement: string
  createdAt: string
  updatedAt: string
  photos: Array<Record<string, any>>
  companyDetailsData: Array<Record<string, any>>
  status: string
  type: string
}

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toLocaleDateString('ru-RU')
}

export const invertDate = (inputDate: string): string => {
  const [day, month, year] = inputDate.split('.').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.toISOString()
}

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
        subtitle: FIELDNAMES.agreement,
        text: `${data.contract?.no} / ${formatDate(data.contract?.issue_date || '')}`,
      },
      {
        subtitle: FIELDNAMES.entity,
        text: data.businessEntity || '',
      },
      {
        subtitle: FIELDNAMES.type,
        text:
          data.type
            ?.map((type: string) =>
              type
                .replace(/_/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())
            )
            .join(', ') || '',
      },
    ],
  }
}

export const formatPhoneNumber = (text: string) =>
  text
    .replace(/[^0-9+ ]/g, '')
    .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4')

export const inversePhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/[^\d]/g, '')
}

// interface ContactDTO {
//   id: string;
//   contactDetailsData: Array<Record<string, any>>;
// }

// export const normalizeContactData = (data: Record<string, any>): ContactDTO => {
//   return {
//     id: data.id,
//     contactDetailsData: [
//       {
//         subtitle: FIELDNAMES.person,
//         text: `${data.firstname || ''} ${data.lastname || ''}`,
//       },
//       {
//         subtitle: FIELDNAMES.phone,
//         text: data.phone ? formatPhoneNumber(data.phone) : 'Unknown',
//       },
//       {
//         subtitle: FIELDNAMES.email,
//         text: data.email || 'Not provided',
//       },
//     ],
//   }
// }

export class CompanyDto {
  name: string
  shortName: string
  businessEntity: string
  contract: { no: string; issue_date: string }
  type: string[]

  constructor(data: any = {}) {
    this.name = data.name
    this.shortName = data.shortName
    this.businessEntity = data.businessEntity
    this.contract = {
      no: data.contract?.no || '',
      issue_date: data.contract?.issue_date || '',
    }
    this.type = normilizeType(data.type)
  }
}

export class ContactDto {
  lastname: string
  firstname: string
  phone: string
  email: string

  constructor(data: any = {}) {
    this.lastname = data.lastname
    this.firstname = data.firstname
    this.phone = data.phone
    this.email = data.email
  }
}

export const normilizeType = (type: string[]) =>
  type.map((type: string) =>
    type.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  )

export const invertType = (type: string[]) =>
  type.map((e) => e.toLowerCase().replace(/ /g, '_'))
