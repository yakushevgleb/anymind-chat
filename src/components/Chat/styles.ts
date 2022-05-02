import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sidebarRoot: {
    height: '100%',
    borderRight: '1px solid #e6ecf3'
  },
  card: {
    background: '#f4f5fb',
    border: 0,
    height: '100%',
  },
  rootRow: {
    height: '100%'
  },
  colRight: {
    paddingLeft: 0
  },
  colLeft: {
    paddingRight: 0
  },
  userBlock: {
    marginBottom: '1rem'
  },
  chatContainerRoot: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  channelTitle: {
    padding: '0 15px',
    lineHeight: '64px',
    borderBottom: '1px solid #e6ecf3'
  },
  textareaBlock: {
    paddingTop: '1rem',
    borderTop: '1px solid #e6ecf3'
  },
  messageList: {
    position: 'relative',
    flexGrow: 1,
    overflowY: 'auto',
  },
  scrollable: {
    position: 'absolute',
    width: '100%',
  },
  message: {
    display: 'flex',
    marginBottom: 40
  },
  messageRight: {
    flexDirection: 'row-reverse',
    '& $messageAvatar': {
      marginLeft: 20,
    },
    '& $messageText': {
      '&:before': {
        right: -20,
        borderColor: 'transparent transparent transparent white'
      }
    },
    '& $messageTime': {
      marginRight: 10
    }
  },
  messageLeft: {
    '& $messageAvatar': {
      marginRight: 20,
    },
    '& $messageText': {
      '&:before': {
        left: -20,
        borderColor: 'transparent white transparent transparent'
      }
    },
    '& $messageTime': {
      marginLeft: 10
    }
  },
  messageAvatar: {
    "& img": {
      width: 48,
      height: 48,
      borderRadius: '50%'
    }
  },
  userName: {
    fontSize: '0.75rem',
    color: '#999999',
    textAlign: 'center'
  },
  messageText: {
    position: 'relative',
    whiteSpace: 'pre-line',
    padding: '0.4rem 1rem',
    borderRadius: 4,
    background: 'white',
    fontWeight: 300,
    lineHeight: '150%',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      top: 10,
      border: '10px solid',
    }
  },
  messageTime: {
    fontSize: '0.8rem'
  }
});

export default useStyles;
