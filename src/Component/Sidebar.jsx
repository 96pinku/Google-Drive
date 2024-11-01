import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiHardDrive } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiUserShared2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiSpamLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import { FaBullseye } from 'react-icons/fa6';
import { db, storage } from '../firebase';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));
export default function Sidebar() {
    const [open , setopen] = useState(false)
    const [uploading , setuploading] = useState(false)
    const [file , setfile] = useState(null)

    function handleClose(){
        setopen(false)
    }
    function handleopen(){
        setopen(true)
    }
    function handlechange(e){
       if(e.target.files[0])
       {
          setfile(e.target.files[0])
       }
    }
    function handleupload(event){
        event.preventDefault()
        setuploading(true)

        storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
            // console.log(snapshot);
            storage.ref("files").child(file.name).getDownloadURL().then(url=>{
              db.collection("myfiles").add
            })
        })
    }
  return (
    <>
    <Modal open={open} onClose={handleClose}>
       <div className="modal_pop top-[50%] bg-white w-[500px] mt-0 relative translate-y-[-50%] p-[10px] border-r-[10px]">
          <form action="">
            <div className="modalHeading items-center border-b-1 h-[40px] justify-center">
                <h3>Select file you want to upload</h3>
            </div>
            <div className="modalBody">
                {
                    uploading ? (<p className='uploading'>Uploading</p>):(
                        <>
                            <input type="file" onChange={handlechange}/>
                            <input type="submit" onClick={handleupload} className='post_submit w-[100%] bg-[#2381fa] py-[10px] px-[20px] decoration-white	tracking-tighter uppercase text-[16px] border-0 outline-0 border-r-[5px] cursor-pointer	mt-[20px]'/>
                        </>
                    )
                }
            </div>
          </form>
       </div>
    </Modal>
     <div className="sidebar w-[15%]  h-screen shadow-xl">
        <div className="sidebar_btn">
            <button className="flex items-center mt-6 border-2 w-24" onClick={handleopen}>
            <IoMdAdd className='w-8 h-6'/>
            <span className='text-2xl'>New</span>
            </button>
        </div>
        <div className="sidebar_options">
            <div className="sidebar_option flex items-center  mt-4 ">
            <CiHardDrive className='w-8 h-6'/>
            <span className='text-2xl'>My Drive</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <HiOutlineDesktopComputer className='w-8 h-6'/>
            <span className='text-2xl'>Computers</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <RiUserShared2Line className='w-8 h-6'/>
            <span className='text-2xl'>Shared with me</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <FaRegClock className='w-8 h-6'/>
            <span className='text-2xl'>Recent</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <FaRegStar className='w-8 h-6'/>
            <span className='text-2xl'>Starred</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <RiSpamLine className='w-8 h-6'/>
            <span className='text-2xl'>Spam</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <FaRegTrashAlt className='w-8 h-6'/>
            <span className='text-2xl'>Trash</span>
            </div>
            <div className="sidebar_option flex items-center mt-4">
            <TiCloudStorageOutline className='w-8 h-6'/>
            <span className='text-2xl'>Storage</span>
            </div>
            <hr className='mt-4 border-2'/>
            <div className="mt-4 bg-slate-50">
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={10} />
    </Stack>
    <h4 className='mt-2'>0 Bytes of 100MB</h4>
            </div>
        </div>
    </div>
    </>
   
  )
}
