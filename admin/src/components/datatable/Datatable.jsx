import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { userColumns, userRows } from "../../datatablesource";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList((prevList) => prevList.filter((item) => item._id !== id));

      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  // const handleUpdate = async (id, updatedData) => {
  //   try {
      
  //     const response = await axios.put(`/${path}/${id}`, updatedData);
  
      
  //     if (response.status === 200) {
       
  //       setList((prevList) =>
  //         prevList.map((item) => (item._id === id ? { ...item, ...updatedData } : item))
  //       );
  //     } else {
      
  //       console.error("Update was not successful");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>           
             <div
 className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            {/* <div
 className="updateButton"
              onClick={() => handleUpdate(params.row._id)}
            >
             Update
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
    
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
};

export default Datatable;

// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const Datatable = ({columns}) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];
//   const [list, setList] = useState();
//   const { data, loading, error } = useFetch('/${path}');

//   useEffect(() => {
//     setList(data);
//   }, [data]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/${path}/${id}`);
//       setList(list.filter((item) => item._id !== id));
//     } catch (err) {}
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         {path}
//         <Link to={`/users/new`} className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={list}
//         columns={columns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//         getRowId={(row) => row._id}
//       />
//     </div>
//   );
// };

// export default Datatable;

// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const Datatable = ({columns}) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];
//   const [list, setList] = useState();
//   const { data, loading, error } = useFetch(`/${path}`);

//   useEffect(() => {
//     setList(data);
//   }, [data]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/${path}/${id}`);
//       setList(list.filter((item) => item._id !== id));
//     } catch (err) {}
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         {path}
//         <Link to={`/${path}/new`} className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={list}
//         columns={columns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//         getRowId={(row) => row._id}
//       />
//     </div>
//   );
// };

// export default Datatable;

// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const Datatable = ({columns}) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];
//   const [list, setList] = useState([]);
//   const { data, loading, error } = useFetch(`/${path}`);

//   useEffect(() => {
//     setList(data);
//   }, [data]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/${path}/${id}`);
//       setList(list.filter((item) => item._id !== id));
//     } catch (err) {}
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to={`${path}/${params?.id}`} style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         {path}
//         <Link to={`/${path}/new`} className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={list}
//         columns={columns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//         getRowId={(row) => row._id}
//       />
//     </div>
//   );
// };

// export default Datatable;
