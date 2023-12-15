const sidebarData = [
    {
        "brand": {
            "text": "Admin Two",
            "icon": "bx bxs-smile icon"
        },
        "menuItems": [
            {
                "text": "Dashboard",
                "icon": "bx bxs-dashboard icon",
                "isActive": true
            },
            {
                "text": "Main",
                "dividerText": "main"
            },
            {
                "text": "Elements",
                "icon": "bx bxs-inbox icon",
                "isActive": false,
                "dropdown": {
                    "isActive": false,
                    "items": [
                        {
                            "text": "Alert"
                        },
                        {
                            "text": "Badges"
                        },
                        {
                            "text": "Breadcrumbs"
                        },
                        {
                            "text": "Button"
                        }
                    ]
                }
            },
            {
                "text": "Charts",
                "icon": "bx bxs-chart icon",
                "isActive": false
            },
            {
                "text": "Widgets",
                "icon": "bx bxs-widget icon",
                "isActive": false
            },
            {
                "text": "Table and forms",
                "dividerText": "table and forms"
            },
            {
                "text": "Tables",
                "icon": "bx bx-table icon",
                "isActive": false
            },
            {
                "text": "Forms",
                "icon": "bx bxs-notepad icon",
                "isActive": false,
                "dropdown": {
                    "isActive": false,
                    "items": [
                        {
                            "text": "Basic"
                        },
                        {
                            "text": "Select"
                        },
                        {
                            "text": "Checkbox"
                        },
                        {
                            "text": "Radio"
                        }
                    ]
                }
            }
        ],
        "ads": {
            "upgradeButton": "Upgrade",
            "description": "Become a PRO member and enjoy All Features"
        }
    }
]

const cardsData = [
    {
        "value": 1500,
        "icon": "bx-trending-up",
        "label": "Traffic",
        "progress": "40%"
    },
    {
        "value": 234,
        "icon": "bx-trending-down",
        "label": "Sales",
        "progress": "60%"
    },
    {
        "value": 465,
        "icon": "bx-trending-up",
        "label": "Pageviews",
        "progress": "30%"
    },
    {
        "value": 235,
        "icon": "bx-trending-up",
        "label": "Visitors",
        "progress": "80%"
    }
]

export { sidebarData, cardsData }