import './ListTime.css'
import {Theme, useTheme} from "@mui/material/styles";
import React, {useEffect} from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {OutlinedInput} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export interface IListTime {
    timesSave: (times: Array<any>) => void
}

export const ListTime = ({timesSave}: IListTime) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const allTime = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00',]

    useEffect(() => {
        const newArray = personName.map((t) => ({
            isBooking: false,
            time: t
        }))

        timesSave(newArray)
    }, [personName])

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            style={{marginTop: '10px'}}
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
        >
            {allTime.map((name: string) => (
                <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                >
                    {name}
                </MenuItem>
            ))}
        </Select>
    )
}
