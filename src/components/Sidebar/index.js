import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">NUESTRAS GENÉTICAS</SidebarLink>
				<SidebarLink to="/">GUIAS</SidebarLink>
				<SidebarLink to="/">CARRITO</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/">Order Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;
