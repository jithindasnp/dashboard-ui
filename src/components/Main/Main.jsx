import React from 'react'
import './Main.css'

export default function Main() {
    return (
        <>
            <div className="container-fluid mt-3" >
                <div className="row align-items-center mainTitleRow  pb-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000" data-aos-once="true">
                    <div className="col-sm-3">
                        <div className="box">
                            <i className="fa fa-search opacity-50" aria-hidden="true"></i>
                            <input type="text" name="" className='fw-semibold' placeholder='Search Tasks' />
                            <i class="fa-solid fa-up-right-from-square opacity-50" ></i>
                        </div>
                    </div>
                    <div className="col-sm-1 d-flex justify-content-center"><i class="fa-solid fa-microphone opacity-50 "></i></div>
                    <div className="col-sm-5 d-flex justify-content-center">
                        <div className="row align-items-center ">
                            <div className="col-auto px-2"><p className='mainTitle fw-bold'>Dashboard</p></div>
                            <div className="col-auto px-2"><p className='mainTitle opacity-75 fw-bold'>My Tasks</p></div>
                            <div className="col-auto px-2"><p className='mainTitle opacity-75 fw-bold'>Reporting</p></div>
                            <div className="col-auto px-2"><p className='mainTitle opacity-75 fw-bold'>Portfolios</p></div>
                            <div className="col-auto px-2"><p className='mainTitle opacity-75 fw-bold'>Goals</p></div>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-end">
                        <div className="row align-items-center ">
                            <div className="col-auto"><i class="fa-regular fa-folder opacity-50"></i></div>
                            <div className="col-auto"><i class="fa-regular fa-bell opacity-50"></i></div>
                            <div className="col-auto">
                                <div className="notification">
                                    <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                    <span class="badge">4</span>
                                </div>
                            </div>
                            <div className="col-1 Xcoloumn h-100  d-flex justify-content-center">
                                <i class="fa-solid fa-xmark opacity-50"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="secondPartMain" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000" data-aos-once="true">
                    <div className="row mt-3 mainAfter" >
                        <div className="col-xl-11 col-sm-12">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-3 col-12  d-flex justify-content-center align-items-center"><h3>Task Boards</h3><i class="fa-solid fa-pencil opacity-50 ms-3"></i></div>
                                <div className="col-xl-6  col-12 d-flex justify-content-center">
                                    <div className="row mt-2 align-items-center justify-content-between">
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"><a href="" ><p>Timeline</p></a></div>
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"> <p>Calendar</p></div>
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"><p>Dashboard</p></div>
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"><p>Progress</p></div>
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"><p>Forms</p></div>
                                        <div className="col-auto px-1 fw-semibold opacity-50 mainTaskLinks"><p>More</p></div>
                                    </div>
                                </div>
                                <div className="col-2 ">
                                    <div className="row">
                                        <div className=" col-1"><img height={45} width={47} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                        <div className=" col-1"><img height={45} width={47} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                        <div className=" col-1"><img height={45} width={47} className="mainTaskImg" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80" alt="" /></div>
                                        <div className=" col-1"><img height={45} width={47} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                        <div className=" col-1 pt-2 "><span className="mainTaskCount fw-semibold">+5</span> </div>
                                    </div>
                                </div>
                                <div className="col-1 text-center ">
                                    <p className='mainTaskPlus '><i class="fa-solid mt-2 fa-plus mainTaskPlusIcon opacity-50 "></i></p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-7">
                                    <div className="row">
                                        <div className="col-sm-auto d-flex align-items-center">
                                            <div className="boardView d-flex align-items-center fw-semibold  w-100 rounded-2 ">
                                                <i class="fa-solid fa-border-all opacity-50 mx-1"></i>
                                                <p className='ms-2 mb-0 opacity-75 fw-semibold me-1' style={{ fontSize: "11px" }}>Board View</p>
                                            </div>
                                            <div className="boardView d-flex align-items-center fw-semibold  w-100 rounded-2  ">
                                                <i class="fa-solid fa-bars opacity-50 mx-1"></i>
                                                <p className='ms-2 mb-0 opacity-75 fw-semibold me-1' style={{ fontSize: "11px" }}>Board View</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto d-flex justify-content-center">
                                            <div className="access d-flex align-items-center opacity-50">
                                                <i class="fa-solid fa-lock"></i>
                                                <p className='mb-0 mx-1' style={{ fontSize: "10px" }}>Limited Access</p>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto d-flex  justify-content-center align-items-center">
                                            <p className='m-0 opacity-50 fw-semibold' style={{ fontSize: "10px" }}>Owners</p>
                                            <i class="fa-brands fa-twitter mx-1 twitterLogo" style={{ fontSize: "12px" }}></i>
                                            <p className='m-0 opacity-50 fw-semibold' style={{ fontSize: "10px" }}>Twitter Team</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 ">
                                    <div className="row">
                                        <div className="col-sm-5 d-flex  align-items-center">
                                            <div className="box2">
                                                <i className="fa fa-search opacity-50" aria-hidden="true"></i>
                                                <input type="text" name="" className='fw-semibold' placeholder='Search Tasks' />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                            <i class="fa-regular fa-file-lines mainBoardViewIcons me-1 "></i>
                                            <i class="fa-solid fa-bars-staggered mainBoardViewIcons me-1 "></i>
                                            <i class="fa-regular fa-chart-bar mainBoardViewIcons me-1 "></i>
                                            <i class="fa-solid fa-toggle-off mainBoardViewIcons me-1 "></i>
                                            <i class="fa-regular fa-pen-to-square mainBoardViewIcons me-1 "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* /cards starting/ */}



                            <div className="row mt-3 cardsCol">
                                <div className="col-xl-3 col-sm-6" id='first'>
                                    <div className="row mt-3">
                                        <div className="col-sm-auto col pe-0 d-flex justify-content-center align-items-center"> <p className='fw-semibold m-0' style={{ fontSize: "14px" }}>Backlog Tasks</p></div>
                                        <div className="col-sm-auto col ps-1 d-flex justify-content-start align-items-center"> <span className='cardCount'>5</span></div>
                                        <div className="col-sm-auto col ps-5 d-flex justify-content-end align-items-center"><i class="fa-solid fa-ellipsis opacity-50"></i> </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-7">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Model Answer</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-9 col-9">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Create calendar, chat and email app pages</p>
                                                        </div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-9 col-9">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Product Design, Figma, Sketch (Software), Prototype</p>
                                                        </div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-9 col-9">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Change email option process</p>
                                                        </div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row text-center fs-5 opacity-50"><i class="fa-solid fa-circle-plus"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6" id='second'>
                                    <div className="row mt-3">
                                        <div className="col-sm-auto col-auto pe-0 d-flex justify-content-center align-items-center"> <p className='fw-semibold m-0' style={{ fontSize: "14px" }}>To Do Tasks</p></div>
                                        <div className="col-sm-auto col-auto ps-1 d-flex justify-content-start align-items-center"> <span className='cardCount' style={{ backgroundColor: "#ec489a4c", color: "#DB2777" }}>4</span></div>
                                        <div className="col-sm-auto col-auto ps-5 d-flex justify-content-end align-items-center"><i class="fa-solid fa-ellipsis opacity-50"></i> </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-7">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Model Answer</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-auto col-auto">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Add authentication pages</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 "><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-auto col-auto">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Profile Page Satructure</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-7">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Create calendar, chat and email app pages</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row text-center fs-5 opacity-50"><i class="fa-solid fa-circle-plus"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6" id='third'>
                                    <div className="row mt-3">
                                        <div className="col-sm-auto col-auto pe-0 d-flex justify-content-center align-items-center"> <p className='fw-semibold m-0' style={{ fontSize: "14px" }}>In Progress</p></div>
                                        <div className="col-sm-auto col-auto ps-1 d-flex justify-content-start align-items-center"> <span className='cardCount' style={{ backgroundColor: "#a955f748", color: "#9333EA" }}>2</span></div>
                                        <div className="col-sm-auto col-auto ps-5 d-flex justify-content-end align-items-center"><i class="fa-solid fa-ellipsis opacity-50"></i> </div>
                                    </div>
                                    <div className="row mt-3" >
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-7">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Model Answer</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-9 col-9">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Create calendar, chat and email app pages</p>
                                                        </div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row text-center fs-5 opacity-50"><i class="fa-solid fa-circle-plus"></i></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6" id='fourth'>
                                    <div className="row mt-3">
                                        <div className="col-sm-auto col-auto pe-0 d-flex justify-content-center align-items-center"> <p className='fw-semibold m-0' style={{ fontSize: "14px" }}>Done</p></div>
                                        <div className="col-sm-auto col-auto ps-1 d-flex justify-content-start align-items-center"> <span className='cardCount' style={{ backgroundColor: "#22c55e50", color: "#16A34A" }}>5</span></div>
                                        <div className="col-sm-auto col-auto ps-5 d-flex justify-content-end align-items-center"><i class="fa-solid fa-ellipsis opacity-50"></i> </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 col-7">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Model Answer</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-9 col-9">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Create calendar, chat and email app pages</p>
                                                        </div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"><i class="fa-regular fa-file-lines"></i><p className='ms-3 m-0'>4</p></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel3' className='fw-bold' style={{ backgroundColor: "#ca8b0432", color: "#CA8A04" }}>Backlog</span></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                                                        <div className="col-sm-1 col-1 p-0"><img height={30} width={38} className="mainTaskImg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                                                        <div className="col-sm-3 col-3 p-0 d-flex"><span className="mainCardCount fw-semibold" style={{ fontSize: "15px" }}>+5</span> </div>
                                                        <div className="col-sm-1 col-1 ps-0"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>
                                                        <div className="col-sm-1 col-1 "><i class="fa-solid fa-file-arrow-up ms-1" style={{ color: "#A855F7" }}></i></div>
                                                        <div className="col-sm-1 col-1 pe-0"><p className='m-0 text-info '>4</p></div>
                                                        <div className="col-sm-1 col-1 pe-2"><i class="fa-solid fa-message" style={{ color: "#F59E0B" }}></i></div>
                                                        <div className="col-sm-1 col-1 "><p className='m-0 text-info'>4</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row">
                                                        <div className="col-sm-auto col-auto">
                                                            <p className='fw-semibold m-0' style={{ fontSize: "11px" }}>Product Design, Figma, Sketch (Software), Prototype</p>
                                                        </div>
                                                        <div className="col-sm-2 col-2"></div>
                                                        <div className="col-sm-3 col-3 d-flex align-items-center text-info fw-semibold"></div>
                                                    </div>
                                                    <div className="row mt-1 justify-content-start">
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel1' className='fw-bold' >#UI007</span></div>
                                                        <div className="col-sm-auto col-auto p-0"><span id='cardLabel2' className='fw-bold' style={{ backgroundColor: "#2564eb3d", color: "#2563EB" }}>Design</span></div>
                                                        <div className="col-sm-auto col-auto p-0"></div>
                                                    </div>
                                                    <div className="row mt-3 align-items-center">
                                                        <div className="col-sm-1 col-1"><p className='mainCardPlus'><i class="fa-solid  fa-plus mainTaskPlusIcon opacity-50 "></i></p></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card pe-3 mt-3" style={{ width: "12rem" }} >
                                                <div className="card-body p-3">
                                                    <div className="row text-center fs-5 opacity-50"><i class="fa-solid fa-circle-plus"></i></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 endCol">
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                            <div className="notify mt-3">
                                <img height={35} width={37} className="mainTitleImg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <span class="badgeNotify">4</span>
                                <i class="fa-solid fa-circle notifyDot"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
