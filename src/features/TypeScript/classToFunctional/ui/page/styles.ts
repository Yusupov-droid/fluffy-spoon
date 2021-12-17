import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'fit-content(100%) fit-content(100%) 1fr',
    },
    taskContainer: {
        padding: theme.spacing(2, 3)
    },
    buttonContainer: {
        width: '100%',
        display: 'grid',
        alignContent: 'start',
        justifyContent: 'center',
        marginTop: theme.spacing(2)
    },
    testContainer: {
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        placeItems: 'center',
        padding: theme.spacing(2, 3),
    }
}))
