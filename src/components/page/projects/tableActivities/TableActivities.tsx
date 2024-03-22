'use client'
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SectionWrapper } from '@/hoc';
import { activitiesList } from '@/contants';
import { Button, Chip } from '@mui/material';
import slugify from 'react-slugify';
import { motion } from 'framer-motion'
import { GoArrowLeft } from 'react-icons/go';
import { IoIosDownload } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { rowsFirst, rowsSecond, rowsThird } from './dataTableActivities';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        // Add right border to each header cell except the last one
        '&:not(:last-child)': {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


interface SingleTableActivitiesProps {
    rows: typeof rowsFirst,
    title: string
}
function SingleTableActivities({ rows, title }: SingleTableActivitiesProps) {
    const router = useRouter();
    function onClickChip(item: string) {
        router.push(`/atividades/${slugify(item)}`)
    }
    return (
        <div className='flex'>
            <div className='bg-black flex justify-center items-center rounded rounded-r-none w-20'>
                <p className='-rotate-90 whitespace-nowrap'>{title}</p>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="right">Multimídias</StyledTableCell>
                            <StyledTableCell align="right">Planetários</StyledTableCell>
                            <StyledTableCell align="right">Oficinas</StyledTableCell>
                            <StyledTableCell align="right">Especiais</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.multimedia.map(item => <p><Chip label={item} className="!m-1" onClick={() => { onClickChip(item) }} /></p>)}</StyledTableCell>
                                <StyledTableCell align="right">{row.planetarium.map(item => <p><Chip label={item} className="!m-1" onClick={() => { onClickChip(item) }} /></p>)}</StyledTableCell>
                                <StyledTableCell align="right">{row.workshop.map(item => <p><Chip label={item} className="!m-1" onClick={() => { onClickChip(item) }} /></p>)}</StyledTableCell>
                                <StyledTableCell align="right">{row.especial.map(item => <p><Chip label={item} className="!m-1" onClick={() => { onClickChip(item) }} /></p>)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

function TableActivities() {

    return <ThemeProvider theme={createTheme({
        palette: {
            mode: 'dark',
        }
    })}>
        <div className='flex w-full gap-5 items-center justify-end mb-5'>

            <Button>
                <a href={`/atividades`} className='flex flex-row justify-end w-full items-center gap-2'>
                    <motion.div
                        animate={{
                            x: [0, 6, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className='text-white'
                    >
                        <GoArrowLeft />
                    </motion.div>
                    <div className='text-white text-[19px] leading-[30px] normal-case font-light'>Atividades</div>
                </a>
            </Button>
            <Button variant='outlined' color="inherit" startIcon={<IoIosDownload />} className='flex whitespace-nowrap'>
                <a href="/CatalogoCEU2024.xlsx">
                    <p className='normal-case'>Download XML</p>
                </a>
            </Button>
        </div>
        <SingleTableActivities rows={rowsFirst} title="Ensino Fundamental 1" />
        <SingleTableActivities rows={rowsSecond} title="Ensino Fundamental 2" />
        <SingleTableActivities rows={rowsThird} title="Ensino Médio" />
    </ThemeProvider>
}

export default SectionWrapper(TableActivities, "")