// @ts-nocheck
import {Provider} from '@angular/core';
import {NG_DOC_CONTEXT} from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider {
    return {
        provide: NG_DOC_CONTEXT,
        useValue: {
            navigation: [
                
                {
                    title: `Installation`,
                    route: '/docs/installation',
                    hidden: false,
                },
                
                {
                    title: `saber mas`,
                    route: '/docs/saber-mas',
                    hidden: false,
                },
                
                {
                    title: `TFG`,
                    route: '/docs/tfg',
                    hidden: false,
                },
            ],
        }
    };
}
