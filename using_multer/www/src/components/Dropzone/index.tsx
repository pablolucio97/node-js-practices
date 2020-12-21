import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'


interface PropsInterface{
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<PropsInterface> = ({
    onFileUploaded
}) => {

    const [selectedImgURL, setSelectedImgURL] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    
    const fileURL = URL.createObjectURL(file)

    setSelectedImgURL(fileURL)
    onFileUploaded(file)

  }, [onFileUploaded])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: 'image/*'
    
    })


    
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept='image/*'  placeholder='upload files here'/>
      {

         selectedImgURL? <img src={selectedImgURL} alt='Image thunbails' width='100' style={{borderRadius: 50}}/> 
         : <p>Upload your files here </p>
        

      }
    </div>
  )
}

export default Dropzone