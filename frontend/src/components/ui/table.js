import React from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./Table.css"



const columns = [
  {
    name: "destination",
    selector: (row) => row.destination,
    sortable: true,
  },
  {
    name: "origin",
    selector: (row) => row.origin,
    sortable: true,
  },
  {
    name: "date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "capacity",
    selector: (row) => row.capacity,
    sortable: true,
  },
  {
    name: "Total Price",
    selector: (row) => `${row.totalPrice} $`,
    sortable: true,
  },
];


function Table({ value, state, adult, setBook }) {
  let { path } = useRouteMatch();
  const flight = value;


  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);

  }, []);
  const contextActions = React.useMemo(() => {
    const bookHandler = async () => {
      if (
        swal({
          title: "Are you sure?",
          text: `you want to book on:\r ${selectedRows.map(
            (r) => r.destination
          )}?`,

          icon: "warning",

          buttons: true,
          dangerMode: false,

            

        }).then((result) => {
          if (result) {
            setBook(selectedRows)



            axios
              .post(
                "http://localhost:5000/flightBooking/",
                {
                  flightId: selectedRows[0].bookingId,
                  adults: adult,
                },
                { headers: { Authorization: `Bearer ${state.token}` } }

              )
              .then((reslut) => {
                console.log(reslut.data);
              })
              .catch((err) => {
                console.log(err);
              });

            swal("thanks! Your book has been saved!", {
              icon: "success",
            });
          } else {
            swal("Your can book again");
          }
        })
      ) {
        history.push(`${path}/update`);
      }
    };
    return (
      <div>
        <button className="clickBook" key="book" onClick={bookHandler}>
          BOOK
        </button>
        
      </div>
      
    );
  }, [adult, history, path, selectedRows, setBook, state.token]);
  return (
    <div className="table_div">
      <DataTable
        title="FlightBooking"
        columns={columns}
        data={flight}
        selectableRows
        pagination
        selectableRowsHighlight
        selectableRowsSingle
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        pointerOnHover
      />
    </div>
  );
}
export default Table;
