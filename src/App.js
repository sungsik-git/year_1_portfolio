import './App.css';
import photo from './profile_photo.jpeg'


function App() {
  return (
    <div className="profile_container">
      <div className='profile_photo_container'>
        <img className="profile_photo" src={photo}></img>
      </div>
      <div className='profile_text_container'>
        <h1 className='profile_text_name'>김성식(Kim SungSik)</h1>
      </div>
    </div>
  );
}

export default App;
