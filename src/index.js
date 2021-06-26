import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div>
      <h2>{ props.name }</h2>
      <img 
        className="pic"
        src={ props.img }
        alt="avatar_img"
      />
      <p>{ props.tel }</p>
      <p>{ props.email }</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 789" 
      email="b@beyonce.com"
    />
    <Card 
      name="Austin Lim" 
      img="http://bimage.interpark.com/milti/contents/upload/38939910_20170228102654_.jpg" 
      tel="+123 456 789" 
      email="austin@kakao.com"
    />
    <Card 
      name="Reallyyy" 
      img="https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTlfMTgy/MDAxNDg3NDQ4NTM4MzI1.MQrzjhQGMjUXwhFv5Po-TiF-dExbs3a353NFfD4JFxMg.4T-d-iiodSyaWIRWuk3nyNZ41-D9S8KtR2loV-NQiHAg.JPEG.ghdud1641/KakaoTalk_20170219_044608189.jpg?type=w800" 
      tel="+123 456 789" 
      blog="https://m.blog.naver.com/PostList.naver?blogId=ghdud1641"
    />

  </div>,
  document.getElementById("root")
);
