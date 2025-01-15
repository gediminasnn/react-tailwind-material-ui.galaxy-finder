import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from './LanguageSwitcher.tsx';
import theme from '../theme.ts';

interface DrawerMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  items: { label: string; path: string }[];
}

function DrawerMenu({ open, toggleDrawer, items }: DrawerMenuProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        },
      }}
    >
      <List
        sx={{ width: 250 }}
        onClick={() => toggleDrawer(false)}
      >
        {items.map((item, index) => (
          <ListItem key={index}>
            <NavLink to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={item.label} />
            </NavLink>
          </ListItem>
        ))}
        <ListItem>
          <LanguageSwitcher
            fontSize={theme.typography.body1.fontSize as string}
            padding={theme.spacing(0, 0)}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerMenu;
