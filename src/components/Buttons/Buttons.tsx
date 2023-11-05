type Button = {
    className?: string;
    children: JSX.Element | string; 
    onClick?: ()=> void;
}
const Buttons = ({ className, children,onClick }: Button) => {
  return (
    <>
    <button type="submit" onClick={onClick} className={className}>{children}</button>
    </>
  )
}

export default Buttons