import React, { useState } from 'react';
import { AppBar, Popover } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import SearchIcon from '@mui/icons-material/Search';


export const Navbar = ({ onCategorySelect, onSearch  }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
      };

      const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchValue(event.target.value);
        onSearch(searchValue);
        console.log(event.target.value);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PopupState variant="popover" popupId="demoPopup">
            {(popupState) => (
              <React.Fragment>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  {...bindTrigger(popupState)}
                  sx={{ mr: 2 }} 
                >
                  <MenuIcon />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography
                      component="div"
                      onClick={() => handleCategorySelect("all")}
                      sx={{ cursor: 'pointer' }}
                    >
                      All
                    </Typography>
                    <Typography
                      component="div"
                      onClick={() => handleCategorySelect("Sports")}
                      sx={{ cursor: 'pointer' }}
                    >
                      Sports
                    </Typography>
                    <Typography
                      component="div"
                      onClick={() => { handleCategorySelect("War") 
                    console.log(selectedCategory);
                    }}
                      sx={{ cursor: 'pointer' }}
                    >
                      War
                    </Typography>
                    <Typography
                      component="div"
                      onClick={() => handleCategorySelect("Economy")}
                      sx={{ cursor: 'pointer' }}
                    >
                      Economy
                    </Typography>
                  </Box>
                </Popover>
              </React.Fragment>
            )}
          </PopupState>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
