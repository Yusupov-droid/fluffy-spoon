import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'fit-content(100%) fit-content(100%)',
    },
    tasksContainer: {
        padding: theme.spacing(2, 3)
    },
    tasks: {
        display: 'grid',
        paddingTop: theme.spacing(1),
        placeItems: 'start',
        gridGap: theme.spacing(1)
    }
}))
