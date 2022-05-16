import { useState } from 'react'
import Filter from './Filter/Filter'
import { InputText } from './Filter/InputText';

export default function AllPlayers () {
    const [tableRowsData, setTableRowsData] = useState([]);

  /* const onChange = async (e: any) => {
    let searchData = Data.filter((item: any) => {
      if (
        item.first_name
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setTableRowsData(searchData);
  }; */

    return (
        <>
          <h1>All players are here</h1>

            {/* <InputText
            type="search"
            onInput={(e: any) => setGlobalFilter(e.target.value)}
            placeholder="Buscar..."
            width="20%"
          /> */}

          <Filter />

            <ol>
                {/*players.map((item: any, i: number) => <li key={i}>{item.first_name}</li>)*/}
            </ol>
        </>
    )
}