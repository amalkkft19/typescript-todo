import './App.css'
import ImageHeader from './components/imageHeader/ImageHeader';
import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import InputComponent from './components/InputComponent/InputComponent';
import ItemsList from './components/ItemsList/ItemsList';
import { Items } from './utils/types';

function App() {

  const [ items ,setItems ] = useState<Items[]>([]);
  const [ values, setValues ] = useState<string>('');

  const onInputValueChage =(event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setValues(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent)=>{
    event.preventDefault();
      setItems((val)=>[...val, {id: Date.now().toString(), title: values}])
    setValues('');
    console.log(items);
   

  }

  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center mb-8'>
        <ImageHeader/>
        <div className='w-[350px]'>
          <form onSubmit={handleSubmit} className='mb-5'>
            {/* <input value={values} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputValueChage(event)} type='text' className='w-full p-2 rounded-sm mb-2'/> */}
            <InputComponent values={values} onInputValueChage={onInputValueChage} />
            <Buttons className="text-gray-50 bg-gray-700 w-full p-2" children="ADD" />
          </form>
          <div className='h-52 overflow-y-auto'>
            <ItemsList items={items} setItems={setItems}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
