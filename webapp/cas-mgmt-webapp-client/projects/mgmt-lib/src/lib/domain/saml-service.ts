import {RegexRegisteredService, RegisteredService} from './registered-service';

export class SamlRegisteredService extends RegexRegisteredService {
  static cName = 'org.apereo.cas.support.saml.services.SamlRegisteredService';

  metadataLocation: string;
  metadataMaxValidity: number;
  requiredAuthenticationContextClass: string;
  metadataCriteriaDirection: string;
  metadataCriteriaPattern: string;
  requiredNameIdFormat: string;
  metadataSignatureLocation: string;
  serviceProviderNameIdQualifier: string;
  nameIdQualifier: string;
  metadataExpirationDuration: string;
  signAssertions: boolean;
  signResponses: boolean;
  signingCredentialType: string;
  encryptAssertions: boolean;
  metadataCriteriaRoles: string;
  metadataCriteriaRemoveEmptyEntitiesDescriptors: boolean;
  metadataCriteriaRemoveRolelessEntityDescriptors: boolean;
  attributeNameFormats: Map<string, string>;
  skipGeneratingAssertionNameId: boolean;
  skipGeneratingSubjectConfirmationInResponseTo: boolean;
  skipGeneratingSubjectConfirmationNotOnOrAfter: boolean;
  skipGeneratingSubjectConfirmationRecipient: boolean;
  skipGeneratingSubjectConfirmationNotBefore: boolean;
  assertionAudiences: string;

  static instanceOf(obj: any): boolean {
    return obj && obj['@class'] === SamlRegisteredService.cName;
  }

  constructor(service?: RegisteredService) {
    super(service);
    const s: SamlRegisteredService = service as SamlRegisteredService;
    this.metadataLocation = (s && s.metadataLocation) || null;
    this.metadataMaxValidity = (s && s.metadataMaxValidity) || null;
    this.requiredAuthenticationContextClass = (s && s.requiredAuthenticationContextClass) || null;
    this.metadataCriteriaDirection = (s && s.metadataCriteriaDirection) || null;
    this.metadataCriteriaPattern = (s && s.metadataCriteriaPattern) || null;
    this.requiredNameIdFormat = (s && s.requiredNameIdFormat) || null;
    this.metadataSignatureLocation = (s && s.metadataSignatureLocation) || null;
    this.serviceProviderNameIdQualifier = (s && s.serviceProviderNameIdQualifier) || null;
    this.nameIdQualifier = (s && s.nameIdQualifier) || null;
    this.metadataExpirationDuration = (s && s.metadataExpirationDuration) || 'PT60M';
    this.signAssertions = (s && s.signAssertions) || false;
    this.signResponses = (s && s.signResponses) || true;
    this.signingCredentialType = (s && s.signingCredentialType) || 'BASIC';
    this.encryptAssertions = (s && s.encryptAssertions) || false;
    this.metadataCriteriaRoles = (s && s.metadataCriteriaRoles) || 'SPSSODescriptor';
    this.metadataCriteriaRemoveEmptyEntitiesDescriptors = (s && s.metadataCriteriaRemoveEmptyEntitiesDescriptors) || true;
    this.metadataCriteriaRemoveRolelessEntityDescriptors = (s && s.metadataCriteriaRemoveRolelessEntityDescriptors) || true;
    this.attributeNameFormats = (s && s.attributeNameFormats) || null;
    this.skipGeneratingAssertionNameId = (s && s.skipGeneratingAssertionNameId) || false;
    this.skipGeneratingSubjectConfirmationInResponseTo = (s && s.skipGeneratingSubjectConfirmationInResponseTo) || false;
    this.skipGeneratingSubjectConfirmationNotOnOrAfter = (s && s.skipGeneratingSubjectConfirmationNotOnOrAfter) || false;
    this.skipGeneratingSubjectConfirmationRecipient = (s && s.skipGeneratingSubjectConfirmationRecipient) || false;
    this.skipGeneratingSubjectConfirmationNotBefore = (s && s.skipGeneratingSubjectConfirmationNotBefore) || true;
    this.assertionAudiences = (s && s.assertionAudiences) || null;
    this['@class'] = SamlRegisteredService.cName;
  }
}
