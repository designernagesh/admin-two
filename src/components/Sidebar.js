import React from "react";
import { useState } from "react";
import { sidebarData } from "../data/data";

function Sidebar ({ showSidebar }){
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        const allElements = document.querySelectorAll("[data-dropdown]");
        allElements.forEach((element) => {
            element.classList.remove("active");
        });

        const clickedElement = document.querySelector(`[data-dropdown="${dropdownName}"]`);
        if (clickedElement) {
            clickedElement.classList.add("active");
        }
        setActiveDropdown((prevDropdown) =>
            prevDropdown === dropdownName ? null : dropdownName
        );
    };

    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <i className={sidebarData[0].brand.icon}></i> {sidebarData[0].brand.text}
            </a>
            <ul className="side-menu">
                {sidebarData[0].menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.dividerText && (
                            <li className="divider" data-text={item.dividerText}>
                                {item?.text}
                            </li>
                        )}
                        {!item.dividerText && (
                            <li>
                                <a
                                    href="#"
                                    className={`${item.isActive ? "active" : ""}`}
                                    data-dropdown={item?.text.toLowerCase()} // Add this attribute
                                    onClick={() => toggleDropdown(item?.text.toLowerCase())}
                                >
                                    <i className={item?.icon}></i> {item?.text}
                                    {item.dropdown && (
                                        <i className="bx bx-chevron-right icon-right"></i>
                                    )}
                                </a>
                                {item.dropdown && (
                                    <ul
                                        className={`side-dropdown ${activeDropdown === item?.text.toLowerCase() ? "show" : ""
                                            }`}
                                    >
                                        {item.dropdown.items?.map((dropdownItem, idx) => (
                                            <li key={idx}>
                                                <a href="#">{dropdownItem?.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
            <div className="ads">
                <div className="wrapper">
                    <a href="#" className="btn-upgrade">
                        {sidebarData[0].ads.upgradeButton}
                    </a>
                    <p>
                        {sidebarData[0].ads.description.split(" ").map((word, idx) => (
                            <span key={idx} className={word === "PRO" ? "pro" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;