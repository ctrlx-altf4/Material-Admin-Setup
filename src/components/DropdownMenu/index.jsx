import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const MenuButton = styled(Button)`
  text-transform: capitalize;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LABEL = "Dashboard";
const OPTIONS = [
  { label: "hello", path: "/hello", onClick: () => alert("hello") },
  { label: "What", path: "/what", onClick: () => alert("what") },
  { label: "Who", path: "/who", onClick: () => alert("who") },
];

export default function DropdownMenu(props) {
  const { label = LABEL, options = OPTIONS } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuButton
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        {label}
      </MenuButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {options.map(({ label, path, onClick }) => {
          return (
            <MenuLink to={path} key={label}>
              <MenuItem
                onClick={() => {
                  onClick && onClick();
                  handleClose();
                }}
              >
                {label}
              </MenuItem>
            </MenuLink>
          );
        })}
      </Menu>
    </div>
  );
}
