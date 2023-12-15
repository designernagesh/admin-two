import useDropdown from "./useDropdown"
import SalesChart from './SalesChart';

function SalesReport() {
    const { dropdownMenu, toggleDropdownMenu } = useDropdown();

    return (
        <div className="content-data">
            <div className="head">
                <h3>Sales Report</h3>
                <div className="menu">
                    <i className='bx bx-dots-horizontal-rounded icon' onClick={toggleDropdownMenu}></i>
                    <ul className={`menu-link ${dropdownMenu ? 'show' : ''}`}>
                        <li><a href="#">Edit</a></li>
                        <li><a href="#">Save</a></li>
                        <li><a href="#">Remove</a></li>
                    </ul>
                </div>
            </div>
            <div className="chart">
            <SalesChart />
            </div>
        </div>
    )
}

export default SalesReport
