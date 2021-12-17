import {Box, CircularProgress, Fade, Paper, Typography} from "@material-ui/core";
import React, {FC, useState} from 'react'
import {TWithImg} from "../../../interfaces";
import {IObject} from "../../../api/dto";
import {useStyles} from "./styles";

interface Props {
    object: TWithImg<IObject>
}

const ObjectCard: FC<Props> = ({object}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const classes = useStyles()

    const onImageLoad = () => setIsImageLoaded(true)

    return (
        <Paper elevation={4} className={classes.root}>
            <div className={classes.image}>
                <Fade in={!!object.img && isImageLoaded}>
                    <img src={object.img} alt={object.name} onLoad={onImageLoad}/>
                </Fade>
                <div className={classes.progress}>
                    <CircularProgress size={48} color={'secondary'}/>
                </div>
            </div>
            <Box className={classes.name} color={'primary.main'}>
                <Typography variant={'h6'}>
                    {object.name}
                </Typography>
            </Box>
        </Paper>
    )
}

export default ObjectCard