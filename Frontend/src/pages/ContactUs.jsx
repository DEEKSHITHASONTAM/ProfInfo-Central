import React from "react";
import Contacts from "./contact";
import Card from "./Card";
import './Card.css';

function ContactUs(){
    return (
        <div>
        <div className='cont'>
          { Contacts.map((item) => {
            return (
              <Card 
              key ={item.name}
              name = {item.name}
              phone ={item.phone}
              email ={item.email}
              image ={item.image}
              />
              );
           })}
           <Card />
           <Card />
        </div>
        </div>
      );
}

export default ContactUs;