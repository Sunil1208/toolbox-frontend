import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const data = require('../testdata/test.json')


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  

const InnerData = ({index,data}) => {
    return(
        <tr>
          <td>{index}</td>
          <td>{data.Date}</td>
          <td>{data['Store name']}</td>
          <td>{data.SupplierID}</td>
          <td>{data['Bike Cost']}</td>
          <td>{data['Fuel Cost']}</td>
          <td>{data.Zoom}</td>
        </tr>
    )
}


const TableData = () => {
    const classes = useStyles();
    const [lowerBound,setLowerBound] = useState(0)
    const [upperBound,setUpperBound] = useState(5)
    const [page, setPage] = useState(1);

    const TotalCount = data.length
    //console.log(`Total elements are : ${TotalCount}`)
    const [pageNumber,setPageNumber] = useState(TotalCount)
    //console.log(`Initial page count number is : ${pageNumber}`)
   
    const SetPageValue= () => {
  
      if(TotalCount%5===0){
        let tempPageNo = parseInt(TotalCount/5)
        console.log(tempPageNo)
        setPageNumber(tempPageNo)
      } else {
        let tempPageNo = TotalCount/5
        tempPageNo= parseInt(tempPageNo+1)
        console.log(tempPageNo)
        setPageNumber(tempPageNo)
  
      }
      console.log(`New Page Number is : ${pageNumber}`)
      return ''
    }

    const handleChange = (event, value) => {
        setPage(value);
          let tempValue = value*5
          setLowerBound(tempValue-5)
          setUpperBound(tempValue)
           
      };

    const BasicPagination = () => {
        return(
          <div className={classes.root}>
          
          <Pagination count={pageNumber} page={page} onChange={handleChange} color="primary" />
          </div>
        )
      }

    
    console.log(data)
    return(
        <React.Fragment>
        <Table responsive hover>
        <SetPageValue/>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Store name</th>
              <th>SupplierID</th>
              <th>Bike Cost</th>
              <th>Fuel Cost</th>
              <th>Zoom</th>
            </tr>
          </thead>
          <tbody>
                {data.map((subData,index) => {
                    if(index >= lowerBound && index <upperBound){
                        return(
                            <InnerData key={index+1} index={index+1} data={subData}/>
                        )
                      }
                })}
          </tbody>
        </Table>
        <div className="col-12">
        <div class="d-flex flex-row-reverse pt-2 pb-2 text-right">
          <BasicPagination/>
          </div>
          </div>
        </React.Fragment>
    )
}

export default TableData;