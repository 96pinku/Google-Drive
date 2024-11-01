import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Center() {
  return (
    <>
    <div className='w-full h-fit'>
    <div className="h-16 ml-4">
    <h1 className='h-40 ml-4 text-3xl'>Home</h1>
    </div>
    <div className="data">
        <div className="data_grid flex items-center mt-[30px] mb-[30px]">
            <div className="data_file text-center border-1 m-[10px] min-w-[200px] pt-[10px] rounded-md	">
             <InsertDriveFileIcon/>
             <p className='border-t-1 mt-5 text-[12px] bg-white pt-10'>File Name</p>
            </div>
            <div className="data_file text-center border-1 m-[10px] min-w-[200px] pt-[10px] rounded-md	">
             <InsertDriveFileIcon/>
             <p className='border-t-1 mt-5 text-[12px] bg-white pt-10'>File Name</p>
            </div>
            <div className="data_file text-center border-1 m-[10px] min-w-[200px] pt-[10px] rounded-md	">
             <InsertDriveFileIcon/>
             <p className='border-t-1 mt-5 text-[12px] bg-white pt-10'>File Name</p>
            </div>
        </div>
        <div className="data_list">
        <div className="detailsRow flex items-center justify-between border-b-2 bg-white p-10">
            <p><b>Name<ArrowDownwardIcon/></b></p>
            <p><b>Owner</b></p>
            <p><b>Last Modified</b></p>
            <p><b>File Size</b></p>
        </div>
        <div className="detailsRow flex items-center justify-between border-b-2 bg-white p-10">
            <p><b>Name<InsertDriveFileIcon/></b></p>
            <p><b>Me</b></p>
            <p><b>Yesterday</b></p>
            <p><b>1GB</b></p>
        </div>
        </div>
    </div>
    <div className='flex items-center justify-center  ml-4 flex-col h-fit'>
    <img src="https://gdisk.vercel.app/no-files.svg" alt="internet not working" className=' w-[40%] h-[40%]'/>
    <p className=''><span className='text-xl'>Welcome to Drive, the home for all your files</span><br/><span className='ml-16'>Use the “New” button to upload</span>
    </p>
    </div>
    </div>
    </>
  
  )
}
