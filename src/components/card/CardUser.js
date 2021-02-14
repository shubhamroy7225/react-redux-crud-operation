import React, { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalUser from "../modal/ModalUser";
import { deleteUserData } from "../../redux/actions/UsersActions";
const styles = {
  cardImage: {
    width: '22vw',
    height: '30vh'
    }
}
function CardUser() {
  const { users } = useSelector((state) => state.usersReducers);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.userReducers);
  const [data, setData] = useState({});
  const dispatch = useDispatch()
  const updateUser = (val) => {
    setOpen(true);
    setData(val)
  };
  const closeModal = () => {
    setOpen(false);
  };
  const deleteUser=(val)=>{
    dispatch(deleteUserData(val))
  }
  return (
    <div className="containerDiv">
        {users.filter((val)=>{
          if(user === ''){
            return val
          }else if(val.title.toLowerCase().includes(user.toLowerCase())){
            return val
          }
        }).map((val, index) => (
          <Card key={index} style={{ width: '18rem',height:'50%'}}>
            <Card.Img variant="top" src={val.imgUrl} style={styles.cardImage}/>
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
              <Card.Text>{val.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" onClick={() => updateUser(val)}>
                Edit
              </Button>{" "}
              <Button variant="danger"onClick={()=>deleteUser(val)}>Delete</Button>
            </Card.Footer>
          </Card>
        ))}
      <ModalUser show={open} onHide={closeModal} data={data} />
    </div>
  );
}
export default CardUser;
