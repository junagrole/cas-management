import {Component, OnInit} from '@angular/core';
import {
  DataRecord,
  GroovyRegisteredServiceAccessStrategy,
  UserProfile,
  OAuthRegisteredService,
  OidcRegisteredService,
  SamlRegisteredService,
  WSFederationRegisterdService,
  RegexRegisteredService
} from 'mgmt-lib';
import {BasicsForm} from './basics-form';

@Component({
  selector: 'app-tab-basics',
  templateUrl: './tab-basics.component.html'
})
export class TabBasicsComponent implements OnInit {

  groovyAccessStrategy: boolean;

  basics: BasicsForm;

  constructor(public data: DataRecord) {
  }

  ngOnInit() {
    this.groovyAccessStrategy = GroovyRegisteredServiceAccessStrategy.instanceOf(this.data.service.accessStrategy);
    if (this.data.formMap.has('basics')) {
      this.basics = this.data.formMap.get('basics') as BasicsForm;
      return;
    }
    this.basics = new BasicsForm(this.data.service);
    this.basics.get('serviceType').valueChanges.subscribe(val => {
      if (val === OAuthRegisteredService.cName) {
        this.data.service = new OAuthRegisteredService(this.data.service);
      } else if (val === OidcRegisteredService.cName) {
        this.data.service = new OidcRegisteredService(this.data.service);
      } else if (val === SamlRegisteredService.cName) {
        this.data.service = new SamlRegisteredService(this.data.service);
      } else if (val === WSFederationRegisterdService.cName) {
        this.data.service = new WSFederationRegisterdService(this.data.service);
      } else {
        this.data.service = new RegexRegisteredService(this.data.service);
      }
    });
    this.data.formMap.set('basics', this.basics);
  }

}
