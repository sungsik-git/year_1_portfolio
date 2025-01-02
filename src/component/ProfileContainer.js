import React from "react";
import './ProfileContainer.css';
import photo from '../profile_photo.jpeg';

function ProfileContainer() {
  return (
    <div className="profile_container container-fluid">
      {/* 사진 영역 */}
      <div className="profile_photo_container d-flex">
        <img className="profile_photo" src={photo} alt="Profile" />
      </div>
      {/* 텍스트 영역 */}
      <div className="profile_text_container">
        {/* 이름 */}
        <div className="profile_text_name_container text-center">
          <h1 className="profile_text_name_kr">김성식</h1>
          <h2 className="profile_text_name_en">(Kim SungSik)</h2>
        </div>
        {/* 생년월일과 거주지 */}
        <div className="profile_text_row row">
          <div className="profile_text_brith_container col-md-6">
            <h1>생년월일</h1>
            <h2 className="profile_text_brith">1995.07.08</h2>
          </div>
          <div className="profile_text_address_container col-md-6">
            <h1>거주지</h1>
            <h2 className="profile_text_address">경기도 광주시 초월읍 도곡길 56-14</h2>
          </div>
        </div>
        {/* 경력사항 */}
        <div className="profile_text_career_container">
          <h1>경력사항</h1>
          <h2 className="profile_text_career">2024.01.01~ 어나더 선데이 재직중</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
