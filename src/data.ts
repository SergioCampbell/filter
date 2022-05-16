const Data = async () => {
   const API = "https://mach-eight.uc.r.appspot.com";

   const players: any = [];

   try {
    fetch(API)
    .then((response) => response.json())
    .then((data) => players.push(data.values))
    //console.log('@@@@@@@@@@@@@',players);
   } catch (error) {
    console.error('There are some erros here: ', error);
   }

   const data = [
     {
       first_name: 'Fuancho',
       last_name: 'Algo',
       h_in: 1.4,
       h_meters: 11,
     },
     /* {
       first_name:players.map((item: any) => item.first_name),
       last_name: players.map((item: any) => item.last_name),
       h_in: players.map((item: any) => item.h_in),
       h_meters: players.map((item: any) => item.h_meters),
     }, */
   ];
 };

 export default Data;
