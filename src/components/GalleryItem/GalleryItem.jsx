import {useState} from 'react'
import './GalleryItem.css'

function GalleryItem ({path, description, id, likes, likeItem}) {

    let [descriptionToggle, setDescriptionToggle] = useState(true)

    let dogDiv = <img src={path}/>

    const handleClick = () => {
        console.log('clicked');
        setDescriptionToggle(!descriptionToggle)
        // if(e){
        // dogDiv = <p>{description}</p>
        // } else {
        // dogDiv = <img src={path}/>
        // }
  
    }
  
    return (
       <>
            <div className="tile">
                <div className="tileImg" onClick={handleClick}>
                    {descriptionToggle ? <img src={path}/> : <p>{description}</p>}
                    {/* {dogDiv} */}
                        </div>
                            <div>
                                <button className="likeBtn" onClick={() => likeItem(id)}>Like This!</button>
                            </div>
                        <div className="likeCount">
                    <h5 >{likes > 0 ? `${likes} friends like this!` : `This pup needs some friends!`}</h5>
                </div>
            </div>
        </>
    );

}

export default GalleryItem;


