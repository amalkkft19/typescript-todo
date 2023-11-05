type Input={
    values: string;
    onInputValueChage:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}
const InputComponent = ({values,onInputValueChage}:Input) => {
  return (
    <>
    <input value={values} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputValueChage(event)} type='text' className='mt-10 w-full p-2 rounded-sm mb-2 border border-gray-300'/>
    </>
  )
}

export default InputComponent