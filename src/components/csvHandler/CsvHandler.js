import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import { API } from '../../backend'
import Button from 'react-bootstrap/Button'
import { uploadFile } from '../../helper/apicalls'
import Spinner from 'react-bootstrap/Spinner'
import TableData from '../table/Table'



const CSVHandler = () => {

    const [isDataFeteched,setIsDataFetched] = useState(true)
    const [selectedFile,setSelectedFile] = useState("")
    const [error,setError] = useState("")
    const [receivedData,setReceivedData] = useState([])
    const [loading,setLoading] = useState(false)

    const handleChange = event => {
        setSelectedFile(event.target.files[0])
        console.log(selectedFile)

    }

    const onUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );

        console.log(selectedFile)

    }

    const onUpload1 = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );

        console.log(selectedFile)

        uploadFile(selectedFile).then( data => {
            if(data.error){
                setError(data.error)
                setLoading(false)
                console.log(data.error)
            } else {
                setReceivedData(data)
                setIsDataFetched(true)
                setLoading(false)
            }
        })

    }
    
    const LoadingVisual = () => {
            return(    
                <Spinner className="text-center" animation="border" variant="primary" role="status">   
                </Spinner>
            ) 
    }


    return(
        <React.Fragment>
        <div className="row">
            <div className="col-xs-12 col-md-6 mt-3">
                <p className="text-center"><strong>Upload CSV file to fetch data</strong></p>
            </div>
            <div className="col-xs-12 col-6 mt-3">
            <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-8 mb-2">
            <input type="file" onChange={handleChange} />         
            </div>
            <div className="col-xs-12 col-md-4 col-lg-4">
            <Button 
                    variant="secondary" 
                    size="sm" 
                    style={{whiteSpace:"normal", wordWrap:"break-word"}}
                    onClick = {()=> {onUpload()}}
                    >Upload</Button>     
            </div>
            </div>
            </div>
        </div>
        <div className="row">
            {loading && (
                <div className="col-12 text-center" >
            <LoadingVisual/> <span className="pl-2"><strong>Uploading and fetching data.....</strong></span>
            </div>
            )}

            {isDataFeteched && (
                <TableData/>
            )}   
        </div>
        </React.Fragment>
    )
}

export default CSVHandler;