import Cikk from './components/Cikk';
function App() {
  const cikkek = [
    { id: 1, title: 'Első cikk', content: 'Ez az első cikk tartalma.' },
    { id: 2, title: 'Második cikk', content: 'Ez a második cikk tartalma.' },
    { id: 3, title: 'Harmadik cikk', content: 'Ez a harmadik cikk tartalma.' },
  ];
  return (
       <>
       {cikkek.map(cikk => (
        <Cikk key={cikk.id} title={cikk.title} content={cikk.content} />
        ))}
        
        
       </>
    );
}
export default App