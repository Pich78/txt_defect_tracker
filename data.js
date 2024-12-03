const defects = [
    {
        "ID": 101,
        "Summary": "Fix login bug",
        "Description": "Users are unable to log in due to a server error. The issue seems to be related to the authentication module.",
        "Status": "New",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.0",
        "Component": "Authentication",
        "Version": "1.0.0",
        "Severity": "Critical",
        "Reporter": "johndoe",
        "Owner": "janedoe",
        "CC": [
            "teamlead",
            "qa"
        ],
        "Keywords": [
            "login",
            "bug",
            "urgent"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-03 12:00:00",
        "Changetime": "2024-12-03 12:15:00",
        "Project": "Project A"
    },
    {
        "ID": 102,
        "Summary": "UI alignment issue on dashboard",
        "Description": "The dashboard widgets are misaligned on smaller screen resolutions.",
        "Status": "Open",
        "Type": "Defect",
        "Priority": "Medium",
        "Milestone": "Release 1.1",
        "Component": "UI",
        "Version": "1.0.1",
        "Severity": "Major",
        "Reporter": "alice",
        "Owner": "bob",
        "CC": [
            "ui_team",
            "qa"
        ],
        "Keywords": [
            "ui",
            "alignment",
            "dashboard"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-02 09:30:00",
        "Changetime": "2024-12-02 10:00:00",
        "Project": "Project B"
    },
    {
        "ID": 103,
        "Summary": "Performance degradation in search functionality",
        "Description": "Search queries are taking longer than expected to return results.",
        "Status": "In Progress",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.2",
        "Component": "Search",
        "Version": "1.1.0",
        "Severity": "Critical",
        "Reporter": "charlie",
        "Owner": "dave",
        "CC": [
            "search_team",
            "qa"
        ],
        "Keywords": [
            "performance",
            "search",
            "slow"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-01 14:45:00",
        "Changetime": "2024-12-01 15:30:00",
        "Project": "Project C"
    },
    {
        "ID": 104,
        "Summary": "Incorrect calculation in financial report",
        "Description": "The total revenue calculation is incorrect in the financial report.",
        "Status": "New",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.3",
        "Component": "Reporting",
        "Version": "1.2.0",
        "Severity": "Major",
        "Reporter": "eve",
        "Owner": "frank",
        "CC": [
            "finance_team",
            "qa"
        ],
        "Keywords": [
            "calculation",
            "report",
            "finance"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-11-30 11:00:00",
        "Changetime": "2024-11-30 11:45:00",
        "Project": "Project D"
    },
    {
        "ID": 105,
        "Summary": "Crash on startup",
        "Description": "The application crashes on startup on Windows 10.",
        "Status": "Open",
        "Type": "Defect",
        "Priority": "Critical",
        "Milestone": "Release 1.4",
        "Component": "Core",
        "Version": "1.3.0",
        "Severity": "Critical",
        "Reporter": "george",
        "Owner": "hannah",
        "CC": [
            "core_team",
            "qa"
        ],
        "Keywords": [
            "crash",
            "startup",
            "windows"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-11-29 08:15:00",
        "Changetime": "2024-11-29 09:00:00",
        "Project": "Project C"
    },
    {
        "ID": 106,
        "Summary": "Fix login bug",
        "Description": "Users are unable to log in due to a server error. The issue seems to be related to the authentication module.",
        "Status": "New",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.0",
        "Component": "Authentication",
        "Version": "1.0.0",
        "Severity": "Critical",
        "Reporter": "johndoe",
        "Owner": "janedoe",
        "CC": [
            "teamlead",
            "qa"
        ],
        "Keywords": [
            "login",
            "bug",
            "urgent"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-03 12:00:00",
        "Changetime": "2024-12-03 12:15:00",
        "Project": "Project A"
    },
    {
        "ID": 107,
        "Summary": "UI alignment issue on dashboard",
        "Description": "The dashboard widgets are misaligned on smaller screen resolutions.",
        "Status": "Open",
        "Type": "Defect",
        "Priority": "Medium",
        "Milestone": "Release 1.1",
        "Component": "UI",
        "Version": "1.0.1",
        "Severity": "Major",
        "Reporter": "alice",
        "Owner": "bob",
        "CC": [
            "ui_team",
            "qa"
        ],
        "Keywords": [
            "ui",
            "alignment",
            "dashboard"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-02 09:30:00",
        "Changetime": "2024-12-02 10:00:00",
        "Project": "Project B"
    },
    {
        "ID": 108,
        "Summary": "Performance degradation in search functionality",
        "Description": "Search queries are taking longer than expected to return results.",
        "Status": "In Progress",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.2",
        "Component": "Search",
        "Version": "1.1.0",
        "Severity": "Critical",
        "Reporter": "charlie",
        "Owner": "dave",
        "CC": [
            "search_team",
            "qa"
        ],
        "Keywords": [
            "performance",
            "search",
            "slow"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-01 14:45:00",
        "Changetime": "2024-12-01 15:30:00",
        "Project": "Project C"
    },
    {
        "ID": 109,
        "Summary": "Incorrect calculation in financial report",
        "Description": "The total revenue calculation is incorrect in the financial report.",
        "Status": "New",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.3",
        "Component": "Reporting",
        "Version": "1.2.0",
        "Severity": "Major",
        "Reporter": "eve",
        "Owner": "frank",
        "CC": [
            "finance_team",
            "qa"
        ],
        "Keywords": [
            "calculation",
            "report",
            "finance"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-11-30 11:00:00",
        "Changetime": "2024-11-30 11:45:00",
        "Project": "Project D"
    },
    {
        "ID": 110,
        "Summary": "Crash on startup",
        "Description": "The application crashes on startup on Windows 10.",
        "Status": "Open",
        "Type": "Defect",
        "Priority": "Critical",
        "Milestone": "Release 1.4",
        "Component": "Core",
        "Version": "1.3.0",
        "Severity": "Critical",
        "Reporter": "george",
        "Owner": "hannah",
        "CC": [
            "core_team",
            "qa"
        ],
        "Keywords": [
            "crash",
            "startup",
            "windows"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-11-29 08:15:00",
        "Changetime": "2024-11-29 09:00:00",
        "Project": "Project E"
    },
    {
        "ID": 111,
        "Summary": "Fix login bug",
        "Description": "Users are unable to log in due to a server error. The issue seems to be related to the authentication module.",
        "Status": "New",
        "Type": "Defect",
        "Priority": "High",
        "Milestone": "Release 1.0",
        "Component": "Authentication",
        "Version": "1.0.0",
        "Severity": "Critical",
        "Reporter": "johndoe",
        "Owner": "janedoe",
        "CC": [
            "teamlead",
            "qa"
        ],
        "Keywords": [
            "login",
            "bug",
            "urgent"
        ],
        "Resolution": "Unresolved",
        "Time": "2024-12-03 12:00:00",
        "Changetime": "2024-12-03 12:15:00",
        "Project": "Project A"
    }
];