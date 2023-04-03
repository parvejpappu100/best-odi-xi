import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Modal from '../Modal/Modal';

const Players = () => {
    const [players , setPlayers] = useState([]);
    useEffect( () => {
        fetch("players.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
    } , [])
    const [details , setDetails] = useState([]);
    const modalDetails = (player) =>{
        setDetails([...details , player])
    }
    const batter = players.filter(player => player.role == "Batter");
    const bowler = players.filter(player => player.role == "Bowler");
    const alrounder = players.filter(player => player.role == "Al Rounder");
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:container mx-auto my-5'>
                <div className='col-span-2 row-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        alrounder.map(player => <Player
                        key = {player.id}
                        player = {player}
                        details = {modalDetails}
                        ></Player>)
                    }
                    {
                        batter.map(player => <Player
                        key = {player.id}
                        player = {player}
                        details = {modalDetails}
                        ></Player>)
                        
                    }
                    {
                        bowler.map(player => <Player
                        key = {player.id}
                        player = {player}
                        details = {modalDetails}
                        ></Player>)  
                    }
                </div>
                <div className='border border-gray-400 sticky top-3'>
                    <h3 className='text-2xl text-center'>Draft Summary</h3>
                </div>
            </div>
            <Modal 
                details = {details}
            ></Modal>
        </>
    );
};

export default Players;