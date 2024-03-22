'use client'

import { FormControl, Button, Dialog, DialogTitle, InputLabel, Select, OutlinedInput, MenuItem, useTheme, Checkbox, ListItemText, CssBaseline, createTheme, ThemeProvider, SelectChangeEvent } from "@mui/material";
import { getStyleValue } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { MdFilterListOff } from 'react-icons/md'
import { CiViewTable } from "react-icons/ci";
import { usePathname, useRouter, useSearchParams } from "next/navigation";




const years = [
    "1°ano",
    "2°ano",
    "3°ano",
    "4°ano",
    "5°ano",
    "6°ano",
    "7°ano",
    "8°ano",
    "9°ano",
    "1°ano[E.M.]",
    "2°ano[E.M.]",
    "3°ano[E.M.]",
]

const materials = [
    "Ciências",
    "Geografia",
    "Meio Ambiente",
    "Física",
    "Astronáutica",
    "Astronomia",
    "História",
    "Geologia",
    "Matemática",
    "Química",
    "Biologia",
    "Higiene",
    "Doenças",
    "Parasitismo",
    "Simbiose",
    "Valores Humanos",
    "Responsabilidade",
    "Coragem",
    "Filosofia",
    "Paleontologia"
]


interface SelectField {
    name: string,
    label: string,
    value: string[],
    option: string[],
    onChange: (e: SelectChangeEvent<string[]>) => void,
}

const SelectField = ({ name, label, value, onChange, option }: SelectField) => {
    return (
        <FormControl sx={{ m: 2 }}>
            <InputLabel id={`${name}-label`}>{label}</InputLabel>
            <Select
                labelId={`${name}-label`}
                multiple
                value={value}
                onChange={onChange}
                // renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label={name} />}
            >
                {option.map(opt => (
                    <MenuItem
                        key={opt}
                        value={opt}
                    >
                        {/* <Checkbox checked={value.indexOf(opt) > -1} />
                        <ListItemText primary={opt} /> */}
                        {opt}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

interface SimpleDialogProps  {
    open: boolean,
    onClose: VoidFunction,
}
const SimpleDialog = ({ open, onClose }: SimpleDialogProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [selectedYears, setSelectedYears] = useState<string[]>(searchParams.get('ano')?.split(",") ?? []);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>(searchParams.get('materia')?.split(",") ?? []);

    const handleFilterActivities = () => {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        if (selectedYears.length == 0) {
            current.delete("ano");
        } else {
            current.set("ano", selectedYears.join(','));
        }
        if (selectedMaterials.length == 0) {
            current.delete("materia");
        } else {
            current.set("materia", selectedMaterials.join(','));
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`, {
            scroll: false,
        });
    }
    const handleClose = () => {
        handleFilterActivities();
        onClose();
    }
    const handleChageYears = (e: SelectChangeEvent<string[]>) => {
        const {
            target: { value }
        } = e;
        setSelectedYears(
            typeof value === 'string' ? value.split(',') : value,
        )
    }
    const handleChangeMaterials = (e: SelectChangeEvent<string[]>) => {
        const {
            target: { value }
        } = e;
        setSelectedMaterials(
            typeof value === 'string' ? value.split(',') : value,
        )
    }
    const handleClear = () => {
        setSelectedMaterials([])
        setSelectedYears([])
    }

    useEffect(() => {
        setSelectedYears(searchParams.get('ano')?.split(",") ?? []);
        setSelectedMaterials(searchParams.get('material')?.split(",") ?? []);
    }, [searchParams]) 
    return (
       
         <Dialog onClose={handleClose} open={open}  >
            <DialogTitle>Selecione seus filtros</DialogTitle>
            <SelectField
                label='Ano'
                name='years'
                onChange={handleChageYears}
                option={years}
                value={selectedYears}
            />
            <SelectField
                label='Matéria'
                name='materials'
                onChange={handleChangeMaterials}
                option={materials}
                value={selectedMaterials}
            />

            <div className="flex w-full justify-around my-4 align-center gap-2">
                <Button variant='text' onClick={handleClear}>Limpar</Button>
                <Button variant="outlined" color="primary" onClick={handleClose}>Filtrar</Button>
            </div>
        </Dialog>
    )
}

const Filter = () => {
    const searchParams = useSearchParams();
    const year = searchParams.get('ano');
    const material = searchParams.get('materia');
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickNavigate = () => {
        router.push("/atividades/tabela")
    }

    const handleClose = () => {
        setOpen(false);
    }

    const color = year || material ? "warning" : "inherit"
    const icon = year || material ? <MdFilterListOff /> : <IoFilter />

    return (
        <ThemeProvider theme={createTheme({
            palette: {
                mode: 'dark',
            }
        })}>
            <div className='flex w-full gap-2 items-center justify-end mt-20'>
                
                <Button variant='outlined' color={color} startIcon={icon} onClick={handleClickOpen}>
                    <p className='normal-case'>Filtro</p>
                </Button>

                <Button color='inherit'  startIcon={<CiViewTable />} onClick={handleClickNavigate}>
                    <p className='normal-case'>Tabela de Series</p>
                </Button>
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </ThemeProvider>
    )
}

export default Filter;