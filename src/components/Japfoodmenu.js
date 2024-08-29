const Japfoodmenu = ({home, about, menu, contact}) => {

/* above is destructing objects */ 

/* props is a object key-value pair */
/* const Japfoodmenu = ({props}) => {} */ 
/* console.log(props) */ 
/* <ul id="menu"><li><a href="#">{props.home}</a></li> */ 
/* eg: props.home, props.about, props.menu, props.contact */

  return (
  <>
    <nav>
    <ul id="menu">
      <li>
        <a href="#">{home}</a>
      </li>
      <li>
        <a href="#">{about}</a>
      </li>
      <li>
        <a href="#">{menu}</a>
      </li>
      <li>
        <a href="#">{contact}</a>
      </li>
    </ul>
    </nav>
  </>
  );
}

export default Japfoodmenu;