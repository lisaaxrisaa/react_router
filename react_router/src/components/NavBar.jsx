import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/emma">
        Emma
      </Link>
      <Link className="links" to="/autumn-emma">
        Autumn Emma
      </Link>
      <Link className="links" to="/bed-emma">
        Bed Emma
      </Link>
      <Link className="links" to="/blue">
        Blue
      </Link>
      <Link className="links" to="/red">
        Red
      </Link>
    </div>
  );
}
