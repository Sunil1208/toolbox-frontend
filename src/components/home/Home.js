import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'
import CSVHandler from '../csvHandler/CsvHandler'



const Home = () => {
    const [selectedTool,setSelectedTool] = useState(0)

    const LeftSide = () => {
        return(
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={() => setSelectedTool(1)} >Data from file</td>
                </tr>
              </tbody>
            </Table>
        )
    }

    const toolHandler = (selectedTool) => {
        if(selectedTool===0){
            return(
                <h3 className="text-center">Please click on any of the tool to perform the operation</h3>
            )
        } else if(selectedTool===1){
            return(
                <CSVHandler/>
            )
        }
        
    }

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" >
                    <h1 className="font-weight-bold text-center mt-3"><u>ToolBox</u></h1>
                    </div>
                </div>
                <div className="row mt-3 mr-1">
                    <div className="col-3">
                        <LeftSide/>
                    </div>
                    <div className="col-9 shadow-sm p-3 mb-5 bg-white rounded">
                        {toolHandler(selectedTool)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;