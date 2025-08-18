import HoverDropDown from "./components/DropDown/HoverDropDown";
import Accordion from "./components/menus/Accordion";
import Tabs from "./components/menus/Tabs";
import Modal from "./components/modal/Modal";
import MultiStepForm from "./components/forms/MultiStepForm";
import SideBarPushWithOpacity from "./components/SideBar/SideBarPushWithOpacity";
import ImageModal from "./components/modal/ImageModal";
import ImageGallery from "./components/Images/ImageGallery";
import ModalGetComponent from "./components/modal/ModalGetComponent";
import { useEffect, useState } from "react";
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
import SearchFilterList from "./components/Search/SearchFilterList";
import CheckBox from "./components/Inputs/CheckBox";
import CustomSelect from "./components/Select/CustomSelect";
import ProfileCard from "./components/Cards/ProfileCard";
import LongParagraph from "./components/Scroll/LongParagraph";
import ScrollIndicator from "./components/Scroll/ScrollIndicator";
import ImageZoomWithLenz from "./components/Images/ImageZoomWithLenz";
import ContactChip from "./components/Chip/ContactChip";
import HoverableSideNavigation from "./components/SideBar/HoverableSideNavigation";
import CopyTextToClipboard from "./components/Buttons/CopyTextToClipboard";
import StarRate from "./components/Rating/StarRate";
import FullscreenSearch from "./components/Search/FullscreenSearch";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (is) => {
    setIsOpen(is);
  };

  return (
    <div className="bg-cyan-950 text-amber-200 h-full min-h-screen pb-10">
      <ScrollIndicator />
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
      {/* <ToggleSwitch /> */}
      {/* <SearchFilterList /> */}
      {/* <CheckBox /> */}
      {/* <CustomSelect /> */}
      {/* <ProfileCard /> */}
      {/* <LongParagraph /> */}
      <ImageZoomWithLenz
        src={"/img_girl.jpg"}
        zoom={8}
        shape="circle"
        lensSize={100}
      />
      {/* <button
        onClick={() => handleOpen(true)}
        className="bg-amber-300 text-cyan-950 px-4 py-2 rounded-xl m-10"
      >
        open ContactChip
      </button>
      <ContactChip isOpen={isOpen} onOpen={handleOpen} /> */}
      {/* <HoverableSideNavigation /> */}
      {/* <CopyTextToClipboard /> */}
      {/* <StarRate totalStars={5} /> */}
      {/* <button
        onClick={() => handleOpen(true)}
        className="bg-amber-300 text-cyan-950 px-4 py-2 rounded-xl m-10"
      >
        open search
      </button>
      <ModalGetComponent
        isOpen={isOpen}
        handleOpen={handleOpen}
        backdropStyle="bg-amber-300/40"
      >
        <FullscreenSearch />
      </ModalGetComponent> */}
    </div>
  );
}

export default App;
