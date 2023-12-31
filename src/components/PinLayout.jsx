import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { FaDownload } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Outlet } from 'react-router-dom';
import { ImageApi } from '../Data';
const PinLayout = () => {
    const [Photos, setPhotos] = useState([]);
    const get = async () => {
      const res = await ImageApi(`&q=anime&order=trending`);
    //   q=anime&image_type=photo&pretty=true&per_page=60&safesearch=true&order=popular
      if (res) {
        setPhotos(res);
      }
    };
    useEffect(() => {
      get();
    }, []);
  
    const breakpointCols = {
        default: 4,
        1100: 3,
        700: 2,
        420 : 1,
    }
    return (
        <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column" >  
                      {Photos?.hits?.map((val, i) => {
            return (<>
                <div className="card card_small" key={val}>
                    <div className="img_sec">
                        <img src={val?.largeImageURL} alt="" />
                    </div>
                    <div className="overlay">
                        <div className="save">
                            <button>Save</button>
                        </div>
                        <div className="over_button">
                            <button>{val?.pageURL.slice(0,30)}...</button>
                            <button><FaDownload /></button>
                            <button><BsThreeDots /></button>
                        </div>
                    </div>
                    <div className="user_de">
                    <div className="user_profile">
                    <img src={val?.userImageURL || "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"} alt="" />
                    </div>
                    <div className="name">
                          <h3>{val?.pageURL.split("/")[4].split('-').join(' ').slice(0,20)}...</h3>
                        <strong>{val?.user}</strong>
                    </div>
                    </div>
                </div>
            </>)
        })}
        <Outlet/>
    </Masonry>
    )
}

export default PinLayout
