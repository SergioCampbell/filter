import DataTable, { TableColumn } from 'react-data-table-component';
import { InputText } from './InputText'
import { DataColumns } from '../../interface/DataRow';
import { useState, useEffect, useMemo } from 'react';
import FilterComponent from './FilterComponent';
import Loader from '../Loader';

export default function Filter() {
    const API = "https://mach-eight.uc.r.appspot.com";
    const [tableData, setTable]: any = useState([])
    const [filterText, setFilterText] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        try {
            fetch(API)
                .then((response) => response.json())
                .then((data) => setTable(data.values)
                );
        } catch (error) {
            console.log('There are some erros here: ', error);
        }
        setLoader(false)
    }, [])

    const filteredItems = () => tableData.filter(
        (item: any) => item.h_meters.toLowerCase().includes(filterText.toLowerCase())
        ||
        item.h_in.toLowerCase().includes(filterText.toLowerCase())
        ||
        item.first_name.toLowerCase().includes(filterText.toLowerCase())
        ||
        item.last_name.toLowerCase().includes(filterText.toLowerCase()))

    const subHeaderComponentMemo = useMemo(() => {        
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        const Submit = (e: any) => {
            e.preventDefault()
            setFilterText(filterText)
        }

        return (
            <FilterComponent
                onChange={(e: any) =>
                    setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
                onSubmit={Submit}
            />
        );
    }, [filterText]);

    const columns: TableColumn<DataColumns>[] = [
        {
            name: 'First Name',
            selector: (row: any) => row.first_name,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row: any) => row.last_name,
            sortable: true,
        },
        {
            name: 'Heigth inch',
            selector: (row: any) => row.h_in,
            sortable: true,
        },
        {
            name: 'Heigth meters',
            selector: (row: any) => row.h_meters,
            sortable: true,
        },
    ]

    return (
        <>
            {loader ?
                <Loader />
                : <DataTable
                    columns={columns}
                    data={filteredItems()}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    pagination
                    selectableRows
                    persistTableHead
                />}
        </>
    )
}
