import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    data: {
        display: 'grid',
        gridGap: theme.spacing(2),
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridTemplateRows: 'repeat(auto-fit, minmax(100px, 1fr))',
        height: '100%'
    },
    progress: {
        display: 'grid',
        placeItems: 'center',
        height: '100%'
    }
}))