import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import {uploadFuelCost,uploadDpCost} from '../../helper/apicalls'
import Alert from 'react-bootstrap/Alert'



const CSVHandler = () => {

    const [isDataFeteched,setIsDataFetched] = useState(false)
    const [selectedFile,setSelectedFile] = useState("")
    const [error,setError] = useState("")
    const [receivedData,setReceivedData] = useState([])
    const [loading,setLoading] = useState(false)
    const [selectedFileMode,setSelectedFileMode] = useState("fuelCost")
    const [show, setShow] = useState(true);


    const handleChange = event => {
        setSelectedFile(event.target.files[0])
        console.log(`Selected file is `)
        console.log(selectedFile)

    }


     const onUpload = () => {
         console.log(`Selected file mode is `)
         console.log(selectedFileMode)
        setLoading(true)
        const formData = new FormData();
        formData.append(
            selectedFileMode,
            selectedFile,
            selectedFile.name
        );
        console.log(`Selected file is : `)
        console.log(selectedFile)

        if(selectedFileMode==='fuelCost'){
            uploadFuelCost(formData).then( data => {
                if(data?.error){
                    setError(data.error)
                    setLoading(false)
                    setIsDataFetched(true)
                    console.log(data.error)
                } else {
                    console.log(data)
                    setReceivedData(data)
                    setIsDataFetched(true)
                    setLoading(false)
                }
            })
            console.log(receivedData)
        } else if(selectedFileMode==='dpCost') {
            uploadDpCost(formData).then( data => {
                if(data?.error){
                    setError(data.error)
                    setLoading(false)
                    console.log(data.error)
                } else {
                    console.log(data)
                    setReceivedData(data)
                    setIsDataFetched(true)
                    setLoading(false)
                }
            })
            console.log(receivedData)
    
        }  

    }

    //    const uploadDpCost = () => {
    //     setLoading(true)
    //     const formData = new FormData();
    //     formData.append(
    //         selectedFileMode,
    //         selectedFile,
    //         selectedFile.name
    //     );
    //     console.log(`Selected file is : `)
    //     console.log(selectedFile)

    //     uploadDpCost(formData).then( data => {
    //         if(data?.error){
    //             setError(data.error)
    //             setLoading(false)
    //             console.log(data.error)
    //         } else {
    //             console.log(data)
    //             setReceivedData(data)
    //             setIsDataFetched(true)
    //             setLoading(false)
    //         }
    //     })
    //     console.log(receivedData)

    // }

    const AlertVisual = ({data,success,message}) => {
        if(success && data!==''){
            return(
                <Alert variant="success">
                  <Alert.Heading>{message}</Alert.Heading>
                  <h3><u>Generated SQL statement is</u></h3>
                  <p>
                    {data}
                  </p>
                </Alert>
            )
        } else if(success && data===''){
            return(
                <Alert variant="success">
                  <Alert.Heading>{message}</Alert.Heading>
                </Alert>
            )
        } else if(!success){
            return(
                <Alert variant="danger">
                  <Alert.Heading>{message}</Alert.Heading>
                </Alert>
            )
        }
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
        <div className="col-12">
        <p className="text-center"><strong>Upload CSV file to fetch data</strong></p>
        </div>
            <div className="col-xs-12 col-md-6 mt-3">
                <input type="radio" id="bike" name="fuelCost" value="fuelCost" checked={selectedFileMode==="fuelCost"}
                onClick={() => {setSelectedFileMode("fuelCost");
                                    console.log(selectedFileMode)}}
                     />
                <label for="fuelCost"><i className="pl-2">Daily Fuel and bike cost</i></label><br />
                <input type="radio" id="dp" name="dp" value="dpCost" checked={selectedFileMode==="dpCost"}
                    onClick={() => {setSelectedFileMode("dpCost");
                                        console.log(selectedFileMode) }} />
                <label for="dp"><i className="pl-2" >DP cost</i></label><br />
            </div>
            <div className="col-xs-12 col-6 mt-3">
            <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-8 mb-2">
            <input type="file" onChange={handleChange} />  
            <br></br> 
            <Button 
            variant="secondary" 
            size="sm" 
            className="mt-1"
            style={{whiteSpace:"normal", wordWrap:"break-word"}}
            onClick = {onUpload}
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
 
        </div>
        {isDataFeteched && (
            <div className="row">
                <div className="col-12">
                    <AlertVisual data={receivedData.data} success={receivedData.success} message={receivedData.message} />
                </div>
            </div>
        )}
        </React.Fragment>
    )
}

export default CSVHandler;