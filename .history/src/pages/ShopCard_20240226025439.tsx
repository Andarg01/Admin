import React, { useEffect, useState } from "react";
import axios from "axios";

interface Shop {
  id: string;
  name: string;
  description: string;
  picture: string;
  permissionName: string;
  shopUrl: string; // Include shopUrl in the Shop interface
}

const ShopPage: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get<Shop[]>(
          "https://sheba-app.onrender.com/api/shops/user/all"
        );
        setShops(response.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              src={shop.picture}
              alt={shop.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>
            <p className="text-gray-600 mb-2">{shop.description}</p>
            <p className="text-gray-600 mb-2">Permission: {shop.permissionName}</p>
            <a
              href={shop.shopUrl} // Use shopUrl to create the link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Shop
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;













// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import axios from 'axios';
// // import { fetchShopsSuccess, fetchShopsFailure } from './actions';

// // const ShopPage: React.FC = () => {
// //   const dispatch = useDispatch();
// //   const shops = useSelector((state) => state.shops);

// //   useEffect(() => {
// //     fetchShops();
// //   }, []);

// //   const fetchShops = async () => {
// //     try {
// //       const response = await axios.get('https://sheba-app.onrender.com/api/shops/user/all');
// //       dispatch(fetchShopsSuccess(response.data));
// //     } catch (error) {
// //       dispatch(fetchShopsFailure(error));
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-2xl font-bold mb-4">Shops</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {shops.map((shop) => (
// //           <div key={shop.id} className="bg-white rounded-lg shadow-xl p-4">
// //             <h2 className="text-lg font-bold mb-2">{shop.name}</h2>
// //             <p className="mb-2">{shop.description}</p>
// //             {/* Display other shop details */}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopPage;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShopPage: React.FC = () => {
//   const [shops, setShops] = useState<any[]>([]);

//   useEffect(() => {
//     fetchShops();
//   }, []);

// // for authorize

// // const fetchShops = async () => {
// //   try {
// //     const token = 'YOUR_AUTH_TOKEN'; // Replace this with the actual token obtained from the backend
// //     const response = await axios.get('/api/shops/user/all', {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     setShops(response.data);
// //   } catch (error) {
// //     console.error('Error fetching shops:', error);
// //   }
// // };







//   const fetchShops = async () => {
//     try {
//       const response = await axios.get('https://sheba-app.onrender.com/api/shops/user/all');
//       setShops(response.data);
//     } catch (error) {
//       console.error('Error fetching shops:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Shops</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {shops.map((shop) => (
//           <div key={shop.id} className="bg-white rounded-lg shadow-xl p-4">
//             <h2 className="text-lg font-bold mb-2">{shop.name}</h2>
//             <p className="mb-2">{shop.description}</p>
//             {/* Display other shop details */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopPage;












// // import React, { useState, useEffect } from 'react';
// // import '../styles/shopCard.css';

// // const ShopCard = () => {
// //   const [shops, setShops] = useState([]);

// //   useEffect(() => {
// //     fetch('https://sheba-app.onrender.com/api/shops')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch shop data');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setShops(data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching shop data:', error);
// //       });
// //   }, []);

// //   return (
// //     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 -mt-11">
// //       <p className="text-4xl">List of shops</p>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
// //         {shops.map(shop => (
// //           <div key={shop.id} className="rounded overflow-hidden shadow-lg flex flex-col">
// //             <div className="relative">
// //               <a href="#">
// //                 <img
// //                   className="w-full h-60"
// //                   src={shop.imgUrl}
// //                   alt={shop.name}
// //                 />
// //                 <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
// //               </a>
// //               <a href="#!">
// //                 <div className="add__shop text-xs absolute top-0 right-0  px-4 py-2  mt-3 mr-3 transition duration-500 ease-in-out">
// //                   Add to cart
// //                 </div>
// //               </a>
// //             </div>
// //             <div className="px-6 py-4 mb-auto">
// //               <a
// //                 href="#"
// //                 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
// //               >
// //                 {shop.name}
// //               </a>
// //               <p className="text-gray-500 text-sm">
// //                 {shop.description}
// //               </p>
// //             </div>
// //             <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
// //               <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
// //                 <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
// //                   {/* Your SVG path here */}
// //                 </svg>
// //                 <span className="ml-1">6 mins ago</span>
// //               </a>
// //               <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
// //                 <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
// //                 </svg>
// //                 <span className="ml-1">39 Comments</span>
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ShopCard;






// // // import React, { useState, useEffect } from 'react';
// // // import '../styles/shopCard.css';

// // // const ShopCard = () => {
// // //   const [shops, setShops] = useState([]);

// // //   useEffect(() => {
// // //     fetch('https://sheba-app.onrender.com/api/GET /api/shops')
// // //       .then(response => response.json())
// // //       .then(data => setShops(data))
// // //       .catch(error => console.error('Error fetching data:', error));
// // //   }, []);

// // //   return (
// // //     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 -mt-11">
// // //       <p className="text-4xl">List of shops</p>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
// // //         {shops.map(shop => (
// // //           <div key={shop.id} className="rounded overflow-hidden shadow-lg flex flex-col">
// // //             <div className="relative">
// // //               <a href="#">
// // //                 <img
// // //                   className="w-full h-60"
// // //                   src={shop.imageUrl}
// // //                   alt={shop.name}
// // //                 />
// // //                 <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
// // //               </a>
// // //               <a href="#!">
// // //                 <div className=" add__shop text-xs absolute top-0 right-0  px-4 py-2  mt-3 mr-3 transition duration-500 ease-in-out">
// // //                   Add to cart
// // //                 </div>
// // //               </a>
// // //             </div>
// // //             <div className="px-6 py-4 mb-auto">
// // //               <a
// // //                 href="#"
// // //                 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
// // //               >
// // //                 {shop.name}
// // //               </a>
// // //               <p className="text-gray-500 text-sm">
// // //                 {shop.description}
// // //               </p>
// // //             </div>
// // //             <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
// // //               <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
// // //                 <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
// // //                   {/* Your SVG path here */}
// // //                 </svg>
// // //                 <span className="ml-1">6 mins ago</span>
// // //               </a>
// // //               <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
// // //                 <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
// // //                 </svg>
// // //                 <span className="ml-1">39 Comments</span>
// // //               </a>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ShopCard;








// // // // import React from 'react'
// // // // import '../styles/shopCard.css'
// // // // const ShopCard = () => {
// // // //   return (
// // // //     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 -mt-11">
// // // //       <p className="text-4xl">List of shops</p>

// // // //       <div className="border-b mb-5 flex justify-between text-sm">
// // // //         <div className="text-gray-800 flex items-center pb-2 pr-2 border-b-2 border-gray-600 uppercase">
// // // //           <svg
// // // //             className="h-6 mr-3"
// // // //             version="1.1"
// // // //             id="Capa_1"
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             xmlnsXlink="http://www.w3.org/1999/xlink"
// // // //             viewBox="0 0 455.005 455.005"
// // // //             // style={{ enableBackground: 'new 0 0 455.005 455.005' }}
// // // //             xmlSpace="preserve"
// // // //           >
// // // //             {/* Your SVG path here */}
// // // //           </svg>
// // // //         </div>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
// // // //         {/* CARD 1 */}
// // // //         <div className="rounded overflow-hidden shadow-lg flex flex-col">
// // // //           <div className="relative">
// // // //             <a href="#">
// // // //               <img
// // // //                 className="w-full h-60"
// // // //                 src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
// // // //                 alt="Sunset in the mountains"
// // // //               />
// // // //               <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
// // // //             </a>
// // // //             <a href="#!">
// // // //               <div className="add__shop text-xs absolute top-0 right-0  px-4 py-2  mt-3 mr-3 transition duration-500 ease-in-out">
// // // //                 Add to chart
// // // //               </div>
// // // //             </a>
// // // //           </div>
// // // //           <div className="px-6 py-4 mb-auto">
// // // //             <a
// // // //               href="#"
// // // //               className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
// // // //             >
// // // //               Best T-shirt
// // // //             </a>
// // // //             <p className="text-gray-500 text-sm">
// // // //             A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
// // // //             It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
// // // //             </p>
// // // //           </div>
// // // //           <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 height="13px"
// // // //                 width="13px"
// // // //                 version="1.1"
// // // //                 id="Layer_1"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //                 xmlnsXlink="http://www.w3.org/1999/xlink"
// // // //                 x="0px"
// // // //                 y="0px"
// // // //                 viewBox="0 0 512 512"
// // // //                 // style={{ enableBackground: 'new 0 0 512 512' }}
// // // //                 xmlSpace="preserve"
// // // //               >
// // // //                 {/* Your SVG path here */}
// // // //               </svg>
// // // //               <span className="ml-1">6 mins ago</span>
// // // //             </a>

// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 className="h-5"
// // // //                 fill="none"
// // // //                 viewBox="0 0 24 24"
// // // //                 stroke="currentColor"
// // // //               >
// // // //                 <path
// // // //                   stroke-linecap="round"
// // // //                   stroke-linejoin="round"
// // // //                   strokeWidth="2"
// // // //                   d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
// // // //                 ></path>
// // // //               </svg>
// // // //               <span className="ml-1">39 Comments</span>
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //         <div className="rounded overflow-hidden shadow-lg flex flex-col">
// // // //           <div className="relative">
// // // //             <a href="#">
// // // //               <img
// // // //                 className="w-full h-60"
// // // //                 src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
// // // //                 alt="Sunset in the mountains"
// // // //               />
// // // //               <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
// // // //             </a>
// // // //             <a href="#!">
// // // //               <div className=" add__shop text-xs absolute top-0 right-0  px-4 py-2  mt-3 mr-3 transition duration-500 ease-in-out">
// // // //                 Add to chart
// // // //               </div>
// // // //             </a>
// // // //           </div>
// // // //           <div className="px-6 py-4 mb-auto">
// // // //             <a
// // // //               href="#"
// // // //               className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
// // // //             >
// // // //               Best T-shirt
// // // //             </a>
// // // //             <p className="text-gray-500 text-sm">
// // // //             A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
// // // //             It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
// // // //             </p>
// // // //           </div>
// // // //           <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 height="13px"
// // // //                 width="13px"
// // // //                 version="1.1"
// // // //                 id="Layer_1"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //                 xmlnsXlink="http://www.w3.org/1999/xlink"
// // // //                 x="0px"
// // // //                 y="0px"
// // // //                 viewBox="0 0 512 512"
// // // //                 // style={{ enableBackground: 'new 0 0 512 512' }}
// // // //                 xmlSpace="preserve"
// // // //               >
// // // //                 {/* Your SVG path here */}
// // // //               </svg>
// // // //               <span className="ml-1">6 mins ago</span>
// // // //             </a>

// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 className="h-5"
// // // //                 fill="none"
// // // //                 viewBox="0 0 24 24"
// // // //                 stroke="currentColor"
// // // //               >
// // // //                 <path
// // // //                   stroke-linecap="round"
// // // //                   stroke-linejoin="round"
// // // //                   strokeWidth="2"
// // // //                   d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
// // // //                 ></path>
// // // //               </svg>
// // // //               <span className="ml-1">39 Comments</span>
// // // //             </a>
// // // //           </div>
// // // //         </div>

// // // //         <div className="rounded overflow-hidden shadow-lg flex flex-col">
// // // //           <div className="relative">
// // // //             <a href="#">
// // // //               <img
// // // //                 className="w-full h-60"
// // // //                 src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
// // // //                 alt="Sunset in the mountains"
// // // //               />
// // // //               <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
// // // //             </a>
// // // //             <a href="#!">
// // // //               <div className="add__shop text-xs absolute top-0 right-0 px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out">
// // // //                 Add to chart
// // // //               </div>
// // // //             </a>
// // // //           </div>
// // // //           <div className="px-6 py-4 mb-auto">
// // // //             <a
// // // //               href="#"
// // // //               className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
// // // //             >
// // // //               Best T-shirt
// // // //             </a>
// // // //             <p className="text-gray-500 text-sm">
// // // //             A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
// // // //             It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
// // // //             </p>
// // // //           </div>
// // // //           <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 height="13px"
// // // //                 width="13px"
// // // //                 version="1.1"
// // // //                 id="Layer_1"
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //                 xmlnsXlink="http://www.w3.org/1999/xlink"
// // // //                 x="0px"
// // // //                 y="0px"
// // // //                 viewBox="0 0 512 512"
// // // //                 // style={{ enableBackground: 'new 0 0 512 512' }}
// // // //                 xmlSpace="preserve"
// // // //               >
// // // //                 {/* Your SVG path here */}
// // // //               </svg>
// // // //               <span className="ml-1">6 mins ago</span>
// // // //             </a>

// // // //             <a
// // // //               href="#"
// // // //               className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
// // // //             >
// // // //               <svg
// // // //                 className="h-5"
// // // //                 fill="none"
// // // //                 viewBox="0 0 24 24"
// // // //                 stroke="currentColor"
// // // //               >
// // // //                 <path
// // // //                   stroke-linecap="round"
// // // //                   stroke-linejoin="round"
// // // //                   strokeWidth="2"
// // // //                   d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
// // // //                 ></path>
// // // //               </svg>
// // // //               <span className="ml-1">39 Comments</span>
// // // //             </a>
// // // //           </div>
// // // //         </div>

       
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ShopCard


