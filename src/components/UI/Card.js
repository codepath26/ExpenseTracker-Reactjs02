import './Cart.css'
const Cart =(props)=>{
  const classes = 'cart ' + props.className;
 return <div className={classes}>{props.children}</div>
}
export default Cart;