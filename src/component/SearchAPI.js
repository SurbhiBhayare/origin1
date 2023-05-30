import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// const [returnData, setReturnData] = useState([])
// const location = useLocation();
// const queryParams = new URLSearchParams(location.search);
// const zipCode = queryParams.get('zipcode');
// const poNumber = queryParams.get('poNo');

// export const useData = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const retData = JSON.parse(localStorage.getItem('proceedData'));
//         const updData = JSON.parse(localStorage.getItem('updatedData'));
//         setReturnData(retData);

//         // Check if data is null (indicating first visit to the page)
//         if (updData === null) {
//             fetchData(zipCode, poNumber);
//             } else {
//                 // Data already exists, no need to fetch from the API
//                 setData(updData);
//             }
//         }, []);
//         debugger
//         const fetchData = async (zipcode, poNo) => {
//             try {
//               const response = await axios.get('http://localhost:8080/continuum/PO/search', {
//                 params: {
//                   zipcode,
//                   poNo,
//                 },
//               });
//               console.log(response.data);
//               setData(response.data);
//             } catch (error) {
//               console.error('Error fetching data:', error);
//             }
//           };
//           return data
//         }

//export default SearchAPI;