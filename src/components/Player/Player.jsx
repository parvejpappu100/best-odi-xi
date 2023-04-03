import React from 'react';
import './Player.css'

const Player = (props) => {
    const details = props.details;
    const {img , name , price_cr , role , odi_ranking  } = props.player ; 
    return (
        <>  
            <div className='shadow-xl'>
                <img className='player-img w-full' src={img} />
                <div className='p-2'>
                    <h3 className='text-2xl font-medium my-1'>{name}</h3>
                    <h6 className='text-xl'>Role : {role}</h6>
                    <h6 className='my-1 font-medium'>Price : {price_cr} Crore</h6>
                    <h6>Icc rank based by role : {odi_ranking}</h6>
                    <div className='flex justify-between my-2'>
                        <div>
                            <label onClick={() => {details(props.player)}} htmlFor="my-modal-5" className="btn btn-ghost">See More</label>
                        </div>
                        <div>
                            <button className="btn btn-ghost">Add to draft</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;