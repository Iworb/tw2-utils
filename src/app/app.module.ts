import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotkeysModule, HotkeysService } from '@ngneat/hotkeys';
import { StorageMap, StorageModule } from '@ngx-pwa/local-storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { BattleDialogComponent } from './battle-dialog/battle-dialog.component';
import { DialogsModule } from './dialogs.module';
import { availableLanguages, defaultLanguage, translationsMap } from './i18n';
import { MaterialModule } from './material.module';
import { ProvisionsDialogComponent } from './provisions-dialog/provisions-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogsModule,
    HotkeysModule,
    MaterialModule,
    StorageModule.forRoot({
      LSPrefix: 'tw2-utils.',
      IDBDBName: 'tw2-utils'
    }),
    TranslateModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {
  constructor(
    dialog: MatDialog,
    @Inject(DOCUMENT) document: Document,
    hotkeys: HotkeysService,
    storage: StorageMap,
    translate: TranslateService,
  ) {
    // Battle dialog
    hotkeys.addShortcut({ keys: 'shift.meta.b' }).subscribe(() => {
      dialog.open(BattleDialogComponent);
    });
    // Provisions dialog
    hotkeys.addShortcut({ keys: 'shift.meta.p' }).subscribe(() => {
      dialog.open(ProvisionsDialogComponent);
    });
    document.documentElement.delegateEventListener('click', 'td', (...ar) => {
      console.log('click td', ar);
    });
    storage.get('language').pipe(take(1)).subscribe((l) => {
      const savedLanguage = availableLanguages.includes(l as string) ? l as string : null;
      const browserLang = translate.getBrowserLang().slice(0, 2).toLowerCase();
      const language = savedLanguage
                       ?? availableLanguages.includes(browserLang) ? browserLang : defaultLanguage;
      translate?.use(language);
      translate?.setTranslation(language, translationsMap[language]);
      storage.set('language', language).subscribe();
    });
  }

  ngDoBootstrap(): void {
  }
}
