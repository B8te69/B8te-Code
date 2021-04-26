import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav, menuItemT } from "../../redux/app.slice";
import { RootState } from "../../redux/store"

const Header = () => {
  const Items = useSelector<RootState, menuItemT[]>(state=>state.appSlice.menuItems);
  const dispatch = useDispatch();
  const isNavActive = useSelector<RootState, boolean>(state=>state.appSlice.isNavActive);
  return (
    <div className={s.Dropdown}>
      <div className={s.MenuDown} onClick={()=>dispatch(toggleNav(!isNavActive))}>
        <span>Меню</span>
      </div>
      {isNavActive && (
        <div className={s.itemCollection}>
          <span className={s.TextChoose}>Что вы хотите использовать?</span>
          {Items.map((el, i) => (
            <NavLink
              key={i}
              className={s.MenuItem}
              to={el.path}
              exact
            >
              {el.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
export default Header;
