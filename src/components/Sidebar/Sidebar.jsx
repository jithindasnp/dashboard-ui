import React, { useEffect, useState } from 'react'
import './Sidebar.css'

export default function Sidebar() {

    const [nav, setnav] = useState(false)
    const [count, setcount] = useState(0)
    useEffect(() => {
        if (nav == true) {
            document.getElementById('sideBarVisible').style.display = 'unset'
            setcount(1)
        }
    }, [nav])
    const reClick = () => {
        if (nav == true && count == 1) {
            document.getElementById('sideBarVisible').style.display = 'none'
            setcount(0)
            setnav(false)
        }
    }
    return (
        <>
            <div className="container-fluid dashContainer" data-aos="fade-right" data-aos-duration="2000">
                <div className="row  dashTitleRow align-items-center">
                    <div className="col-sm-9 col-6"><h6 className='m-0'>Dashboard</h6></div>
                    <div className="col-sm-3 col-6 mt-1 d-flex justify-content-end"><button className='navBtn' onClick={() => { setnav(true);reClick() }} ><i class="fa-sharp fa-solid fa-bars mt-2 opacity-25 m-0"></i></button></div>
                </div>
                <div className="sideBarVisible p-0 m-0" id='sideBarVisible'>
                    <div className="row py-4 dashPhotoRow">
                        <div className="col-sm-3"><img height={50} width={50} className="dashTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                        <div className="col-sm-7 "><p className='p-0 m-0 fw-semibold'>Nancy Martino</p><p className='p-0 m-0 opacity-50 fw-semibold'>Designer</p></div>
                        <div className="col-sm-2 d-flex flex-column"><i class="fa-solid fa-angle-up dashIcons"></i><i class="fa-solid fa-angle-down dashIcons"></i></div>
                    </div>
                    <div className="row dashMainRow my-1 mt-3">
                        <div className="col-sm-9"><p className='fw-semibold opacity-50'>DASHBOARDS</p></div>
                        <div className="col-sm-3 d-flex justify-content-end"><i class="fa-solid fa-angle-up dashIcons"></i></div>
                    </div>
                    <div className="row  dashMainRow my-1 mt-3">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-chalkboard "></i></div>
                        <div className="col-sm-8"><p>Inbox</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>4</p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-file-arrow-up "></i></div>
                        <div className="col-sm-8"><p>Drive Files</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText  ' style={{ width: "30px" }}>435</p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-sharp fa-solid fa-clipboard " ></i></div>
                        <div className="col-sm-8"><p>Boards</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>5</p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-regular fa-clock "></i></div>
                        <div className="col-sm-8"><p>Updates</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-circle-notch "></i></div>
                        <div className="col-sm-8"><p>Analytics</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>2</p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-border-all "></i></div>
                        <div className="col-sm-8"><p>CRM Dashboard</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>2</p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-tag"></i></div>
                        <div className="col-sm-8"><p>Ecommerce</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-credit-card"></i></div>
                        <div className="col-sm-8"><p>Cryptocurrency</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-door-closed"></i></div>
                        <div className="col-sm-8"><p>Projects</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1">
                        <div className="col-sm-2"><i class="dashIcons fa-regular fa-file-image"></i></div>
                        <div className="col-sm-8"><p>NFT Marketplace</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1 pb-3" id='dashMainRowEnd'>
                        <div className="col-sm-2"><i class="dashIcons fa-solid fa-sliders"></i></div>
                        <div className="col-sm-8"><p>Settings</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>2</p></div>
                    </div>
                    <div className="row dashMainRow my-1 mt-4 mb-3">
                        <div className="col-sm-9"><p className='fw-semibold opacity-50'>PROJECTS</p></div>
                        <div className="col-sm-3 d-flex justify-content-end"><i class="fa-solid fa-angle-up dashIcons"></i></div>
                    </div>
                    <div className="row  dashMainRow my-1" >
                        <div className="col-sm-2"><i class="fa-solid fa-hashtag dashIcons"></i></div>
                        <div className="col-sm-8"><p>Additional Calendar</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>6</p></div>
                    </div>
                    <div className="row  dashMainRow my-1" >
                        <div className="col-sm-2"><i class="fa-solid fa-hashtag dashIcons"></i></div>
                        <div className="col-sm-8"><p>Branch Logo Design</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>11</p></div>
                    </div>
                    <div className="row  dashMainRow my-1" >
                        <div className="col-sm-2"><i class="fa-solid fa-hashtag dashIcons"></i></div>
                        <div className="col-sm-8"><p>User Research</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '></p></div>
                    </div>
                    <div className="row  dashMainRow my-1" >
                        <div className="col-sm-2"><i class="fa-solid fa-hashtag dashIcons"></i></div>
                        <div className="col-sm-8"><p>Marketing Sales</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>23</p></div>
                    </div>
                    <div className="row  dashMainRow my-1" >
                        <div className="col-sm-2"><i class="fa-solid fa-hashtag dashIcons"></i></div>
                        <div className="col-sm-8"><p>New Project Template</p></div>
                        <div className="col-sm-2"><p className='dashIcons countText ps-2 '>2</p></div>
                    </div>
                    <div className="row  dashMainRow my-1 mb-5" id='dashMainRowEnd'>
                        <div className="col-sm-2"><i class="fa-solid fa-circle-plus dashIcons"></i></div>
                        <div className="col-sm-8"><p>Add New Project</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
