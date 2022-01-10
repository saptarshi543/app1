import './App.css';
import Memes from './memes';
import Show from './Show2';
function App() {
  return (

    <div className="App">
        <h1>Hello There!</h1>
        <br></br>
        <br></br>
        <h4>my E-mail: saptarshichatterjee543@gmail.com</h4>
        <h4>if you are a true Star Wars fan then you know exactly what to reply....</h4>
        <a href='https://github.com/saptarshi543'>my github account</a>
       {/* const memes_list=["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1","https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomedaily.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fstar-wars-memes-4-1.jpg&f=1&nofb=1","https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg"]; */}
      <br></br>
      <br></br>
      <h3>Here are some random Star Wars memes....</h3>
      <Memes />

      <p>test field</p>
      <Show />
      </div>
  );
}

export default App;
