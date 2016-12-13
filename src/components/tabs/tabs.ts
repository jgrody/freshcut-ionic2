import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { SettingsPage } from '../../pages/settings/settings'


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  settingsPage = SettingsPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
