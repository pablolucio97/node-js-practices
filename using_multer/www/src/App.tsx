import React, {useState, useEffect} from 'react';
import Dropzone from './components/Dropzone/index'

import api from './services/api'



interface ObjectsInterface{
  object: string,
  img: string
}

function App() {

  const [objects, setObjects] = useState<ObjectsInterface[]>([])
  const [object, setObject] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()


  useEffect(() => {
    api.get('/list-objects').then(response => setObjects(response.data))
  })

  
  
  const createObject = async () => {

    const data = new FormData();

    data.append('object', object);
    if(!selectedFile){
      alert('Take an image')
      return
    }
    data.append('img', selectedFile);
    await api.post('/create-object', data)
  }

  return (
    <div>
      <h1>Lisiting my objects:</h1>
      {
        objects.map(item => (
          <p>{item.object}</p>
          ))
        }
        <h1>Using Dropzone with uploads images from Multer</h1>
        <Dropzone onFileUploaded={setSelectedFile}/>
        <h1>Adding objects</h1>
        <input type="text" onChange={e => setObject(e.target.value)}/>
        <button onClick={createObject}>Create Object</button>
      <p>{object}</p>
      <img src={selectedFile?.name} width='100' height='100'/>
    </div>
  );
}

export default App;
