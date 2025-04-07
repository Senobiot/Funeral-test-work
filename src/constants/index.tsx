export const FIELDNAMES = {
  agreement: 'Agreement',
  entity: 'Business entity:',
  type: 'Company type:',
  person: 'Responsible person:',
  phone: 'Phone number:',
  email: 'E- mail:',
} as const

export const ENTITY_VARIANTS = [
  'Partnership',
  'Sole Proprietorship',
  'Limited Liability Company',
] as const

export enum EditableKeys {
  ContractNo = 'contractNo',
  ContractIssue = 'contractIssue',
  BusinessEntity = 'businessEntity',
  Type = 'type',
  Name = 'name',
  Phone = 'phone',
  Email = 'email',
}
