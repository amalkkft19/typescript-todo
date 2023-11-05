import React from 'react'
import Buttons from '../Buttons/Buttons'
import DeleteSvg from '../../assest/icons/DeleteSvg';
import { Items, ReactSetState } from '../../utils/types';

type ItemLIst = {
    items: Items[];
    setItems: ReactSetState<Items[]>

}

const ItemsList = ({items, setItems}: ItemLIst) => {
   
  const handleDeleteBtnClick =(id: string) =>{
    const updatedData = items.filter((item)=> item.id != id)
    setItems(updatedData);
}
  return items.map((item)=>
              <div key={item.id} className='justify-between flex items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
              <p>{item.title}</p>
              <Buttons children={<DeleteSvg/>} onClick={()=>handleDeleteBtnClick(item.id)}/>
            </div>
            )
    
  
}

export default ItemsList