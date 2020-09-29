// import {useEffect, useState} from "react";
// import {projectFirestore} from "../config/fbConfig";
//
//
// const useFirestore = (collection) => {
//     const [docs, setDocs] = useState([])
//
//     useEffect(() => {
//         const unSubsribe = projectFirestore.collection(collection)
//             .orderBy('createAt', 'desc')
//             .onSnapshot((snap) => {
//                 let documents = [];
//                 snap.forEach(doc => {
//                     documents.push({...doc.data(), id: doc.id})
//                 });
//                 setDocs(documents);
//             })
//         return () => unSubsribe();
//     }, [collection]);
//
//
//
//
//
//     return {docs}
// };
//
// export default useFirestore;
