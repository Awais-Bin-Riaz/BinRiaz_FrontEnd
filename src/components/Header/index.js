// // import React from 'react'
// // import './style.css'
// // /**
// // * @author
// // * @function Header
// // **/

// // export const Header = (props) => {
// //   return(
// //     <div className='header'></div>
// //    )

// //  }
// import React, { useEffect, useState } from 'react';
// import './style.css';
// import mainLogo from '../../images/logo/logo.jpeg';
// import goldenStar from '../../images/logo/golden-star.png';
// import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
// import {
//   Modal,
//   MaterialInput,
//   MaterialButton,
//   DropdownMenu
// } from '../MaterialUI';
// import { useDispatch, useSelector } from 'react-redux';
// import { login,signout } from '../../actions'
// import Cart from "../UI/Cart";


// /**
// * @author
// * @function Header
// **/

// export const Header = (props) => {

//   const [loginModal, setLoginModal] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const auth = useSelector(state => state.auth)
//   const dispatch = useDispatch()
//   const userLogin = () => {
//     dispatch(login({ email, password }));
//   }

// const logout=()=>{
// dispatch(signout())
// }

//   useEffect(() => {
//     if(auth.authenticate){
//       setLoginModal(false)
//     }
//   }, [auth.authenticate])




//   const renderLoggedInMenu=()=>{
//     return(
//       <DropdownMenu
//             menu={
//               <a className='fullName' >
//                 {auth.user.fullName}
//               </a>
//             }
//             menus={[
//               { label: 'My Profile', href: '', icon: null },
//               { label: 'Super coin zone', href: '', icon: null },
//               { label: 'Flipkart Plus Zone', href: '', icon: null },
//               { label: 'Orders', href: '/account/orders', icon: null },
//               { label: 'Wishlist', href: '', icon: null },
//               { label: 'Wishlist', href: '', icon: null },
//               { label: 'My Chats>', href: '', icon: null },
//               { label: 'Coupens>', href: '', icon: null },
//               { label: 'Rewards', href: '', icon: null },
//               { label: 'Notifications', href: '', icon: null },
//               { label: 'Gift Cards', href: '', icon: null },
//               { label: 'Logout', href: '', icon: null, onClick:logout },
//             ]}

//           />
//     )

//   };
//   const renderNonLoggedInMenu=()=>{
//     return(
//     <DropdownMenu
//             menu={
//               <a className="loginButton" onClick={() => setLoginModal(true)}>
//                 Login
//               </a>
//             }
//             menus={[
//               { label: 'My Profile', href: '', icon: null },
//               { label: 'Flipkart Plus Zone', href: '', icon: null },
//               {
//                 label: "Orders",
//                 href: `/account/orders`,
//                 icon: null,
//                 onClick: () => {
//                   !auth.authenticate && setLoginModal(true);
//                 },
//               },              { label: 'Wishlist', href: '', icon: null },
//               { label: 'Rewards', href: '', icon: null },
//               { label: 'Gift Cards', href: '', icon: null },
//             ]}
//             firstMenu={
//               <div className="firstmenu">
//                 <span>New Customer?</span>
//                 <a style={{ color: '#2874f0' }}>Sign Up</a>
//               </div>
//             }
//           />)
//   }

//   return (
//     <div className="header">
//       <Modal
//         visible={loginModal}
//         onClose={() => setLoginModal(false)}
//       >
//         <div className="authContainer">
//           <div className="row">
//             <div className="leftspace">
//               <h2>Login</h2>
//               <p>Get access to your Orders, Wishlist and Recommendations</p>
//             </div>
//             <div className="rightspace">


//               <MaterialInput
//                 type="text"
//                 label="Enter Email/Enter Mobile Number"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <MaterialInput
//                 type="password"
//                 label="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               // rightElement={<a href="#">Forgot?</a>}
//               />
//               <MaterialButton
//                 title="Login"
//                 bgColor="#fb641b"
//                 textColor="#ffffff"
//                 style={{ margin: '40px 0 20px 0' }}
//                 onClick={userLogin}
//               />
//               <p>OR</p>
//               <MaterialButton
//                 title="Request OTP"
//                 bgColor="#ffffff"
//                 textColor="#671113"
//                 style={{ margin: '20px 0' }}
//               />



//             </div>
//           </div>
//         </div>
//       </Modal>
//       <div className="subHeader">
//         {/* logo */}
//         <div className="logo">
//           <a href="">
//             <img src={mainLogo} className="logoimage" alt="" />
//           </a>
//           <a style={{ marginTop: '-10px' }}>
//             <span className="exploreText">Explore</span>
//             <span className="plusText">Plus</span>
//             <img src={goldenStar} className="goldenStar" alt="" />
//           </a>
//         </div>
//         {/*logo end*/}

