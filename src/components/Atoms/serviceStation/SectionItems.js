import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function SectionItems(props) {


    const addToList = () => {
        //add new item to real time list
        const repairExist = props.repairList.filter(item => item.itemName == props.subCat.subCatName);
        console.log("exists");

        console.log(repairExist);

        if (repairExist=='') {
            props.setrepairList(prevList => ([...prevList, {
                itemName: props.subCat.subCatName,
                price: props.subCat.time * 1000 / 60,
                time: props.subCat.time
            }]));
            props.settotalTime(prevTime => prevTime + props.subCat.time);
            props.setestimatedPrice(prevPrice => prevPrice + props.subCat.time * 1000 / 60);
        }else{
            // console.log("repair added already");
            toast.error('❌ repair already added');
        }


    }

    return (
        <div className="w-full bg-white shadow-2xl  rounded-lg h-16 flex items-center mt-5">
            <div className="flex flex-col  items-start   w-9/12 ml-12">
                <div>
                    {props.subCat.subCatName}
                </div>
                <div>
                    {props.subCat.time} min
                    {/* Need to add styles */}
                    <button className="ml-10 bg-green-600 text-white">Change Time</button>
                </div>
            </div>
            <div>
                <button onClick={addToList} className="text-white font-primary bg-blue-500 rounded-lg shadow-xl w-16 h-12 ml-5">Add</button>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </div>
    )
}
