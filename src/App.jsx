import HoverDropDown from "./components/DropDown/HoverDropDown";
import Accordion from "./components/menus/Accordion";
import Tabs from "./components/menus/Tabs";
import Modal from "./components/modal/Modal";
import MultiStepForm from "./components/forms/MultiStepForm";
import SideBarPushWithOpacity from "./components/SideBar/SideBarPushWithOpacity";
import ImageModal from "./components/modal/ImageModal";
import ImageGallery from "./components/Images/ImageGallery";
import ModalGetComponent from "./components/modal/ModalGetComponent";
import { useState } from "react";
import FadeInOverlay from "./components/Images/FadeInOverlay";
import SlideLeftOverlay from "./components/Images/SlideLeftOverlay";
import ResponsiveNavbar from "./components/NavBar/ResponsiveNavbar";
import FullscreenOverlayNavigation from "./components/Overlay/FullscreenOverlayNavigation";
import PopUp from "./components/PopUp/PopUp";
import Loader from "./components/Loader/Loader";
import ProgressBar from "./components/Progress/ProgressBar";
import AnimatedButtonPressedEffect from "./components/Buttons/AnimatedButtonPressedEffect";
import AnimatedButtonChangeText from "./components/Buttons/AnimatedButtonChangeText";
import MenuIcon from "./components/menus/MenuIcon";
import ToggleSwitch from "./components/Toggle/ToggleSwitch";

function App() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const handleOpen = (is) => {
  //     setIsOpen(is);
  //   };

  return (
    <div className="bg-cyan-950 text-amber-200 h-full min-h-screen">
      <h1 className="text-3xl font-bold pt-20 px-10">About :</h1>
      <p className="text-lg leading-8 px-10">
        In this page, I will practice all important components.
      </p>
      {/* <IconBar /> */}
      {/* <VerticalBar/> */}
      {/* <Modal /> */}
      {/* <Accordion /> */}
      {/* <Tabs /> */}
      {/* <MultiStepForm /> */}
      {/* <HoverDropDown /> */}
      {/* <SideBarPushWithOpacity /> */}
      {/* <ImageModal /> */}
      {/* <button
        className="border px-4 py-3 mx-10 my-4 rounded-lg hover:bg-amber-200 hover:text-black"
        onClick={() => setIsOpen(true)}
      >
        open Modal
      </button>
      <ModalGetComponent isOpen={isOpen} handleOpen={handleOpen}>
        <ImageGallery />
      </ModalGetComponent> */}
      {/* <ImageGallery /> */}
      {/* <FadeInOverlay /> */}
      {/* <SlideLeftOverlay /> */}
      {/* <ResponsiveNavbar /> */}
      {/* <FullscreenOverlayNavigation /> */}
      {/* <PopUp /> */}
      {/* <Loader /> */}
      {/* <ProgressBar /> */}
      {/* <AnimatedButtonPressedEffect /> */}
      {/* <AnimatedButtonChangeText /> */}
      {/* <AnimatedButtonRippleEffect /> */}
      {/* <MenuIcon /> */}
      <ToggleSwitch />
    </div>
  );
}

export default App;
