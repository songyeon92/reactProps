import React from "react";
import Card from "./Card";
import contacts from "../contacts"

const createCard = (contact) => {
    return <Card 
        key = {contact.id}
        name= {contact.name}
        imgURL= {contact.imgURL}
        phone= {contact.phone}
        email= {contact.email}
    />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Card 
        name="최호영"
        imgURL="https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjBfMTE4/MDAxNDg3NTIzMjAwOTY2.ZS6p4LvpuWjejm8RG3hWLGJuvrD__StKUBcM8D_q83Qg.glPSu48IGhcEVTZetcWPvfz-FT-TG7I5INN0zcMUSR4g.JPEG.ghdud1641/KakaoTalk_20170220_000729923.jpg?type=w800"
        phone="+123 456 789"
        email="ho@hoho.com"
      />
      <Card 
        name= "전송연"
        imgURL="https://www.kangwon.ac.kr/DATA/OLD/SVR21/tmpFile/s-gtep.gif_1458283469311.gif"
        phone= "+987 654 321"
        email= "songyeon@nowhere.com"
      />
      <Card 
        name= {contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name= {contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;