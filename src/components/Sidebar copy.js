import React from "react";
import { useState } from "react";
import { sidebar } from "../data/data";

export const Sidebar = ({ showSidebar }) => {
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
                <i className={sidebar.brand?.icon}></i> {sidebar.brand?.text}
            </a>
            <ul className="side-menu">
                {sidebar.menuItems?.map((item, index) => (
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
                        {sidebar.ads.upgradeButton}
                    </a>
                    <p>
                        {sidebar.ads.description.split(" ")?.map((word, idx) => (
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
