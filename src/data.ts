import { useEffect, useState } from "react";

  /* const [players, setPlayers] = useState([
      { first_name: "", last_name: "", h_in: 0, h_meters: 0 },
    ]);
  const API = "https://mach-eight.uc.r.appspot.com";

  const getApi = (url: string) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  useEffect(() => {
    getApi(API)
  }, []);

  export { getApi } */


 const Data = async () => {
   const API = "https://mach-eight.uc.r.appspot.com";
   //const [players, setPlayers] = useState([{first_name: '', last_name: '', h_in: 0, h_meters: 0}]);

   const players: any = [];

   /* const getAll = async () => {
     try {
      const response = await fetch(API);
      const all = await response.json();
      console.log('All \n',all);
      
      players.push(all.values);
     } catch (error) {
       console.log('There are some erros here: ', error);       
     }
   }; */

   try {
    fetch(API)
    .then((response) => response.json())
    .then((data) => players.push(data.values))
    //console.log('@@@@@@@@@@@@@',players.pop(2));
   } catch (error) {
    console.error('There are some erros here: ', error);
   }

   /* useEffect(() => {
     try {
      fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data.values)
      );
     } catch (error) {
      console.log('There are some erros here: ', error);
     }
   }, []); */

   const data = [
     /* {
       first_name: 'Fuancho',
       last_name: 'Algo',
       h_in: 1.4,
       h_meters: 11,
     }, */
     /* {
       first_name:players.map((item: any) => item.first_name),
       last_name: players.map((item: any) => item.last_name),
       h_in: players.map((item: any) => item.h_in),
       h_meters: players.map((item: any) => item.h_meters),
     }, */
     {players}
   ];
 };

 export default Data;
