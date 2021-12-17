import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr fit-content(100%)',
        gridGap: theme.spacing(.5),
        padding: theme.spacing(2, 3)
    },
    buttonContainer: {
        display: 'grid',
        placeItems: 'center'
    }
}))
