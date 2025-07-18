import Accordion from "./components/menus/Accordion";
import MultiStepForm from "./components/modal/MultiStepForm";

function App() {
  return (
    <div className="bg-cyan-950 text-amber-200 h-full min-h-screen relative">
      <h1 className="text-3xl font-bold pt-20 px-10">About :</h1>
      <p className="text-lg leading-8 px-10">
        In this page, I will practice all important components.
      </p>
      {/* <IconBar /> */}
      {/* <VerticalBar/> */}
      {/* <Modal /> */}
      {/* <Accordion /> */}
      <MultiStepForm />
    </div>
  );
}

export default App;
