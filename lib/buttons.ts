import BtnDashed from "../app/components/btns/btn-dashed/btn-dashed"
import BtnGradiant from "../app/components/btns/btn-gradiant/btn-gradiant"
import Button1 from "../app/components/btns/btn-one/btn-one"
import BtnOutlineGradiant from "../app/components/btns/btn-outline-gradiant/btn-outline-gradiant"
import BtnThumb from "../app/components/btns/btn-thumb/btn-thumb"
import BtnOutline from "../app/components/btns/BtnOutline/BtnOutline"
import HoverBtn from "../app/components/btns/glow-btn/glow-btn"
import BtnLike from "../app/components/btns/like-btn/like-btn"
import NextBtn from "../app/components/btns/next-btn/next-btn"
import BtnShine from "../app/components/btns/shine-btn/shine-btn"
import SimpleBtn from "../app/components/btns/simple-btn/simple-btn"
// Export individual button components
export const ButtonComponents = {
    BtnDashed,
    BtnGradiant,
    Button1,
    BtnOutlineGradiant,
    BtnThumb,
    BtnOutline,
    HoverBtn,
    BtnLike,
    NextBtn,
    BtnShine,
    SimpleBtn
}

// Export button data with default props
export const ButtonsData = [
    {
      id: "btn1",
      name: "Dashed Button",
      component: BtnDashed,
      defaultProps: {
        classes: " mx-auto",
        text: "button"
      }
    },
    {
      id: "btn2", 
      name: "Gradient Button",
      component: BtnGradiant,
      defaultProps: {
        classes: "py-2 px-4 text-lg",
        text: "button"
      }
    },
    {
      id: "btn4",
      name: "Button One",
      component: Button1,
      defaultProps: {
        classes: "text-center rounded-lg py-2 px-5 w-fit mx-auto",
        text: "button"
      }
    },
    {
      id: "btn5",
      name: "Outline Gradient Button",
      component: BtnOutlineGradiant,
      defaultProps: {
        classes: "py-2 px-4",
        text: "button"
      }
    },
    {
      id: "btn6",
      name: "Thumb Button",
      component: BtnThumb,
      defaultProps: {
        classes: "mx-auto"
      }
    },
    {
      id: "btn7",
      name: "Like Button",
      component: BtnLike,
      defaultProps: {
        classes: " mx-auto"
      }
    },
    {
      id: "btn8",
      name: "Outline Button",
      component: BtnOutline,
      defaultProps: {
        classes: "mx-auto",
        text: "button"
      }
    },
    {
      id: "btn9",
      name: "Hover Button",
      component: HoverBtn,
      defaultProps: {
        classes: "w-fit   mx-auto",
        text: "button"
      }
    },
    {
      id: "btn10",
      name: "Next Button",
      component: NextBtn,
      defaultProps: {
        classes: "w-fit mx-auto",
        text: "button"
      }
    },
    {
      id: "btn11",
      name: "Shine Button",
      component: BtnShine,
      defaultProps: {
        classes: "w-fit text-lg  mx-auto   rounded-lg font-semibold",
        text: "button"
      }
    },
    {
      id: "btn12",
      name: "Simple Button",
      component: SimpleBtn,
      defaultProps: {
        classes: "py-2 px-4 mx-auto  ",
        text: "button"
      }
    }
]

// Usage example in any component:
// import { ButtonComponents, ButtonsData } from '@/lib/buttons'
// const MyButton = ButtonComponents.BtnDashed
// <MyButton {...ButtonsData[0].defaultProps} />