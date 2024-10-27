import NavbarOne from '../app/components/navBars/navbar-one/page';
import NavabarTwo from "../app/components/navBars/navbar-two/page";
import NavbarThree from "../app/components/navBars/navbar-three/page";
import NavbarFour from "../app/components/navBars/navbar-four/page";
import NavbarFive from "../app/components/navBars/navbar-five/page";
import NavbarSix from "../app/components/navBars/navbar-six/page";
import NavbarSeven from "../app/components/navBars/navbar-seven/page";
import NavbarEight from "../app/components/navBars/navbar-eight/page";

// Export individual navbar components
export const NavbarComponents = {
    NavbarOne,
    NavabarTwo,
    NavbarThree,
    NavbarFour,
    NavbarFive,
    NavbarSix,
    NavbarSeven,
    NavbarEight
}

// Export navbar data with default props
export const NavbarsData = [
    {
        id: "nav1",
        name: "Navbar One",
        component: NavbarOne,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    {
        id: "nav2",
        name: "Navbar Two",
        component: NavabarTwo,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    {
        id: "nav3",
        name: "Navbar Three",
        component: NavbarThree,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    {
        id: "nav4",
        name: "Navbar Four",
        component: NavbarFour,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    {
        id: "nav5",
        name: "Navbar Five",
        component: NavbarFive,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    {
        id: "nav6",
        name: "Navbar Six",
        component: NavbarSix,
        defaultProps: {
            classes: "",
            styles: {
                width: '100%',
                // Add more default styles as needed
            }
        }
    },
    // {
    //     id: "nav7",
    //     name: "Navbar Seven",
    //     component: NavbarSeven,
    //     defaultProps: {
    //         classes: "",
    //         styles: {
    //             width: '100%',
    //             // Add more default styles as needed
    //         }
    //     }
    // },
    // {
    //     id: "nav8",
    //     name: "Navbar Eight",
    //     component: NavbarEight,
    //     defaultProps: {
    //         classes: "",
    //         styles: {
    //             width: '100%',
    //             // Add more default styles as needed
    //         }
    //     }
    // }
]
