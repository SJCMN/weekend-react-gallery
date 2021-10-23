import axios from 'axios'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'


function GalleryList ({newGalleryItems, getGalleryItems}) {

    const likeItem = (id) => {
        axios
        .put(`/gallery/like/${id}`)
        .then((response) => {
            // console.log('PUT success', response);
            getGalleryItems();
        })
        .catch((error) => {
            console.log("PUT ERROR in likeItem", error);
        });
    }

    // console.log('In GalleryList', newGalleryItems);

    return (
        <>
            <h1 >Cattle Dog Gallery</h1>
            <div class="container">
                {newGalleryItems.map((galleryItem) => (
                    <GalleryItem 
                    key={galleryItem.id}
                    id={galleryItem.id}
                    path={galleryItem.path}
                    description={galleryItem.description}
                    likes={galleryItem.likes}
                    likeItem={likeItem}
                />
            ))} 
            </div>           
        </>
    )
}

export default GalleryList;
