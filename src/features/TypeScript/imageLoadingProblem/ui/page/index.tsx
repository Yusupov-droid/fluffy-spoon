import {FC, useEffect, useState} from "react";
import {useStyles} from "./styles";
import {Box, Divider, Paper, Typography} from "@material-ui/core";
import DataGrid from "../organisms/DataGrid";
import {IObject} from "../../api/dto";
import {addImageUrlToObject, fetchObjects} from "../../api";
import {TWithImg} from "../../interfaces";

const ImageLoadingProblem: FC = () => {
    const classes = useStyles();

    const [data, setData] = useState<Array<TWithImg<IObject>>>([]);
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

    /**
     * Причиной этому послужило то, что при каждой итерация map,
     * массив data для спред оператора брался из замыкания и он
     * всегда был один и тот же, и при вызове setData с аргументом
     * передавался тот же массив data только с одним измененным элементом,
     * так как текущее состояние массива data никак не учитывалось.
     */
    // const loadImages = () => {
    //     Promise.all(
    //         data.map(async (item, index) => {
    //             const newData = [...data];
    //             newData[index] = await addImageUrlToObject(item);
    //             setData(newData);
    //         })
    //     );
    // };


    /**
     * Так как setState в React является асинхронным,
     * чтобы учесть текущее состояние нужно в качестве
     * аргумента передать callback функцию которая
     * принимает в себя аргумент текущего состояния.
     * И при вызове этого callback мы перебираем текущий массив data
     * подменяем нужный элемент, в итоге мы получаем новое состояние
     * в котором был учтен текущее состояние массива data и возвращаем его.
     */
    const loadImages = () => {
        Promise.all(
            data.map(async (item) => {
                const added = await addImageUrlToObject(item);
                setData((state) => {
                    return state.map((img) => {
                        return img.id === added.id ? added : img;
                    });
                });
            })
        );
    };


    return (
        <Paper elevation={6} className={classes.root}>
            <Box className={classes.taskContainer}>
                <Typography variant={"h4"} color={"secondary"}>
                    TypeScript
                </Typography>
                <Typography variant={"h5"} color={"primary"}>
                    Задание 2
                </Typography>
                <Typography variant={"body2"}>
                    Решить проблему с загрузкой картинок.
                </Typography>
                <Typography variant={"body1"} color={"secondary"}>
                    src/features/TypeScript/imageLoadingProblem
                </Typography>
            </Box>
            <Divider/>
            <div className={classes.testContainer}>
                <DataGrid data={data}/>
            </div>
        </Paper>
    );
};

export default ImageLoadingProblem;
