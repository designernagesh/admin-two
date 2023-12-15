import useDropdown from "./useDropdown";

export const ChatBox = () => {
    const { dropdownMenu, toggleDropdownMenu } = useDropdown();

    return (
        <div className="content-data">
            <div className="head">
                <h3>Chatbox</h3>
                <div className="menu">
                    <i className='bx bx-dots-horizontal-rounded icon' onClick={toggleDropdownMenu}></i>
                    <ul className={`menu-link ${dropdownMenu ? 'show' : ''}`}>
                        <li><a href="#">Edit</a></li>
                        <li><a href="#">Save</a></li>
                        <li><a href="#">Remove</a></li>
                    </ul>
                </div>
            </div>
            <div className="chat-box">
                <p className="day"><span>Today</span></p>
                <div className="msg">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="chat">
                            <div className="profile">
                                <span className="username">Alan</span>
                                <span className="time">18:30</span>
                            </div>
                            <p>Hello</p>
                        </div>
                </div>
                <div className="msg me">
                    <div className="chat">
                        <div className="profile">
                            <span className="time">18:30</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum eos quam dolores eligendi exercitationem animi nobis reprehenderit laborum! Nulla.</p>
                    </div>
                </div>
                <div className="msg me">
                    <div className="chat">
                        <div className="profile">
                            <span className="time">18:30</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
                    </div>
                </div>
                <div className="msg me">
                    <div className="chat">
                        <div className="profile">
                            <span className="time">18:30</span>
                        </div>
                        <p>Lorem ipsum, dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="form-group">
                    <input type="text" placeholder="Type..." />
                        <button type="submit" className="btn-send"><i className='bx bxs-send' ></i></button>
                </div>
            </form>
        </div>
    )
}