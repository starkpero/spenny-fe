import React from 'react';
import './ImageList.css';
//import InfiniteScroll from 'react-infinite-scroll-component';

const ImageList = (props) => {

    return (
        <div className="container">
            <div className="row">
                {props.images.length > 0 && props.images.map((imageObj)=>{
                var path = `https://farm${imageObj.farm}.staticflickr.com/${imageObj.server}/${imageObj.id}_${imageObj.secret}.jpg`;
                return (
                    <div key={imageObj.id} className="col-md-4" style={{marginBottom : "2rem"}}>
                        
                            <div className="imageList__container">
                                <img className="imageList__image" alt="dog" src={path}></img>
                            </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ImageList
