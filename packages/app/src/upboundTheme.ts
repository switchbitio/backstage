import {
    createTheme,
    genPageTheme,
    lightTheme,
    shapes,
} from '@backstage/theme';

export const UpboundTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        primary: {
            main: '#333f5b',
        },
        secondary: {
            main: '#565a6e',
        },
        error: {
            main: '#8c4351',
        },
        warning: {
            main: '#8f5e15',
        },
        info: {
            main: '#34548a',
        },
        success: {
            main: '#485e30',
        },
        // background: {
        //     default: '#d5d6db',
        //     paper: '#d5d6db',
        // },
        banner: {
            info: '#34548a',
            error: '#8c4351',
            text: '#333f5b',
            link: '#565a6e',
        },
        errorBackground: '#8c4351',
        warningBackground: '#8f5e15',
        infoBackground: '#333f5b',
        navigation: {
            background: '#333f5b',
            indicator: '#8f5e15',
            color: '#d5d6db',
            selectedColor: '#ffffff',
        },
    },
    defaultPageTheme: 'home',
    fontFamily: 'Avenir, "Arial Black", sans-serif',
    /* below drives the header colors */
    pageTheme: {
        home: genPageTheme({ colors: ['#5b53cc', '#333f5b'], shape: shapes.wave }),
        documentation: genPageTheme({
            colors: ['#5b53cc', '#333f5b'],
            shape: shapes.wave2,
        }),
        tool: genPageTheme({ colors: ['#8c4351', '#333f5b'], shape: shapes.round }),
        service: genPageTheme({
            colors: ['#5b53cc', '#333f5b'],
            shape: shapes.wave,
        }),
        website: genPageTheme({
            colors: ['#5b53cc', '#333f5b'],
            shape: shapes.wave,
        }),
        library: genPageTheme({
            colors: ['#5b53cc', '#333f5b'],
            shape: shapes.wave,
        }),
        other: genPageTheme({ colors: ['#5b53cc', '#333f5b'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#5b53cc', '#333f5b'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#5b53cc', '#333f5b'], shape: shapes.wave }),
    },
});
