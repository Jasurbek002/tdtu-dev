// import React, { useEffect } from 'react';
// import { useContext } from 'react';
// import axios from '../components/axios/axios';
// import { context } from '../components/context/context';

// export default function useFetch(method, data, file) {


//   useEffect(() => {
//     const { path, id, setData, setMessage, setLoading } = useContext(context)

//     if (file) {
//       const formData = new FormData()
//       formData.append('banner', file.files[0], file.type)
//     }

//     if (method === 'get') {
//       setLoading(true)
//       axios.get(path)
//         .then(res => setData(res.data))
//         .catch(err => setMessage(
//           {
//             active: true,
//             message: err.message,
//             status: err.status
//           }))
//         .finally(() => {
//           setLoading(false)
//         })
//     }

//     if (method === 'post') {
//       setLoading(true)
//       axios.post(path, {
//         body: formData,
//       })
//         .catch((err) => setMessage({ active: true, message: err.message, status: err.status }))
//         .finally(setLoading(false))
//     }

//   }, [])

// }
