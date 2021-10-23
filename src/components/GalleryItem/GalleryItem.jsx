

function GalleryItem ({path, description, id, likes, likeItem}) {


  
    return (
       <>
            <div>
                <div>
                    <img src={path}/>
                    <p>{description}</p>
                        </div>
                            <div>
                                <button onClick={() => likeItem(id)}>Like This!</button>
                            </div>
                        <div>
                    <h5>{likes} friends like this!</h5>
                </div>
            </div>
        </>
    );

}

export default GalleryItem;


