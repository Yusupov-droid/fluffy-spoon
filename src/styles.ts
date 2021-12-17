import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'fit-content(100%) 1fr',
        overflow: 'hidden',
        minHeight: '100vh'
    },
    container: {
        height: '100%',
        padding: theme.spacing(2, 3)
    },
    mainButton: {
        marginLeft: theme.spacing(2)
    }
}))