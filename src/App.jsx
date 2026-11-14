import Timer from './Timer';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f3eae0', 
      minHeight: '100vh', 
      padding: '40px', 
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Timer />
    </div>
  );
}

export default App;