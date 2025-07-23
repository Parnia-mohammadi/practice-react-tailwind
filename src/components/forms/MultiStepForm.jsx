import { useState } from "react";

const stepsArray = ["Name", "Contact", "Birthday", "Login"];
const isStepValid = (stepIndex, formData) => {
  const key = stepsArray[stepIndex];
  return key === "Birthday"
    ? formData[key].length > 0
    : Object.values(formData[key]).every((value) => value.length > 0);
};

function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    Name: { FirstName: "", LastName: "" },
    Contact: { Email: "", Phone: "" },
    Birthday: "",
    Login: { UserName: "", Password: "" },
  });

  const handleNextStep = () => {
    if (step < stepsArray.length - 1 ) setStep((s) => s + 1);
    else {
      setStep(0);
      console.log("finished");
    }
  };

  const handlePrevStep = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split("-");
    if (keys.length === 1) {
      setFormData({ ...formData, [keys[0]]: value });
    } else if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      setFormData({
        ...formData,
        [parentKey]: { ...formData[parentKey], [childKey]: e.target.value },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(0);
    console.log(e);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <p className="text-xl font-medium my-4">Name :</p>
            <input
              name="Name-FirstName"
              type="text"
              value={formData.Name.FirstName}
              onChange={handleChange}
              required
              placeholder="First Name ..."
              className="p-2 border rounded-sm w-full mb-4"
            />
            <input
              name="Name-LastName"
              type="text"
              value={formData.Name.LastName}
              onChange={handleChange}
              required
              placeholder="Last Name ..."
              className="p-2 border rounded-sm w-full"
            />
          </div>
        );
      case 1:
        return (
          <div>
            <p className="text-xl font-medium my-4">Contact Info :</p>
            <input
              name="Contact-Email"
              type="email"
              value={formData.Contact.Email}
              onChange={handleChange}
              required
              placeholder="Email ..."
              className="p-2 border rounded-sm w-full mb-4"
            />
            <input
              name="Contact-Phone"
              type="tel"
              value={formData.Contact.Phone}
              onChange={handleChange}
              required
              placeholder="Phone ..."
              className="p-2 border rounded-sm w-full"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <p className="text-xl font-medium my-4">Birthday :</p>
            <input
              name="Birthday"
              value={formData.Birthday}
              onChange={handleChange}
              required
              type="date"
              placeholder="Birthday ..."
              className="p-2 border rounded-sm w-full mb-4"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <p className="text-xl font-medium my-4">Login Info :</p>
            <input
              name="Login-UserName"
              value={formData.Login.UserName}
              onChange={handleChange}
              type="text"
              required
              placeholder="UserName ..."
              className="p-2 border rounded-sm w-full mb-4"
            />
            <input
              name="Login-Password"
              value={formData.Login.Password}
              onChange={handleChange}
              required
              type="password"
              placeholder="Password ..."
              className="p-2 border rounded-sm w-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="shadow-orange-300 shadow-sm rounded-xl p-6 my-6 w-2/3 mx-auto">
      <h1 className="text-2xl font-bold text-center">Register :</h1>
      <div className="flex flex-col gap-2">
        {renderStep()}
        <div className="mt-4 flex items-center justify-end">
          <button
            onClick={handlePrevStep}
            className="px-3 py-2.5 bg-yellow-500 text-lg font-semibold rounded-lg mr-4 text-cyan-950 cursor-pointer hover:opacity-80"
          >
            Previous
          </button>
          <button
            onClick={handleNextStep}
            className="px-3 py-2.5 bg-yellow-500 text-lg font-semibold rounded-lg mr-4 text-cyan-950 cursor-pointer hover:opacity-80"
          >
            Next
          </button>
        </div>
        <div className="flex justify-center items-center">
          {stepsArray.map((_, index) => {
            const isCurrentStep = index === step;
            const isStepFilled = isStepValid(index, formData);
            return (
              <span
                key={index}
                className={`rounded-full  w-4 h-4 mr-3 inline-block ${
                  isCurrentStep ? "opacity-100" : "opacity-60"
                }
                ${isStepFilled ? "bg-amber-500" : "bg-amber-300"}
                `}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
