import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Box, Divider, Paper, Typography } from "@material-ui/core";
import DataGrid from "../organisms/DataGrid";
import { addImageUrlToObject, fetchObjects } from "../../api";

const ImageLoadingProblem = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (isDataLoaded) {
            loadImages();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDataLoaded]);

    const fetchData = async () => {
        setIsDataLoaded(false);
        const objects = await fetchObjects();
        setData(objects);
        setIsDataLoaded(true);
    };

    const loadImages = () => {
        Promise.all(
            data.map(async (item, index) => {
                const newData = [...data];
                newData[index] = await addImageUrlToObject(item);
                setData(newData);
            })
        );
    };

    return (
        <Paper elevation={6} className={classes.root}>
            <Box className={classes.taskContainer}>
                <Typography variant={"h4"} color={"secondary"}>
                    JavaScript
                </Typography>
                <Typography variant={"h5"} color={"primary"}>
                    Задание 2
                </Typography>
                <Typography variant={"body2"}>
                    Решить проблему с загрузкой картинок.
                </Typography>
                <Typography variant={"body1"} color={"secondary"}>
                    src/features/JavaScript/imageLoadingProblem
                </Typography>
            </Box>
            <Divider />
            <div className={classes.testContainer}>
                <DataGrid data={data} />
            </div>
        </Paper>
    );
};

export default ImageLoadingProblem;
