// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import pageEntity from '../../../../src/app/pages/docs/installation/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from './playgrounds';
import demoAssets from './demo-assets';

const pageContent: string = `<h1 id="installation" class="ngde">Installation<a title="Link to heading" class="ng-doc-header-link ngde" href="/docs/installation#installation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">It's time to write some awesome docs!</p>`


@Component({
    selector: 'ng-doc-page-docs-installation',
    standalone: true,
    template: `<ng-doc-page></ng-doc-page>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgDocPageComponent,
        ...PLAYGROUND_COMPONENTS,
    ],
    providers: [
        {provide: NgDocRootPage, useExisting: DynamicComponent},
        PLAYGROUND_PROVIDERS,
        (pageEntity.providers ?? []),
    ],
})
export class DynamicComponent extends NgDocRootPage {
    readonly routePrefix: string = 'docs';
    readonly pageType: NgDocPageType = 'guide';
    readonly pageContent: string = pageContent;readonly page?: NgDocPage = pageEntity;
    readonly demoAssets: NgDocDemoAssets = demoAssets;

    constructor() {
        super();
    }
}

const routes: Routes = [{
    ...(isRoute(pageEntity.route) ? pageEntity.route : {}),
    path: '',
    component: DynamicComponent,
    title: `Installation`,
}]

export default routes;