//         {/* search */}
//         <div style={{
//           padding: '0 10px'
//         }}>
//           <div className="searchInputContainer">
//             <input
//               className="searchInput"
//               placeholder={'search for products, brands and more'}
//             />
//             <div className="searchIconContainer">
//               <IoIosSearch style={{
//                 color: '#2874f0'
//               }} />
//             </div>

//           </div>
//         </div>
//         {/* search end */}

//         {/* right side menu */}
//         <div className="rightMenu">
//           {
//           auth.authenticate ?
//           renderLoggedInMenu() : renderNonLoggedInMenu()
//         }
//           <DropdownMenu
//             menu={
//               <a className="more">
//                 <span>More</span>
//                 <IoIosArrowDown />
//               </a>
//             }
//             menus={[
//               { label: 'Notification Preference', href: '', icon: null },
//               { label: 'Sell on flipkart', href: '', icon: null },
//               { label: '24x7 Customer Care', href: '', icon: null },
//               { label: 'Advertise', href: '', icon: null },
//               { label: 'Download App', href: '', icon: null }
//             ]}
//           />
//           <div>
//             <a href={`/cart`} className="cart">
//               {/* <Cart count={Object.keys(cart.cartItems).length} /> */}
//               <span style={{ margin: "0 10px" }}>Cart</span>
//             </a>
//           </div>
//         </div>
//         {/* right side menu ends */}
//       </div>
//     </div>
//   )

// }

import React, { useEffect, useState } from "react";
import "./style.css";
// import mainLogo from '../../images/logo/logo2.png';
import mainLogo from '../../images/logo/Rlogo.png';
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            style={{ color: "white" }}
            className="fullName">
            {auth.user.firstName}
            <IoIosArrowDown />
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "SuperCoin Zone", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Login
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <>
      <div className="header">
        <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
          <div className="authContainer">
            <div className="row">
              <div className="leftspace">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
              <div className="rightspace">
                <div className="loginInputContainer">
                  {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  )}
                  {signup && (
                    <MaterialInput
                      type="text"
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  )}

                  <MaterialInput
                    type="text"
                    label="Email/Mobile Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MaterialInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                  />
                  <MaterialButton
                    title={signup ? "Register" : "Login"}
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                    onClick={userLogin}
                  />
                  <p><a href="mailto:anasbinriaz@gmail.com" >Forgot Password</a></p>
                  {/* <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                /> */}
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Navbar style={{ backgroundColor: "#33080A" }} expand="lg" >
          <Container fluid>
            <Navbar.Brand className="navlogo" style={{ paddingLeft: "50px", display: "flex", justifyContent: "flex-start" }} href="#">
              <div className="logo">
                <a href={`/`}>
                  <img src={mainLogo} className="logoimage" alt="" />
                </a>
              </div>
              <Form style={{ paddingLeft: "50px" }} className="d-flex navform">
                <Form.Control
                  style={{ paddingLeft: "20px", paddingRight: "70px" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button size="md" style={{ backgroundColor: "#DFCA9F", border: "none", color: "#671113", marginLeft: "10px" }} >Search</Button>
              </Form>
            </Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
            >
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <Navbar.Text className="navlink" style={{ display: "flex", paddingLeft: "450px" }}>
                  {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}

                  <DropdownMenu
                    menu={
                      <a style={{ color: "white" }} className="more">

                        <span>More</span>
                        <IoIosArrowDown />
                      </a>
                    }
                    menus={[
                      { label: "Notification Preference", href: "", icon: null },
                      { label: "Sell on flipkart", href: "", icon: null },
                      { label: "24x7 Customer Care", href: "", icon: null },
                      { label: "Advertise", href: "", icon: null },
                      { label: "Download App", href: "", icon: null },
                    ]}
                  />
                  <a href={`/cart`} className="cart">
                    <Cart count={Object.keys(cart.cartItems).length} />
                    <span style={{ margin: "0 10px" }}>Cart</span>
                  </a>
                </Navbar.Text>

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <div className="subHeader">
        <div className="logo">
          <a href="#">
            <img src={mainLogo} className="logoimage" alt="" />
          </a>
        </div>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Notification Preference", href: "", icon: null },
              { label: "Sell on flipkart", href: "", icon: null },
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          />
          <div>
            <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Header;