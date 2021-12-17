import {CircularProgress} from "@material-ui/core";
import React, {FC} from 'react'
import {IObject} from "../../../api/dto";
import {TWithImg} from "../../../interfaces";
import ObjectCard from "../../molecules/ObjectCard";
import {useStyles} from "./styles";

interface Props {
    data: Array<TWithImg<IObject>>
}

const DataGrid: FC<Props> = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {data.length
                ? <div className={classes.data}>
                    {data.map((object, index) => (
                        <ObjectCard key={index} object={object}/>
                    ))}
                </div>
                : <div className={classes.progress}>
                    <CircularProgress size={120}/>
                </div>}
        </div>
    )
}

export default DataGrid