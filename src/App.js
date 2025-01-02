import './App.css';
import photo from './profile_photo.jpeg'


function App() {
  return (
    <div className="profile_container">
      <div className='profile_photo_container'>
        <img className="profile_photo" src={photo}></img>
      </div>
      <div className='profile_text_container'>
        <div className='profile_text_name_container'>
          <h1 className='profile_text_name_kr'>김성식</h1>
          <h1 className='profile_text_name_en'>(Kim SungSik)</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
