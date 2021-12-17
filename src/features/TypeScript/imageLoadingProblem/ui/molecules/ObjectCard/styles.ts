import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        overflow: 'hidden',
        gridTemplateRows: 'minmax(100px, 2fr) 1fr'
    },
    image: {
        height: '100%',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        '&>img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: 1001
        }
    },
    progress: {
        display: 'grid',
        placeItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1000
    },
    name: {
        display: 'grid',
        placeItems: 'center'
    }
}))