import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  return (
    <>
    <div className="header flex items-center justify-content justify-between h-16 border-2">
        <div className="header_logo flex justify-between">
         <img src="https://storage.googleapis.com/assets_workspace/uploads/7uffzv9dk4sn-3652TCzauH9jaL0QJ8H6FM-bfed64c7e8da9ac20d439f436570f955-Drive_Full_Logo_2x.svg" alt="" />
        </div>
        <div className="header_search flex  items-center  border-2 rounded-2xl w-[40%] justify-start	">
            <SearchIcon className='bg-transparent '/>
            <input type="text" placeholder='Search' className=' w-[96%] h-[40px]'/>
            <FormatAlignCenterIcon/>
        </div>
        <div className="header_options flex">
            <span className=''>
                <HelpIcon/>
                <SettingsIcon className='ml-4'/>
            </span>
            <span className='ml-10'>
                <AppsIcon/>
                <AccountCircleIcon className='ml-4 mr-4'/>
            </span>
        </div>
    </div>
    </>
  )
}
