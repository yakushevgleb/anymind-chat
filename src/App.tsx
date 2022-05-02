import Chat from 'components/Chat';
import Container from 'react-bootstrap/Container';
import useStyles from 'styles';
import Content from 'ui/Content';
import PageTitle from 'ui/PageTitle';

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.rootWrapper}>
      <PageTitle>
        <h5>1 day chat App</h5>
        <p>All messages will be deleted at every 00:00 UTC</p>
      </PageTitle>
      <Content>
        <Chat />
      </Content>
    </Container>
  );
}

export default App;
