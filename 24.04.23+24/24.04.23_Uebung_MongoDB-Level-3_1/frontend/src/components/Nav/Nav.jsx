import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/">
            {/* onClick="window.location.reload(true)" */}
            <h2>MMDb</h2>
          </NavLink>
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              viewBox="0 0 62 59"
              fill="none"
            >
              <path
                d="M27.674 2.05238L20.1066 17.3075L3.17538 19.7617C0.13912 20.1996 -1.0777 23.9212 1.12417 26.0527L13.3735 37.9204L10.4763 54.6849C9.9548 57.7152 13.1649 59.9851 15.8535 58.5678L31 50.6522L46.1465 58.5678C48.8351 59.9735 52.0452 57.7152 51.5237 54.6849L48.6265 37.9204L60.8758 26.0527C63.0777 23.9212 61.8609 20.1996 58.8246 19.7617L41.8934 17.3075L34.326 2.05238C32.9701 -0.666816 29.0415 -0.701382 27.674 2.05238Z"
                fill="#E9C46A"
              />
            </svg>
          </NavLink>
        </div>
        <SearchBar />
        <NavLink to="/add-movie">Add a movie</NavLink>

        <Link to="/favorites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 0 30 27"
            fill="none"
          >
            <path
              d="M27.0881 1.78373C23.8772 -0.93555 19.1019 -0.446428 16.1547 2.57564L15.0004 3.75769L13.8462 2.57564C10.9048 -0.446428 6.12365 -0.93555 2.91277 1.78373C-0.766844 4.90479 -0.9602 10.5064 2.33271 13.8895L13.6704 25.5236C14.4028 26.2747 15.5922 26.2747 16.3246 25.5236L27.6623 13.8895C30.9611 10.5064 30.7677 4.90479 27.0881 1.78373Z"
              fill="#2a9d8f"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
