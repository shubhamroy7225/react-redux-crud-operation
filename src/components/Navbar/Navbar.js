import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalUser from "../modal/ModalUser";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../redux/actions/UserActions";
import "../../assest/Navbar.css";
function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const isOpenModal = () => {
    setOpenModal(true);
  };
  const isCloseModal = () => {
    setOpenModal(false);
  };
  const searchText = (e) => {
    dispatch(getUserSuccess(e.target.value));
  };
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Button variant="info" onClick={isOpenModal}>
            Add User
          </Button>
          <div className="inputDiv">
            <input
              type="text"
              name="search"
              onChange={searchText}
              placeholder="Search..."
              className="inputText"
            >
            </input>
            <SearchIcon />
          </div>
        </div>
      </nav>
      <ModalUser show={openModal} onHide={isCloseModal} />
    </div>
  );
}
export default Navbar;
