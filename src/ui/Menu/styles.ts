import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menuRoot: {
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  },
  menuItem: {
    padding: '10px 1rem',
    cursor: 'pointer',
    borderBottom: '1px solid #f0f4f8',
    fontWeight: 600,
    fontSize: '.85rem',
    "&:hover": {
      backgroundImage: 'linear-gradient(right, #e9eff5, #ffffff)',
      backgroundColor: 'white',
    },
    "&:last-child": {
      borderBottom: 0
    }
  },
  active: {
    backgroundImage: 'linear-gradient(right, #f7f9fb, #ffffff)',
    backgroundColor: 'white',
  }
});

export default useStyles;
