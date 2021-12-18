// styled components --> CSS within JS
// have to install it
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      } else {
        dispatch(setSignOut());
        navigate("/login");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/");
    });
  };

  const signOut = () => {
    auth.signOut();
    dispatch(setSignOut());
    navigate("/login");
  };

  console.log(userName);

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {userName ? (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" />
              <span>Home</span>
            </Link>
            <Link to="/">
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </Link>
            <Link to="/">
              <img src="/images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </Link>
            <Link to="/">
              <img src="/images/original-icon.svg" />
              <span>originals</span>
            </Link>
            <Link to="/">
              <img src="/images/movie-icon.svg" />
              <span>movies</span>
            </Link>
            <Link to="/">
              <img src="/images/series-icon.svg" />
              <span>series</span>
            </Link>
          </NavMenu>

          <UserImg onClick={signOut} src={userPhoto} />
        </>
      ) : (
        <Login onClick={signIn}>Login</Login>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const Login = styled.div`
  border: 1px solid white;
  border-radius: 2px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  margin-left: auto;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  transition: all 250ms ease;

  &:hover {
    background: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
