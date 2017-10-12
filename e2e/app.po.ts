import { browser, element, by } from 'protractor';

export class AngularJS2BasicsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
