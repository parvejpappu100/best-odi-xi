import React from 'react';

const ShowModalDetails = ({detail}) => {
    const {img , name ,  role , odi_ranking , odi_run ,battingStyle , bowling_style, ratings , country , century_odi , wickets_odi ,batting_avg  , bowling_avg  ,highest_score ,bbf  } = detail ;
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold my-2 text-lg">Players Description!</h3>
                <div className='flex flex-col-reverse md:flex-row gap-5'>
                    <div className='shadow-xl w-full p-2 border border-red-700 bg-red-100 '>
                        <h6 className='text-xl font-bold'>Role : {role}</h6>
                        <h6 className='text-xl font-bold'>Icc Ranking : {odi_ranking ? odi_ranking : "No data available"}</h6>
                        <h6 className='text-lg font-medium'>Latest Rating : {ratings ? ratings : "No data available"}</h6>
                        <div className=' font-bold my-2 flex flex-col lg:flex-row gap-5'>
                            <div className='bg-white p-2 rounded-xl w-full'>
                                <h6 className='text-center'>Batting Status</h6>
                                <h6>Batting Style : {battingStyle}</h6>
                                <h6>Odi Centuries : {century_odi ? century_odi : "No century yet !"}</h6>
                                <h6>Odi Runs : {odi_run ? odi_run : "He don't bat yet !"}</h6>
                                <h6>Batting Average : {batting_avg}</h6>
                                <h6>Highest Score : {highest_score}</h6>
                            </div>
                            <div className='bg-white p-2 rounded-xl w-full'>
                                <h6 className='text-center'>Bowling Status</h6>
                                <h6>Bowling Style : {bowling_style ? bowling_style : "He can't bowl !!"}</h6>
                                <h6> Odi Wickets : {wickets_odi ? wickets_odi : "No Wickets"}</h6>
                                <h6>Bowling Average : {bowling_avg ? bowling_avg : "No Average"}</h6>
                                <h6>Best Bowling Figure : {bbf ? bbf : "0/0"}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-xl'>
                        <img src={img}></img>
                        <div className='p-2'>
                            <h6 className='text-2xl my-2'>{name}</h6>
                            <h6 className='text-xl font-medium'>Country : {country}</h6>
                        </div>
                    </div>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-5" className="btn">Okey!</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ShowModalDetails;