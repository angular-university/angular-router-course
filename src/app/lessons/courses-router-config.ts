


import {Playlist} from "./playlist.component";


export const coursesRouterConfig = [
    {
        path: 'courses',
        loadChildren: '/src/router-lessons/courses.module'
    },
    {
        path: 'playlist',
        component: Playlist,
        outlet: 'playlist'
    }
];