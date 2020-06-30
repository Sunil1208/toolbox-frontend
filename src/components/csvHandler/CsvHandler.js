import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

const CSVHandler = () => {

    const [isDataFeteched,setIsDataFetched] = useState(true)

    const TableData = () => {
        return(
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
        )
    }

    return(
        <React.Fragment>
        <div className="row">
            <div className="col-6 mt-3">
                <p className="text-center"><strong>Upload CSV file to fetch data</strong></p>
            </div>
            <div className="col-6 mt-3">
            <Form className="text-right">
            <Form.Group>
              <Form.File id="exampleFormControlFile1"  />
            </Form.Group>
          </Form>
            </div>
        </div>
        <div className="row">
            {isDataFeteched && (
                <TableData/>
            )}
        </div>
        </React.Fragment>
    )
}

export default CSVHandler;