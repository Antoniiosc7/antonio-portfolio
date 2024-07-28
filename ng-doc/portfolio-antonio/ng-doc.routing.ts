// @ts-nocheck
import {Routes} from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
    {
        path: 'installation',
        loadChildren: () => import('./guides/installation/module')
    },
    {
        path: 'tfg',
        loadChildren: () => import('./guides/tfg/module')
    },
    {
        path: 'saber-mas',
        loadChildren: () => import('./guides/saber-mas/module')
    },
];
