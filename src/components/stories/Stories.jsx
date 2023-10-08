import React from 'react'
import './stories.scss'

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Aayush jha",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Aayush jha",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Aayush jha",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Aayush jha",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  
  return (
  <div className="stories">
    {stories.map(story=>(
      <div className="story" key={story.id}>
      <img src={story.img} alt="" />
      <span>{story.name}</span>
      </div>
      
    )

)}
</div>
  )
}

export default Stories